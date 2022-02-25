import { useState } from "react";
import {SignUp} from "./component/SignUp";
import {LogIn} from "./component/LogIn";
import {List} from "./component/List";
import {Form} from "./component/Form";
import {getListaUsuarios} from './customHooks/listUsers'
import {ForgotPassword} from "./component/ForgotPassword";
import 'bootswatch/dist/sketchy/bootstrap.min.css';
import "./styles/App.css";

export function App()
{
  const [view, setView] = useState("login");

  const [usuarios, setUsuarios] = useState(getListaUsuarios());

  let ListaUsuarios;
  const ListaUsuariosJSON = window.localStorage.getItem('Usuarios');

  if(ListaUsuariosJSON === null)
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
      ]
  }
  else if(ListaUsuariosJSON != null)
  {
      ListaUsuarios = JSON.parse(ListaUsuariosJSON)
  }

  localStorage.setItem('Usuarios', JSON.stringify(ListaUsuarios))

  const tachado = {textDecoration:'line-through'};
  const noTachado = {textDecoration:'none'};

  let Control
  switch(view)
  {
      case "list": Control = List; break;
      case "form": Control = Form; break;
      case "signUp": Control = SignUp; break;
      case "forgotPassword": Control = ForgotPassword; break;
      default: Control = LogIn;
  }

  return (
    <>
      <Control setView={setView} setUsuarios={setUsuarios} usuarios={usuarios}/>
      <div className='consigna'>
        <h2>Cierta empresa ha decidido abrir unos cuantos cursos de informática; Por lo tanto, esta nos ha pedido un sistema web con el cual puedan agregar, quitar, modificar y revisar tanto los cursos como sus datos.</h2>
        <ul className='toDo' style={noTachado}>⚫ Se deben poder listar los cursos.</ul>
        <ul className='toDo' style={noTachado}>⚫ Se deben poder agregar nuevos cursos y modificar o eliminar los existentes.</ul>
        <ul className='toDo' style={noTachado}>⚫ Los cursos nuevos registrados deben tener al menos un día a la semana de horario.</ul>
        <ul className='toDo' style={noTachado}>⚫ Un usuario debe poder registrarse y seleccionar los cursos en los cuales desea participar.</ul>
        <ul className='toDo' style={noTachado}>⚫ El usuario registrado debe poder modificar sus datos.</ul>
        <ul className='toDo' style={noTachado}>⚫ Un usuario no puede seleccionar dos cursos que tengan el mismo dia como horario.</ul>
        <ul className='toDo' style={noTachado}>⚫ Indicaciones de interés.</ul>
        <ul className='toDo' style={noTachado}>⚫ Los datos de los cursos y alumnos deben ser guardados en localStorage</ul>
        <ul className='toDo' style={noTachado}>⚫ Se deben de utilizar los objetos Cursos y Estudientes para controlar la lógica del manejo de datos con localStorage.</ul>
        <ul className='toDo' style={noTachado}>⚫ Debes realizar un Fork de este repositorio y dejarlo disponible en github cuando finalices.</ul>
      </div>
    </>
  );
}

