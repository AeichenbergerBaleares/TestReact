import { useState } from "react";

export const getListaUsuarios = () =>
{
  const ListaUsuariosJSON = localStorage.getItem('Usuarios');
let ListaUsuarios;

if(ListaUsuariosJSON === null && ListaUsuariosJSON === undefined)
{
  ListaUsuarios =
  [
    {
      key : 0,
      Nombre : "Admin",
      Mail : "admin@admin.com",
      Contraseña : "123",
      Rol : "Administrador"
    }
  ];
  localStorage.setItem('Usuarios',JSON.stringify(ListaUsuarios))
}
else if(ListaUsuariosJSON != null)
{
  ListaUsuarios = JSON.parse(ListaUsuariosJSON)
}

return ListaUsuarios
}