import React from "react";
import carImage from "../../assets/3d/car-2.png"; // replace with your car image path

const CarShowcase = () => {
  return (
    <div
      className="fixed flex justify-center items-end"
      style={{
        left: "100px",
        top: "0px",
        margin: "0px",
        maxWidth: "994px",
        width: "994px",
        maxHeight: "858px",
        height: "858px",
        padding: "0px",
        boxSizing: "border-box",
        transform: "translate(0px, 0px)",
        fontFamily: "Roobert, sans-serif",
        fontWeight: 400,
        lineHeight: 1.5,
      }}
    >
      <img
        src={carImage}
        alt="Car"
        className="w-full h-auto object-contain"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      />
    </div>
  );
};

export default CarShowcase;
