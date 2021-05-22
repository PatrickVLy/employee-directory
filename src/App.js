import React, { useEffect, useState } from "react";
import FilterInput from "./FilterInput";
import Table from "./Table";
import { getUsers } from "./API";
import "./App.css";


function App() {
    const [initialUsers, updateAvailableUsers] = useState([]);
    const [usersToRender, updateUsersToRender] = useState([]);
  
    useEffect(() => {
      getUsers().then(({ data: { results } }) => updateAvailableUsers(results));
    }, []);
  