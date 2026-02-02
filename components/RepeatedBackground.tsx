import React from "react";

const RepeatingBackground = ({
  imageUrl,
  children,
}: {
  imageUrl?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: `url(${imageUrl || "/background.jpg"})`,
        backgroundRepeat: "repeat",
        backgroundPosition: "top left",
        backgroundSize: "auto",
      }}
    >
      {children}
    </div>
  );
};

export default RepeatingBackground;
