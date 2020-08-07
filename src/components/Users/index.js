import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Users(props) {
  async function handleDeletIncident() {
    console.log("Apagado com sucesso.");
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Genero</th>
          <th>Opções</th>
        </tr>
      </thead>

      <tbody>
        {props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.gener}</td>
            <td>
              <Link to={`update/${user.id}`} title="Editar">
                Editar
              </Link>

              <button
                type="button"
                onClick={() => handleDeletIncident(user.id)}
              >
                Apagar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
