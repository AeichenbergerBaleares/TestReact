import { useState } from "react";

export const Item = ({ item }) => {

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

    return (
      <li className={isActive ? 'item-selected': "items"}
      onClick={toggleClass}>
        {item.name}
      </li>
    );
  };