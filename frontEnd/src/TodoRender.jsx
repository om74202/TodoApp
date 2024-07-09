export function TodoRender({todos}){


    return <div>


        {todos.map(function(todo){      //treverse it through out the array
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button >{todo.completed==true ? "Completed" : "mark as Completed"}</button>
            </div>
        })}
        

    </div>
}