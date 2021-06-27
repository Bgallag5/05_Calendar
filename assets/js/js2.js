//---------------------------------------------------------------//
// I know I wrote this in not the most optimal way by having to repeat lines for 
//each time slot. If you could, please leave me some notes on how I was supposed 
//to use loops and functions better here. 

//---------------------------------------------------------------//

var dateEl = document.querySelector("#currentDay");
var now = moment().format(`HH`); 
var day = moment().format(`dddd, MMM YY`)
dateEl.innerHTML = day
var saveButtons = document.querySelector('.btn')
var taskBox = document.getElementById("taskinfo")
var taskArray;
var saveButton = document.getElementById("saveButton");




//function to edit buttons and save new value to local storage 

$('.taskinfo').on("click", "p", function(){
    var text = $(this).text().trim();
    var newText = $("<textarea>").addClass("newInput form-control").val(text);
    $(this).replaceWith(newText)
    newText.trigger("focus");
    });

    $(".taskinfo").on("blur", "textarea", function(){
        var text = $(this).val().trim();
        var newText = $("<p>").text(text).addClass('newText')
        $(this).replaceWith(newText);
    })

//save button on click function to save newText.text() to local storage

saveButton.onclick = function(event){
    event.preventDefault();
    var taskArray = [];

  var task8 = document.getElementById("8").textContent;
  var task9 = document.getElementById("9").textContent;
  var task10 = document.getElementById("10").textContent;
  var task11 = document.getElementById("11").textContent;
  var task12 = document.getElementById("12").textContent;
  var task1 = document.getElementById("1").textContent;
  var task2 = document.getElementById("2").textContent;
  var task3 = document.getElementById("3").textContent;
  var task4 = document.getElementById("4").textContent;
  var task5 = document.getElementById("5").textContent;
  taskArray.push(task8, task9, task10, task11, task12, task1, task2, task3, task4, task5,);
  localStorage.setItem("tasks", JSON.stringify(taskArray));
};

//on page load, load task info from local storage; I also assign colors here because I'm already 
//calling the element.  

var pageLoad = function(){
    
    tasks = JSON.parse(localStorage.getItem("tasks"));

task8 = document.getElementById("8")
task8.textContent = tasks[0]
task8.setAttribute("contenteditable", "true")
if(now>8){
$("#8").addClass("past")
} else if(now == 8){
    $('#8').addClass("present")
} else if(now < 8) {
    $('#8').addClass("future")
}
task9 = document.getElementById("9")
task9.textContent = tasks[1]
task9.setAttribute("contenteditable", "true")
if(now>9){
    $("#9").addClass("past")
    } else if(now == 9){
        $('#9').addClass("present")
    } else if(now < 9) {
        $('#9').addClass("future")
    }
task10 = document.getElementById("10")
task10.textContent = tasks[2]
task10.setAttribute("contenteditable", "true")
if(now>10){
    $("#10").addClass("past")
    } else if(now == 10){
        $('#10').addClass("present")
    } else if(now < 10) {
        $('#10').addClass("future")
    }
task11 = document.getElementById("11")
task11.textContent = tasks[3]
task11.setAttribute("contenteditable", "true")
if(now>11){
    $("#11").addClass("past")
    } else if(now == 11){
        $('#11').addClass("present")
    } else if(now < 11) {
        $('#11').addClass("future")
    }
task12 = document.getElementById("12")
task12.textContent = tasks[4]
task12.setAttribute("contenteditable", "true")
if(now>12){
    $("#12").addClass("past")
    } else if(now == 12){
        $('#12').addClass("present")
    } else if(now < 12) {
        $('#12').addClass("future")
    }

task1 = document.getElementById("1")
task1.textContent = tasks[5]
task1.setAttribute("contenteditable", "true")
if(now>13){
$("#1").addClass("past")
} else if(now == 13){
    $('#1').addClass("present")
} else if(now < 13) {
    $('#1').addClass("future")
}
task2 = document.getElementById("2")
task2.textContent = tasks[6]
task2.setAttribute("contenteditable", "true")
if(now>14){
$("#2").addClass("past")
} else if(now == 14){
    $('#2').addClass("present")
} else if(now < 14) {
    $('#2').addClass("future")
}
task3 = document.getElementById("3")
task3.textContent = tasks[7]
task3.setAttribute("contenteditable", "true")
if(now>15){
$("#3").addClass("past")
} else if(now == 15){
    $('#3').addClass("present")
} else if(now < 15) {
    $('#3').addClass("future")
}
task4 = document.getElementById("4")
task4.textContent = tasks[8]
task4.setAttribute("contenteditable", "true")
if(now>16){
$("#4").addClass("past")
} else if(now == 16){
    $('#4').addClass("present")
} else if(now < 16) {
    $('#4').addClass("future")
}
task5 = document.getElementById("5")
task5.textContent = tasks[9]
task5.setAttribute("contenteditable", "true");
if(now>17){
$("#5").addClass("past")
} else if(now ==17){
    $('#5').addClass("present")
} else if(now < 17) {
    $('#5').addClass("future")
}
}



pageLoad();

///function to clear taskArray each night so its ready for the next day

var clearLocal = function(){
    localStorage.setItem("tasks", JSON.stringify(""));
}

if (now > 20){
    clearLocal();
    //pageLoad():???
}


//////Notes
//one save button at top to capture page save, why would I make it more complicated
//with multiple buttons?
//
//when I dynamically create a <p> it's not showing up with the <p> tag in my dev console