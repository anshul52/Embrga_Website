export const Star = ({ filled }) => {
  return (
    <span
      style={{
        fontSize: "20px",
        cursor: "pointer",
        color: filled ? "#fcb95d" : "gray",
      }}
    >
      ★
    </span>
  );
};
