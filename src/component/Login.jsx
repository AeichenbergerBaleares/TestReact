import React from "react";

export function Login({ setView })
{
    const inputMail = React.useRef();
    const inputContraseña = React.useRef();

    const onAdd = (event) => {
        event.preventDefault();
        const Mail = inputMail.current;
        const Contraseña = inputContraseña.current;
        if (Mail.value == "asd" && Contraseña.value == "asd")
        setView("list");
    };

    return (
        <div className="centered">
            <h1>Iniciar Sesion</h1>
            <input ref={inputMail} type="text" name="Mail" placeholder="Mail"/>
            <input ref={inputContraseña} type="password" name="Contraseña" placeholder="Contraseña"/>
            <button onClick={onAdd}>Ingresar</button>
        </div>
    );
}