import {useState, useEffect} from 'react';
import {Users} from "./localstorage/Data";
import {Login} from "./component/Login"
import {List} from "./component/List"
import {Form} from "./component/Form"
import 'bootswatch/dist/sketchy/bootstrap.min.css';
import "./styles/App.css"

class A
{
  constructor()
  {
  }
}
export function App()
{
  const [list, setList] = useState(Users);

  const [view, setView] = useState("login");
  let  Control;

  switch(view)
  {
    case "list":
      Control = List;
      break;
    case "form":
      Control = Form;
      break;
    default:
      Control = Login;
  }

  useEffect ( () =>
  {
    const a = new A();
    return () =>
    {
    };
  }, []);

  return (
    <>
      <Control setList={setList} setView={setView} list={list} />
    </>
  );
}

