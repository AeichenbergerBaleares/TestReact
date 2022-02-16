export const Item = ({ item }) => {
    const onClick = () =>
    {
    };

    return (
      <li onClick={onClick} className="item centered">
        {item.name}
      </li>
    );
  };