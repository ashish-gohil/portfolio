import { ReactNode, useState } from "react";
import SideNavBar from "./SideNavBar";

const Card = ({ children }: { children: ReactNode }) => {
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = e.currentTarget;
    const cardWidth = card?.offsetWidth;
    const cardHeight = card?.offsetHeight;
    const centerX = card?.offsetLeft + cardWidth / 2;
    const centerY = card?.offsetTop + cardHeight / 2;
    let rotateX = 0;
    let rotateY = 0;

    if (
      e.clientY > card?.offsetTop &&
      e.clientY < card?.offsetTop + cardHeight
    ) {
      rotateX = ((centerY - e.clientY) * 25) / cardHeight;
    }
    if (
      e.clientX > card?.offsetLeft &&
      e.clientX < card?.offsetLeft + cardWidth
    ) {
      rotateY = ((centerX - e.clientX) * 25) / cardWidth;
    }

    setRotation({ rotateX, rotateY });
    console.log(rotateX, rotateY);
  };

  const handleMouseLeave = () => {
    setRotation({ rotateX: 0, rotateY: 0 });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div
          className="w-[80vw] h-[80vh] relative z-10  bg-[#0A214B] rounded-[20px] shadow-lg scale-3d transition-transform duration-200 "
          style={{
            perspective: "300px",
            transform: `rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`,
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="content-container flex items-center flex-row   h-full w-full justify-between">
            {children}
            <SideNavBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
