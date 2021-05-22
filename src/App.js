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
    return (
        <div className="App">
          <div className="App-header"><h1>Employee Directory</h1>
          <p>
            To Sort by First name, please click on FirstName. To Filter by first name please enter name into text box.
          </p>
          <FilterInput users={initialUsers} updateUsers={updateUsersToRender} />
          </div>
          <Table users={usersToRender} />
        </div>
      );
    }
    
    export default App;