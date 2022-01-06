// Define UI Variables

const form = document.querySelector("#task-form");
const unorderList = document.querySelector(".collectTDL");
const clearAllTasks= document.querySelector('.btn-danger');
const addTask = document.querySelector("#addtask")
const addTaskButton= document.querySelector('.btn-success');


addTaskButton.addEventListener('click', addTaskFunc);

function addTaskFunc(e){

// validating to stop entering empty tasks//

    if(addTask.value===""){
        alert('Add a task');
    }else{
        //create li element
        const li=document.createElement('li');
        //add class to the li
        li.className='collection-item';
        // create div and append to li
        const rowDiv= document.createElement('div');
        //add class to div
        rowDiv.className='row';
        // append div as child to li
        li.appendChild(rowDiv);
        //create first child div under rowDiv
        const rowDivText = document.createElement('div');
        //add class to the new child div
        rowDivText.className='col-6 col-md-11';
        //create a textnode under the first div child
        rowDivText.appendChild(document.createTextNode(addTask.value));
        // append the first child div as child to rowDiv
        rowDiv.appendChild(rowDivText);
        //create second child div under rowDiv
        const rowDivBtn = document.createElement('div');
        //add class to the second div child
        rowDivBtn.className='col-6 col-md-1';
        //add btn as html
        rowDivBtn.innerHTML='<button class="cancel">X</button>';
        // append the second child div as child to rowDiv
        rowDiv.appendChild(rowDivBtn);
        //append li to ul
        unorderList.appendChild(li);
        //clear input
        addTask.value='';
    }

}



unorderList.addEventListener('click', removeTask);

function removeTask(e){
    if(e.target.classList.contains('cancel')){
        if(confirm('Please confirm the deletion of task')){
            e.target.parentElement.parentElement.parentElement.remove();
        }
    }
}

clearAllTasks.addEventListener('click', clearAllTasksfunc);

function clearAllTasksfunc(e){
        if(confirm('Please confirm deletion of all tasks')){
            unorderList.innerHTML='';
        }
    } 

// function clearAllTasksfunc(){
//     if(unorderList.childNodes.length==0){
//         if(confirm('Please confirm deletion of all tasks')){
//              unorderList.innerHTML='';
       
//     }else{
//         alert("Hello");
//     }
// }
// }
