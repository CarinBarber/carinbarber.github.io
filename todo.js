// Grab elements
const todoList = document.querySelector('.todo-list')
const todoInput = document.querySelector('#new-todo')
const btnAddTodo = document.querySelector('#add-todo')
//  Create array from LS items
let todos = JSON.parse(localStorage.getItem('todo-list')) || []; 

// Method to clear and rebuild UL
const renderTodos = () => {
    // Clear any existing content
    todoList.innerHTML = ''
    // Build the list
    todos.forEach(todo => {
        // Create new li for each item
        const li = document.createElement('li')
        // Set li text content
        li.textContent = todo.item
        // Add item to the list
        todoList.append(li)
    })
}

// Add item method for clicklistener
const addItem = () => {
    // Get input; remove stray spaces
    const inputText = todoInput.value.trim()
    // If no input, exit so we dont create an empty object
    if(inputText === "") return

    // Create todo obj for array
    const newTodo = { item: inputText, status: false}
    // Add obj to array
    todos.push(newTodo)

    // Save array to LS with k/v while conerting array to string
    localStorage.setItem('todo-list', JSON.stringify(todos))

    // Exec render method
    renderTodos()

    // Clear input
    todoInput.value = ''
}

// Set listener and exec addItem on click
btnAddTodo.addEventListener('click', addItem)
// Exec render method to display contents in UL
renderTodos()