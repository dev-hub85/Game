// Array of background and border color pairs
export const cardColors = [
  { bg: "#0FF0FC", border: "#0FF0FC" }, // Dark blue / neon cyan
  { bg: "#FF4C4C", border: "#FF4C4C" }, // Dark gray / neon red
  { bg: "#FFD700", border: "#FFD700" }, // Deep blue / gold
  { bg: "#DA70D6", border: "#DA70D6" }, // Dark purple / orchid
  { bg: "#00FF7F", border: "#00FF7F" }, // Teal / neon green
  { bg: "#FF69B4", border: "#FF69B4" }, // Dark gray / hot pink
  { bg: "#FFA500", border: "#FFA500" }, // Dark gray / orange
  { bg: "#7CFC00", border: "#7CFC00" }, // Midnight blue / lime green
  { bg: "#FF4500", border: "#FF4500" }, // Dark brown / orange-red
  { bg: "#1E90FF", border: "#1E90FF" }, // Dark indigo / dodger blue
  { bg: "#00CED1", border: "#00CED1" }, // Black / dark turquoise
  { bg: "#FF1493", border: "#FF1493" }, // Dark gray / deep pink
];

// Example usage: get a random card color
export const randomColor = cardColors[Math.floor(Math.random() * cardColors.length)];
