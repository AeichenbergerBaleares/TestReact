import React from "react";

export function ForgotPassword({setView, setUsuarios, usuarios})
{
    const inputMail = React.useRef();

    //const ListaUsuariosJSON = localStorage.getItem('Usuarios');
    const ListaUsuarios = usuarios

    const onClick = () =>
    {
        const Mail = inputMail.current;

        if(Mail != undefined)
        {
            let counter = 0;

            ListaUsuarios.forEach (u =>
            {
                if (Mail.value == u.Mail)
                {
                    counter++
                }
            });

            if(counter > 0)
            {
                alert("Lamentamos informar que el cambio de contraseña todavía no se encuentra implementado, disculpe las molestias.");
                setView("logIn");
            }
            else
            {
                alert("No existe un usuario registrado con esa direccion de correo ¿Mail equivocado? ¿Todavía no se ha registrado?.");
            }
        }
    };

    const logIn = () =>
    {
        setView("logIn");
    };

    function handleKeyPress(e)
    {
        if (e.key === 'Enter')
        {
            onClick();
        }
    }

    return (
        <>
        <button className="iniciarSesion" onClick={logIn}>Iniciar Sesion</button>
            <div className="fixtocenter row">
                <h1>Recuperar Cuenta</h1>
                <h2 className="subTitle">Ingrese el mail con el cual registro su cuenta, Le enviaremos un codigo de recuperacion.</h2>
                <input ref={inputMail} type="text" name="Mail" placeholder="Mail" style={{width:"100%"}}/>
                <button onKeyPress={(e) => handleKeyPress(e)} onClick={onClick}>Enviar</button>
            </div>
        </>
    );
}