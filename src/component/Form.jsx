import React from "react";

export function Form({ list, setList, setView }) {
    const input = React.useRef();

    const onAdd = (event) => {
        event.preventDefault();
        const selector = input.current;
        if (!selector.value) return;
        const newList = [...list, { name: selector.value }];
        setList(newList);
        setView("list");
    };

    return (
        <div className="centered">
            <h1>Agrega un elemento a la lista</h1>
            <input ref={input} type="text" name="name"/>
            <button onClick={onAdd}>Agregar</button>
        </div>
    );
}