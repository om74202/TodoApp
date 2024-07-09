import { useState } from "react";

  

export function CreateTodo(props){
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    return <div>


        <input type="text" placeholder="title" 
        onChange={function(e){
            const value=e.target.value;
            setTitle(value);
        }}></input><br />


        <input type="text" placeholder="description" 
        onChange={function(e){
            const value=e.target.value;
            setDescription(value);
        }}/><br />


<button style={{
            padding: 10,
            margin: 10
        }} onClick={() => {
            const data = JSON.stringify({
                title: title,
                description: description,
              });
    
              // Set Content-Length header based on data size
              const body = new Blob([data], { type: "application/json" });
            // axios
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body,
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(async function(res) {
                    const json = await res.json();
                    alert("Todo added");
                })
        }}>Add a todo</button>


        
    </div>
}