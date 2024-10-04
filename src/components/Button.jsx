export default function Button({ background, color, text }) {
  return (
    <button
      style={{
        padding: ".5rem 2rem",
        border: 0,
        borderRadius: "5px",
        background: background,
        color: color,
      }}
    >
      {text}
    </button>
  );
}
