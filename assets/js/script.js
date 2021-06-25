var dateEl = document.querySelector("#currentDay");
dateEl.innerHTML = moment().format(`dddd,  MMM Do`);
var saveButtons = document.querySelector('.btn')
var taskBox = document.getElementById("taskinfo")
var tasks = [];


var createTasks = function(tasks){
var taskEl = $("<div>").addClass("taskinfo")
var taskText = $("<p>").text(tasks);
taskEl.appendChild(taskText);
taskBox.append(taskEl);
}

$('.taskinfo').on("click", "p", function(){
var text = $(this).text().trim();
var newText = $("<textarea>").addClass("newInput form-control").val(text);
$(this).replaceWith(newText)
newText.trigger("focus");
console.log(newText);
});

$(".taskinfo").on("blur", "textarea", function(){
    var text = $(this).val().trim();
    var newText = $("<p>").text(text)
    $(this).replaceWith(newText);
    localStorage.setItem("entry", JSON.stringify(newText.text()));
    entry.push(tasks);
    // localStorage.setItem("tasks", JSON.stringify(tasks))
    // saveTask(newText);
})

var loadTasks = function(){
var tasks = JSON.parse(localStorage.getItem("tasks"));
var entry = taskBox.innerHTML;
console.log(entry)
localStorage.setItem("entry", JSON.stringify(entry))

if(!tasks){
    tasks = [];
} 
else if(tasks) {
    console.log(tasks)
tasks.forEach(function(){
    var taskEl = document.createElement("<p>")
    taskEl.textContent(tasks[i])
    taskBox.id="8".innerHTML(tasks);
    taskEl.appendChild(taskBox)
})
}

for(var i =0; i < tasks.length; i++){
var taskEl = $("<p>")
taskEl.text(tasks[i]);
taskBox.appendChild(taskEl);
}
};
loadTasks();




/////////////////////////////////////////Notes//////////////////Notes////////////////////Notes//////////////////////////////////////////
//I see a bunch of divs stacked on top of each other, divs or ul???
//each has it's time on the left, the activity in the middle, and the save button on the end,
//tasks have colored backgrounds to show past present future 
//just like taskmaster each task must have ability to edit
//add date to jumbotron 
//each time block must have same ability to edit tasks// -- probably hard code the planner frame?


//steps:
//use bootstrap to create planner frame/grid
//use taskmaster code to create and edit tasks 
//made the task info div a text box
//set backgournd colors based on time of the day 
