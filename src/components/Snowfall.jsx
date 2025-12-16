// Snowfall.jsx
import Snowflake from "./Snowflake";

export default function Snowfall({ count = 50 }) {
  return (
    <div className="snowfall">
      {Array.from({ length: count }).map((_, i) => (
        <Snowflake key={i} />
      ))}
    </div>
  );
}
