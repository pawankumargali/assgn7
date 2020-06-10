// PAGES DROP DOWN STYLES
var dropDownTrigger = document.getElementById("dropdown-trigger");
var dropDownList = document.getElementById("dropdown-list");
dropDownTrigger.onmouseover = function() {
    dropDownList.style.display = 'block';
}

dropDownTrigger.onmouseout = function() {
    dropDownList.style.display = 'none';
}

dropDownList.onmouseover = function() {
    dropDownList.style.display = 'block';
}

dropDownList.onmouseout = function() {
    dropDownList.style.display = 'none';
}



