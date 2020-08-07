import React from "react";
import { Link } from "react-router-dom";

import Users from "./../../components/Users/index";

export default function Home() {
  const users = [
    { id: 1, name: "John Doe", email: "john@doe.com", gener: "M" },
    { id: 2, name: "Jane Doe", email: "jane@doe.com", gener: "F" },
    { id: 3, name: "Adams Doe", email: "adams@doe.com", gener: "M" },
    { id: 4, name: "Tania Doe", email: "tania@doe.com", gener: "F" },
  ];

  return (
    <>
      <h1>Users</h1>
      <Link to="add" title="Adicionar">
        {" "}
        Add user{" "}
      </Link>

      <Users users={users} />
    </>
  );
}
