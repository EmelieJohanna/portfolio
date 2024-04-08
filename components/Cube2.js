// cube with arms?

export default function Cube2() {
  const cubeStyle = {
    width: "128px", // Tailwind's w-32
    height: "128px", // Tailwind's h-32
    backgroundColor: "#4F46E5", // Tailwind's bg-indigo-500
    position: "relative",
    margin: "50px",
  };

  const topFaceStyle = {
    position: "absolute",
    content: '""',
    width: "96px", // Tailwind's w-24
    height: "24px", // Tailwind's h-6
    bottom: "-24px",
    right: "-40px",
    backgroundColor: "#4338CA", // A shade darker than bg-indigo-500 for effect
    transform: "skewY(45deg)",
    boxShadow: "5px -5px 10px rgba(0, 0, 0, 0.5)",
  };

  const sideFaceStyle = {
    position: "absolute",
    content: '""',
    width: "24px", // Tailwind's w-6
    height: "128px", // Tailwind's h-32
    top: "-24px",
    right: "-40px",
    backgroundColor: "#3730A3", // A shade darker than bg-indigo-500 for effect
    transform: "skewX(45deg)",
    boxShadow: "5px 0 10px rgba(0, 0, 0, 0.5)",
  };

  return (
    <div style={cubeStyle} className="relative bg-indigo-500">
      <div style={topFaceStyle}></div>
      <div style={sideFaceStyle}></div>
    </div>
  );
}
