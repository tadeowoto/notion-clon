import Menu from "../icons/menu.tsx";
import { useState } from "react";

export const HeaderMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen);

  return (
    <div>
      <button onClick={handleClick}>
        <Menu />
      </button>
      {isOpen && <div>TODO: Menu</div>}
    </div>
  );
};
