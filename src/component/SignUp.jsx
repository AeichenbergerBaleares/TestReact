import { useRef } from "react";
import { AddUser } from "../customHooks/addNewUser";

export const SignUp = ({setView, setUsuarios, usuarios}) =>
{
    const inputNombre = useRef();
    const inputApellido = useRef();
    const inputMail = useRef();
    const inputContraseña = useRef();

    function handleKeyPress(e)
    {
        if (e.key === 'Enter')
        {
            AddUser(inputNombre, inputApellido, inputMail, inputContraseña);
        }
    }

    const onClick = (e) =>
    {
        e.preventDefault()

        if(inputNombre !== undefined && inputApellido !== undefined && inputMail !== undefined && inputContraseña !== undefined)
        {
            AddUser(inputNombre, inputApellido, inputMail, inputContraseña);
            setView("logIn");
        }
    }

    const exit = () =>
    {
        setView("login");
    }

    return (
        <>
            <button className="iniciarSesion" onClick={exit}>Iniciar Sesion</button>
            <div className="fixtocenter row">
            <h1>Crea tu cuenta e inscribete a nuestra variada seleccion de cursos</h1>
            <h2 className="subTitle">Desarrollados en conjunto con los mejores expertos del area educativa, avalados por profesionales que ejercen, con una amplia y marcada traytectoria en la informatica.</h2>
            <input ref={inputNombre} type="text" name="Nombre" placeholder="Nombre"/>
            <input ref={inputApellido} type="text" name="Apellido" placeholder="Apellido"/>
            <input ref={inputMail} type="text" name="Mail" placeholder="Mail"/>
            <input ref={inputContraseña} type="password" name="Contraseña" placeholder="Contraseña"/>
            <button onKeyPress={(e) => handleKeyPress(e)} onClick={(e) => onClick(e)}>Registrarse</button>
            </div>
        </>
    );
}