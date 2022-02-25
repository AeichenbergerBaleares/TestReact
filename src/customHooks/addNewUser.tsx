import { Usuarios } from '../interfaces/Usuarios';

export const AddUser = (
    inputNombre : any,
    inputApellido : any,
    inputMail : any,
    inputContraseña : any
) =>
{
    type InputUndefined = HTMLInputElement;

    let Nombre : InputUndefined;

    if (null !== inputNombre.current)
    {Nombre = inputNombre.current;}

    let Apellido : InputUndefined;

    if (null !== inputApellido.current)
    {Apellido = inputApellido.current;}

    let Mail : InputUndefined;

    if (null !== inputMail.current)
    {Mail = inputMail.current;}

    let Contraseña : InputUndefined;

    if (null !== inputContraseña.current)
    {Contraseña = inputContraseña.current;}

    let usuariosJSON = localStorage.getItem('Usuarios');
    let usuarios : Usuarios[];
    let idNumber : number;

    if(usuariosJSON == null)
    {
        usuariosJSON = '{key : 0, Nombre : "Admin", Mail : "admin@admin.com", Contraseña : "123", Rol : "Administrador"}';
        localStorage.setItem('Usuarios', usuariosJSON)
        idNumber = 1;
    }
    else
    {
        const usuariosLocalStorage : Usuarios[] = JSON.parse(usuariosJSON)
        idNumber = Math.max(...usuariosLocalStorage.map(object => { return object.key;}));
    }

    usuarios = JSON.parse(usuariosJSON);

    const ids = usuarios.map((object : Usuarios) => {return object.key;});
    idNumber = Math.max(...ids);
    localStorage.setItem('idCounter', idNumber.toString());

    if(usuarios != null)
    {
        let breaker = false;
        let usuario : Usuarios;

        const Mails = usuarios.map((object : Usuarios) => {return object.Mail;});

        const alreadyMail = Mails.indexOf(inputMail.current.value)

        if(alreadyMail !== -1)
        {
            alert("Ya existe un usuario registrado con esa direccion de correo ¿Olvido su contraseña?.");
            breaker = true;
        }

        if(inputContraseña.current.value.lenght <= 3)
        {
            alert("Su contraseña debe de tener por lo menos 4 caracteres.");
            breaker = true;
        }

        if (inputNombre.current.value.length == 0)
        {
            alert("El campo nombre no puede quedar vacio.");
            breaker = true;
        }

        if (inputApellido.current.value.length == 0)
        {
            alert("El campo apellido no puede quedar vacio.");
            breaker = true;
        }

        if(breaker == false)
        {
            usuario =
            {
                key :  idNumber + 1,
                Nombre : inputNombre.current.value + " " + inputApellido.current.value,
                Mail : inputMail.current.value,
                Contraseña : inputContraseña.current.value,
                Rol : "Alumno",
                cursos : []
            }
            usuarios.push(usuario);
            localStorage.setItem('Usuarios', JSON.stringify(usuarios));
            localStorage.setItem('idCounter', (idNumber + 1).toString());
            alert("Usuario creado, inicie sesion e inscribase a los cursos que desee participar.");
        }
    }
};