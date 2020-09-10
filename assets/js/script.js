getTasks();

// Current date and time
var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
document.getElementById("currentDay").innerHTML = rightNow;

// Parsing current hour
var currentHour = moment().format("HH");

// Hour in military hours
var workDay = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

// Indicator for 9am
if (currentHour > workDay[0]) {
    // Past time blocks
    $("#text-entry1").attr("style", "background-color: #fc665e");
} else if (currentHour >= workDay[0] && currentHour < workDay[1]) {
    // Present time block
    $("#text-entry1").attr("style", "background-color: #ebfc5e");
} else {
    // Future time blocks
    $("#text-entry1").attr("style", "background-color: #58ce7b");
};

// Indicator for 10am
if (currentHour > workDay[1]) {
    $("#text-entry2").attr("style", "background-color: #fc665e");
} else if (currentHour >= workDay[1] && currentHour < workDay[2]) {
    $("#text-entry2").attr("style", "background-color: #ebfc5e");
} else {
    $("#text-entry2").attr("style", "background-color: #58ce7b");
};

// Indicator for 11am
if (currentHour > workDay[2]) {
    $("#text-entry3").attr("style", "background-color: #fc665e");
} else if (currentHour >= workDay[2] && currentHour < workDay[3]) {
    $("#text-entry3").attr("style", "background-color: #ebfc5e");
} else {
    $("#text-entry3").attr("style", "background-color: #58ce7b");
};

// Indicator for 12pm
if (currentHour > workDay[3]) {
    $("#text-entry4").attr("style", "background-color: #fc665e");
} else if (currentHour >= workDay[3] && currentHour < workDay[4]) {
    $("#text-entry4").attr("style", "background-color: #ebfc5e");
} else {
    $("#text-entry4").attr("style", "background-color: #58ce7b");
};

// Indicator for 1pm
if (currentHour > workDay[4]) {
    $("#text-entry5").attr("style", "background-color: #fc665e");
} else if (currentHour >= workDay[4] && currentHour < workDay[5]) {
    $("#text-entry5").attr("style", "background-color: #ebfc5e");
} else {
    $("#text-entry5").attr("style", "background-color: #58ce7b");
};

// Indicator for 2pm
if (currentHour > workDay[5]) {
    $("#text-entry6").attr("style", "background-color: #fc665e");
} else if (currentHour >= workDay[5] && currentHour < workDay[6]) {
    $("#text-entry6").attr("style", "background-color: #ebfc5e");
} else {
    $("#text-entry6").attr("style", "background-color: #58ce7b");
};

// Indicator for 3pm
if (currentHour > workDay[6]) {
    $("#text-entry7").attr("style", "background-color: #fc665e");
} else if (currentHour >= workDay[6] && currentHour < workDay[7]) {
    $("#text-entry7").attr("style", "background-color: #ebfc5e");
} else {
    $("#text-entry7").attr("style", "background-color: #58ce7b");
};

// Indicator for 4pm
if (currentHour > workDay[7]) {
    $("#text-entry8").attr("style", "background-color: #fc665e");
} else if (currentHour >= workDay[7] && currentHour < workDay[8]) {
    $("#text-entry8").attr("style", "background-color: #ebfc5e");
} else {
    $("#text-entry8").attr("style", "background-color: #58ce7b");
};

// Indicator for 5pm
if (currentHour > workDay[8]) {
    $("#text-entry9").attr("style", "background-color: #fc665e");
} else if (currentHour >= workDay[8] && currentHour < workDay[9]) {
    $("#text-entry9").attr("style", "background-color: #ebfc5e");
} else {
    $("#text-entry9").attr("style", "background-color: #58ce7b");
};

// Event listener to save tasks to local storage
document.getElementById("save1").addEventListener("click", function () {
    var task1 = document.querySelector('#text-entry1').value;
    localStorage.setItem("task1", task1);
});

document.getElementById("save2").addEventListener("click", function () {
    var task2 = document.querySelector('#text-entry2').value;
    localStorage.setItem("task2", task2);
});

document.getElementById("save3").addEventListener("click", function () {
    var task3 = document.querySelector('#text-entry3').value;
    localStorage.setItem("task3", task3);
});

document.getElementById("save4").addEventListener("click", function () {
    var task4 = document.querySelector('#text-entry4').value;
    localStorage.setItem("task4", task4);
});

document.getElementById("save5").addEventListener("click", function () {
    var task5 = document.querySelector('#text-entry5').value;
    localStorage.setItem("task5", task5);
});

document.getElementById("save6").addEventListener("click", function () {
    var task6 = document.querySelector('#text-entry6').value;
    localStorage.setItem("task6", task6);
});

document.getElementById("save7").addEventListener("click", function () {
    var task7 = document.querySelector('#text-entry7').value;
    localStorage.setItem("task7", task7);
});

document.getElementById("save8").addEventListener("click", function () {
    var task8 = document.querySelector('#text-entry8').value;
    localStorage.setItem("task8", task8);
});

document.getElementById("save9").addEventListener("click", function () {
    var task9 = document.querySelector('#text-entry9').value;
    localStorage.setItem("task9", task9);
});


// Function to get details from local storage
function getTasks() {
    document.getElementById("text-entry1").innerHTML = localStorage.getItem("task1");
    document.getElementById("text-entry2").innerHTML = localStorage.getItem("task2");
    document.getElementById("text-entry3").innerHTML = localStorage.getItem("task3");
    document.getElementById("text-entry4").innerHTML = localStorage.getItem("task4");
    document.getElementById("text-entry5").innerHTML = localStorage.getItem("task5");
    document.getElementById("text-entry6").innerHTML = localStorage.getItem("task6");
    document.getElementById("text-entry7").innerHTML = localStorage.getItem("task7");
    document.getElementById("text-entry8").innerHTML = localStorage.getItem("task8");
    document.getElementById("text-entry9").innerHTML = localStorage.getItem("task9");
};
