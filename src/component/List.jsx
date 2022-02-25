import { useEffect, useState } from "react";
import { Item } from "./Item";

export const List = ({setView, usuarios}) =>
{
    function handleKeyPress(e)
    {
        if (e.key === 'Enter')
        {
            e.preventDefault();
            mouseClick();
        }
    }

    const mouseClick = () =>
    {
        setView("form");
    };

    const exit = () =>
    {
        localStorage.removeItem('currentUser');
        setView("logIn");
    };

    const [isActive, setActive] = useState(false);

    useEffect(() =>{JSON.parse(localStorage.getItem("currentUser")).Rol !== "Administrador" ? setActive(false) : setActive(true);})

    let listadoCursos = JSON.parse(localStorage.getItem('listadoCursos'));

    if(listadoCursos === null) { listadoCursos = [] }

    const output = listadoCursos.map((item) => <Item key={item.name} item={item} />);

    if(output === null){output =[]}

    return (
        <>
            <h1>Listado de cursos</h1>
            <ul>{output}</ul>
            { isActive ? <button onClick={mouseClick} onKeyPress={(e) => handleKeyPress(e)} className="relativecenter">Agregar</button> : null }
            <button className="cerrarSesion" onClick={exit}>Cerrar Sesion</button>
        </>
    );
};