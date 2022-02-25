import {useRef, useEffect} from "react";

export function Form({setView, setUsuarios, usuarios}) {
    const input = useRef();

    const onAdd = () =>
    {
        const selector = input.current;
        if (!selector.value) return;

        let listadoCursos;

        if(localStorage.getItem('listadoCursos') !== null)
        {
            listadoCursos = JSON.parse(localStorage.getItem('listadoCursos'))
        }
        else
        {
            listadoCursos = []
        }

        listadoCursos.push({ name: selector.value });
        localStorage.setItem('listadoCursos', JSON.stringify(listadoCursos))
        setView("list");
    };

    const back = () =>
    {
        setView("list");
    };

    useEffect ( () =>
        {
            input.current.focus();
        }
    )

    function handleKeyPress(e)
    {
        if (e.key === 'Enter')
        {
            onAdd();
        }
    }

    return (
        <div className="fixtocenter">
            <h1>Agrega un curso a la lista</h1>
            <input ref={input} type="text" name="name" style={{width:"8em"}}/>
            <button onClick={onAdd} onKeyPress={(e) => handleKeyPress(e)}>Agregar</button>
            <button onClick={back}>Volver</button>
        </div>
    );
}