// selectors for buttons
let btn1 = document.querySelector('#btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');
let btn9 = document.getElementById('btn9');
let btn10 = document.getElementById('btn10');
let btn11 = document.getElementById('btn11');
let btn12 = document.getElementById('btn12');
let btn13 = document.getElementById('btn13');
let btn14 = document.getElementById('btn14');
let btn15 = document.getElementById('btn15');
let btn16 = document.getElementById('btn16');
let btn17 = document.getElementById('btn17');
let btn18 = document.getElementById('btn18');
let btn19 = document.getElementById('btn19');
// selector for "+" button
const add = document.getElementById('add');
// selector for ul tag of To-Do
const todo = document.getElementById('todo_');
// selector for ul tag of Done
const done = document.getElementById('done_');
// selector for task input tag 
const text = document.getElementById('task_text');
// selector for final save button
const save = document.querySelector('.save');


// event listener for "+" button
add.addEventListener('click', addtodo);
// event listener for save the plan
save.addEventListener('click', function()
{
    confirm('Are you sure to Mark The Plan?');
})


// functions for changing colour of buttons
function change(e)
{
    if(e.style.backgroundColor == 'white')
    {
     e.style.backgroundColor = 'rgb(210, 238, 157)';
    }
    else{
     e.style.backgroundColor = 'white';
    }
}

//function to add items to To-Do list and if point get checked then the particular points goes to Done list and if clicked on trash then points gets deleted & when clicked on edit button, we can edit the text in the text field
function addtodo(event)
{

    event.preventDefault();// this prevents submission of form



    // to create div element with classname divtodo
    const divtag = document.createElement("div");
    divtag.classList.add("divtodo");// to assign its classname

    // to create li element with classname todo_pnt
    const litag = document.createElement("input");
    litag.value = text.value;// *** to insert the value of taskinput in our todolist's inputfield value
    litag.type = "text";// to declare the type of input tag as text
    litag.disabled = "true";// means we don't want to access the input value since here we assigned true value to its disabled attribute
    litag.classList.add("todo_pnt");// to assign its classname
    divtag.appendChild(litag);// to append to divtag as its child

    // to create edit button with classname edit
    const editbuttontag = document.createElement("button");
    editbuttontag.innerHTML ='<i class = "fa fa-eraser"></i>';
    editbuttontag.classList.add("edit");
    divtag.appendChild(editbuttontag);

    //to create button element with classname del
    const delbuttontag = document.createElement("button");
    delbuttontag.innerHTML = '<i class = "fa fa-trash"></i>';// to insert HTML fontawesome icon
    delbuttontag.classList.add("del");// to assign its classname
    divtag.appendChild(delbuttontag);// to append to divtag as its child

    //to create button element with classname cmplt
    const cmpltbuttontag = document.createElement("button");// we can't set this globally because if we do then no matter how many times we call addtodo(), cmpltbuttontag will be created only once... so we need to write this part of code inside addtodo()
    cmpltbuttontag.innerHTML = '<i class = "fa fa-check"></i>';// to insert HTML fontawesome icon
    cmpltbuttontag.classList.add('cmplt');// to assign its classname
    divtag.appendChild(cmpltbuttontag);// to append to divtag as its child

    // to append to todo ultag as its child
    todo.appendChild(divtag);

    //to remove the taskitem from taskbar after adding the task to todo list
    text.value = " ";




    // eventlistener which has function :-  through which the div will get removed from here and appended to Done list
    cmpltbuttontag.addEventListener('click', function()
    {
         const point = this.parentNode;// here point will point to parent of this(this is an implicit pointer here used explicitly, which denotes checkbuttontag) i.e., parent of check button which is div tag
         point.remove();// to remove the point (the whole div element along wih its child) from To-Do list
         done.appendChild(point);//to append the whole div along with its child to the Done list
         cmpltbuttontag.style.display = 'none';// since we are not creating any new points, we are just appending the points so here as we don't need the check button so we set its display to none
         editbuttontag.style.display = 'none';
    });




    // eventlistener which has function through which the div will get removed
    delbuttontag.addEventListener('click', function()
    {
        const point = this.parentNode;
        point.remove();
    });




    // eventlistener which has function through which ables the text field so that the points in the field can be editted
    editbuttontag.addEventListener('click', function()
    {
        litag.disabled = false;
    });


}