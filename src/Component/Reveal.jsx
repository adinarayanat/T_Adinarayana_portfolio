import React, { useEffect, useRef, useState } from "react";

// One shared observer for every Reveal on the page; each element reveals once.
let sharedObserver;
const callbacks = new WeakMap();

const getObserver = () => {
  if (sharedObserver || typeof IntersectionObserver === "undefined") {
    return sharedObserver;
  }
  sharedObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callbacks.get(entry.target)?.();
          sharedObserver.unobserve(entry.target);
          callbacks.delete(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );
  return sharedObserver;
};

const Reveal = ({ as: Tag = "div", delay = 0, className = "", children, ...rest }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    const observer = getObserver();
    if (!node || !observer) {
      setVisible(true);
      return undefined;
    }
    callbacks.set(node, () => setVisible(true));
    observer.observe(node);
    return () => {
      observer.unobserve(node);
      callbacks.delete(node);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { "--reveal-delay": `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
