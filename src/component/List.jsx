import { Item } from "./Item";

export const List = ({ list, setView }) => {
    const output = list.map((item) => <Item key={item.name} item={item} />);
    return (
        <div className="centered">
            <h1>Lista de usuarios</h1>
            <ul>{output}</ul>
            <button onClick={() => setView("form")}>Agregar</button>
        </div>
    );
};