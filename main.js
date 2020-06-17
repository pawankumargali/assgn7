// GET QUOTE OVERLAY
var quoteOverlayElt = document.getElementById("quote-overlay");
function displayQuoteOverlay() {
    quoteOverlayElt.style.display='flex';   
}

function hideQuoteOverlay() {
    // quoteOverlayElt.style.animationDirection='reverse';
    quoteOverlayElt.style.display='none'; 
}




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

// COLLAPSIBLE NAV BAR STYLES
var collapsibleBtn = document.getElementById("collapsible-menu-btn");
var collapsibleBtnIcons = document.getElementsByClassName("hamburger-line");
var collapsibleDropDownElt = document.getElementById("collapsible-dropdown");
var sloganSectionElt = document.getElementById("slogan-section");
collapsibleBtn.onclick = function () {
    if(collapsibleDropDownElt.style.display==='none') {
        collapsibleDropDownElt.className='drop-forward';
        collapsibleDropDownElt.style.display='block'; 
        collapsibleBtnIcons[0].style.transform = 'rotate(-45deg)'; 
        collapsibleBtnIcons[0].style.transition='transform 200ms linear';
        collapsibleBtnIcons[1].style.transform = 'rotate(45deg) translate(-8px, -8px)';
        collapsibleBtnIcons[1].style.transition='transform 200ms linear';
        sloganSectionElt.style.display='none';
    }
    else {
        collapsibleDropDownElt.style.className='drop-reverse';
        collapsibleBtnIcons[0].style.transform = 'rotate(0deg)';
        collapsibleBtnIcons[1].style.transform = 'rotate(0deg)';
        sloganSectionElt.style.display='block';
        collapsibleDropDownElt.style.display='none';
       
    }
}


// PAGES DROP DOWN STYLES FOR COLLAPSIBLE NAV BAR
var pagesDropDownTriggerCollapsible = document.getElementById("pages-dropdown-trigger-collapsible");
var pagesDropDownListCollapsible = document.getElementById("pages-dropdown-list-collapsible");

pagesDropDownTriggerCollapsible.onmouseover = function() {
    pagesDropDownListCollapsible.style.display='block';
}

pagesDropDownTriggerCollapsible.onmouseout = function() {
    pagesDropDownListCollapsible.style.display='none';
}

pagesDropDownListCollapsible.onmouseover = function() {
    pagesDropDownListCollapsible.style.display='block';
}

pagesDropDownListCollapsible.onmouseout = function() {
    pagesDropDownListCollapsible.style.display='none';
}

