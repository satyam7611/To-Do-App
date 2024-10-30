// Initialize the todo list with some predefined items
let todoList = [
    {
        Item: 'Buy Milk',
        dueDate: '30/10/2024'
    },
    {
        Item: 'Go to college',
        dueDate: '30/10/2024' // Note: 'duedate' should be 'dueDate' for consistency
    }
];

// Call the displayItem function to show the initial todo list
displayItem();

// Function to add a new todo item
function AddToDo() {
    // Get the input elements for the todo item and due date
    let inputElement = document.querySelector('#todo_input');
    let dateElement = document.querySelector('#todo-date');

    // Retrieve the values entered by the user
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;

    // Add the new todo item to the todoList array
    todoList.push({ Item: todoItem, dueDate: todoDate });

    // Clear the input fields after adding the item
    inputElement.value = '';
    dateElement.value = '';

    // Refresh the displayed todo items
    displayItem();
}

// Function to display the todo items in the UI
function displayItem() {
    // Get the container element where the todo items will be displayed
    let ContainerElement = document.querySelector('.toDo-container');
    let newHtml = ''; // Initialize an empty string to build the HTML

    // Loop through each item in the todoList array
    for (let i = 0; i < todoList.length; i++) {
        let item = todoList[i].Item; // Get the todo item
        let dueDate = todoList[i].dueDate; // Get the due date

        // Build the HTML for each todo item
        newHtml += `
            <span>${item}</span> <!-- Display the todo item -->
            <span>${dueDate}</span> <!-- Display the due date -->
            <button class="btn-delete" onclick="todoList.splice(${i}, 1); displayItem();">Delete</button> <!-- Delete button -->
        `;
    }

    // Update the inner HTML of the container to display the todos
    ContainerElement.innerHTML = newHtml;
}