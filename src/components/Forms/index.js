import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Form(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gener, setGener] = useState("");

  var [isUpdate, setIsUpdate] = useState(false);

  if (props.isUpdate) {
    setIsUpdate = true;
  } else {
    setIsUpdate = false;
  }

  const history = useHistory();

  async function handleNewUser(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      gener,
    };

    console.log("new user");

    console.log(data);

    //history.push("/");
  }

  async function handleUpdateUser(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      gener,
    };

    console.log("update");

    console.log(data);

    //history.push("/");
  }

  async function onSelectNewOrUpdate() {
    if (isUpdate) {
      handleUpdateUser();
    } else {
      handleNewUser();
    }
  }

  return (
    <>
      <h4>{props.title}</h4>

      <form onSubmit={onSelectNewOrUpdate}>
        <label htmlFor="name">Nome: </label>

        <input
          placeholder="Nome do usuário"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email: </label>
        <input
          placeholder="Email do usuário"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="email">Genero: </label>
        <input
          placeholder="Genero do usuário"
          value={gener}
          onChange={(e) => setGener(e.target.value)}
        />

        <input type="submit" value="Cadastrar" />
      </form>
    </>
  );
}
