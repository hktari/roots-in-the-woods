import React, { useState } from "react";

type NavBarProps = {
  openMenuClicked: () => void;
};

const Dropdown = ({ children }: JSX.Element) => {
  const [active, setActive] = useState(false);

  return (
    <div className={`c-dropdown ${active ? "c-dropdown--active" : ""}`}>
      <span
        className="c-dropdown__title c-link"
        onClick={() => setActive(!active)}
      >
        Lineup
      </span>
      <ul className="c-dropdown__list">
        {React.Children.map(children, (child) => (
          <li className="c-dropdown__list-item">
            {React.cloneElement(child, {
              style: { ...child.props.style, opacity: 0.5 },
            })}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
