let todoList=[
{
Item:'Buy Milk',
dueDate:'30/10/2024'
},

{
Item:'Go to college',
duedate:'30/10/2024'
}
];
displayItem();

function AddToDo(){
    let inputElement=document.querySelector('#todo_input');
    let dateElement=document.querySelector('#todo-date');
    
    let todoItem=inputElement.value;
    let todoDate=dateElement.value;
   todoList.push({Item:todoItem,dueDate:todoDate});
   inputElement.value='';
   dateElement.value=''; 
   displayItem();
}
function displayItem()
{
 let ContainerElement=document.querySelector('.toDo-container');
let newHtml='';
 for(let i=0; i<todoList.length;i++)
 {   
    let item=todoList[i].Item;
    let dueDate=todoList[i].dueDate;
    newHtml+=`
    
     <span>${item}</span>
     <span>${dueDate}</span>
     <button class="btn-delete" onclick="todoList.splice(${i},1);
     displayItem();">Delete</button>
    
     `;
   
 }
 ContainerElement.innerHTML=newHtml;
}