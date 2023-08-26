    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    // let arrayOfTodos = [
    //     {
    //     "userId": 14,
    //     "id": 1,
    //     "title": "delectus aut autem",
    //     "completed": false
    // },
    // {
    //     "userId": 20,
    //     "id": 2,
    //     "title": "delectus aut autem",
    //     "completed": false
    // }]

    // console.log(arrayOfTodos[1].title)
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
    
    const populateTodos = () => {
        const orderedList = document.getElementById("todo-list")
        
        
        const arrLoop = (arr) => {
            for (i = 0; i < arrayOfTodos.length; i++) {
                
                
                console.log(arr[i]);
                const textNode = document.createTextNode(arrayOfTodos[i].title)
                const newTodo = document.createElement("LI");
                orderedList.appendChild(newTodo)
                newTodo.appendChild(textNode)
                
            }
        }
        
        
        
        arrLoop(arrayOfTodos)
        
    }
    
    const clearEntry = () => {

        const orderedFilterList = document.getElementById("todo-list")
        
        orderedFilterList.innerHTML = '';

        

        const userIdNumber = parseInt(document.getElementById("userId").value);
        const filterTodos = arrayOfTodos.filter(number => number.userId === userIdNumber)

        const filteredLoop = (array) => {
        for (i=0; i < array.length; i++) {

            console.log(array[i]);
            
            const todo = array[i];
            const newFilterTodo = document.createElement("LI")
            const textFilterNode = document.createTextNode(todo.title)
            orderedFilterList.appendChild(newFilterTodo)
            newFilterTodo.appendChild(textFilterNode)
    }
    
    }

    filteredLoop(filterTodos)
}

