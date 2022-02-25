import {useRef} from "react";

export function LogIn({setView, setUsuarios, usuarios})
{
    if(localStorage.getItem('currentUser') !== null)
    {
        setView('list');
    }

    const inputMail = useRef();
    const inputContraseña = useRef();

    const onAdd = () =>
    {
        let Mail;
        if(inputMail.current != undefined){Mail = inputMail.current};

        let Contraseña;
        if(inputContraseña.current != undefined){Contraseña = inputContraseña.current};

        let counter = 0;

        setUsuarios(JSON.parse(localStorage.getItem('Usuarios')))

        usuarios.forEach ((u) =>
        {
            if(Mail != null && Contraseña != null)
            {
                if (Mail.value == u.Mail && Contraseña.value == u.Contraseña)
                {
                    counter++;
                }
            }
        });

        if(counter > 0)
        {
            const currentUser = usuarios.find(u => {return u.Mail === Mail.value})
            localStorage.setItem('currentUser', JSON.stringify(currentUser))
            setView("list");
        }
        else
        {
            alert("Credenciales invalidas, intentelo nuevamente.");
        }
    };

    const signUp = () =>
    {
        setView("signUp");
    };

    const forgor = () =>
    {
        setView("forgotPassword");
    };

    function handleKeyPress(e)
    {
        if (e.key === 'Enter')
        {
            onAdd();
        }
    }

    return (
        <>
        <button className="iniciarSesion" onClick={signUp}>Registrarse</button>
            <div className="fixtocenter row">
                <h1>Iniciar Sesion</h1>
                <input ref={inputMail} type="text" name="Mail" placeholder="Mail"/>
                <input ref={inputContraseña} type="password" name="Contraseña" placeholder="Contraseña"/>
                <button onKeyPress={(e) => handleKeyPress(e)} onClick={onAdd}>Ingresar</button>
                <h6 className="items forgotPassword" onClick={forgor}>¿Olvidaste tu contraseña?</h6>
            </div>
        </>
    );
}