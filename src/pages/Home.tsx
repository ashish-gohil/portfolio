import { useState } from "react";

const Card = () => {
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = e.currentTarget;
    const cardWidth = card?.offsetWidth;
    const cardHeight = card?.offsetHeight;
    const centerX = card?.offsetLeft + cardWidth / 2;
    const centerY = card?.offsetTop + cardHeight / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateX = (25 * mouseY) / (cardHeight / 2);
    const rotateY = (-25 * mouseX) / (cardWidth / 2);

    setRotation({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ rotateX: 0, rotateY: 0 });     
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div
        className="w-72 h-48 bg-white rounded-lg shadow-lg transition-transform duration-200"
        style={{
          perspective: "1000px",
          transform: `rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center justify-center h-full">
          <h1 className="text-xl font-bold">3D Card</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
