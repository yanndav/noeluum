import { useEffect, useState } from "react";

export default function SnowBottom({ startDelay = 5000 }) {
  const [height, setHeight] = useState(20); // initial snow height in px
  const [start, setStart] = useState(false);

  useEffect(() => {
    // wait for first snowflakes to fall
    const delayTimeout = setTimeout(() => {
      setStart(true);
    }, startDelay);

    return () => clearTimeout(delayTimeout);
  }, [startDelay]);

  useEffect(() => {
    if (!start) return;

    const interval = setInterval(() => {
      setHeight((prev) => (prev < 200 ? prev + 1 : prev));
    }, 400); // growth step

    return () => clearInterval(interval);
  }, [start]);

  return (
    <div className="snowbottom-container">
      <div className="snow-bottom" style={{ height: `${height}px` }} />
    </div>
  );
}
