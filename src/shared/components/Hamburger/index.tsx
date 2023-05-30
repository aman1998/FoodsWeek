import { FC } from "react";

const Hamburger: FC<{ isOpen: boolean; setIsOpen: (isOpen: boolean) => void }> = ({ isOpen, setIsOpen }) => (
  <a
    className="hamburger"
    onClick={() => {
      setIsOpen(!isOpen);
    }}
  >
    <div
      className="hamburger__burger hamburger__burger--1"
      style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)" }}
    />
    <div
      className="hamburger__burger hamburger__burger--2"
      style={{
        transform: isOpen ? "translateX(100%)" : "translateX(0)",
        opacity: isOpen ? 0 : 1,
      }}
    />
    <div
      className="hamburger__burger hamburger__burger--3"
      style={{ transform: isOpen ? "rotate(-45deg)" : "rotate(0)" }}
    />
  </a>
);

export default Hamburger;
