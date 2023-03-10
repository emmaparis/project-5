// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    tick();
    setInterval(tick, 1000);
    setInterval(checkTime, 600000);
    clearBtn.on('click', clear);
   //Define event
    button9.on('click', function() {
        event.preventDefault();
        if (box9.val() !== '') {
            localStorage.setItem('Entry9', box9.val());
        }
    });
  
    button10.on('click', function() {
        event.preventDefault();
        if (box10.val() !== '') {
            localStorage.setItem('Entry10', box10.val());
        }
  
    });
  
    button11.on('click', function() {
        event.preventDefault();
        if (box11.val() !== '') {
            localStorage.setItem('Entry11', box11.val());
  
        }
  
    });
  
    button12.on('click', function() {
        event.preventDefault();
        if (box12.val() !== '') {
            localStorage.setItem('Entry12', box12.val());
  
        }
    });
  
    button1.on('click', function() {
        event.preventDefault();
        if (box1.val() !== '') {
            localStorage.setItem('Entry1', box1.val());
  
        }
  
    });
  
    button2.on('click', function() {
        event.preventDefault();
        if (box2.val() !== '') {
            localStorage.setItem('Entry2', box2.val());
  
        }
  
    });
  
    button3.on('click', function() {
        event.preventDefault();
        if (box3.val() !== '') {
            localStorage.setItem('Entry3', box3.val());
  
        }
  
    });
  
    button4.on('click', function() {
        event.preventDefault();
  
        if (box4.val() !== '') {
            localStorage.setItem('Entry4', box4.val());
  
        }
  
    });
    
    button5.on('click', function() {
        event.preventDefault();
  
        if (box5.val() !== '') {
            localStorage.setItem('Entry5', box5.val());
  
        }
  
    });
  
    checkTime();
  });
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    function checkTime() {

        if (parseInt(box12.attr('data-hour')) > timeNow) {
            box12.removeClass('past present future');
            box12.addClass('future');
  
        } else if (parseInt(box12.attr('data-hour')) === timeNow) {
            box12.removeClass('past present future');
            box12.addClass('present');
  
  
        } else {
  
            box12.removeClass('past present future');
            box12.addClass('past');
  
        }
  
        if (parseInt(box1.attr('data-hour')) > timeNow) {
            box1.removeClass('past present future');
            box1.addClass('future')
  
        } else if (parseInt(box1.attr('data-hour')) === timeNow) {
            box1.removeClass('past present future');
            box1.addClass('present');
  
  
        } else {
  
            box1.removeClass('past present future');
            box1.addClass('past');
  
        }
  
        if (parseInt(box2.attr('data-hour')) > timeNow) {
            box2.removeClass('past present future');
            box2.addClass('future');
  
        } else if (parseInt(box2.attr('data-hour')) === timeNow) {
            box2.removeClass('past present future');
            box2.addClass('present');
  
  
        } else {
  
            box2.removeClass('past present future');
            box2.addClass('past');
  
        }
  
        if (parseInt(box3.attr('data-hour')) > timeNow) {
            box3.removeClass('past present future');
            box3.addClass('future');
  
        } else if (parseInt(box3.attr('data-hour')) === timeNow) {
            box3.removeClass('past present future');
            box3.addClass('present');
  
  
        } else {
            box3.removeClass('past present future');
            box3.addClass('past');
  
        }
  
        if (parseInt(box4.attr('data-hour')) > timeNow) {
            box4.removeClass('past present future');
            box4.addClass('future');
  
        } else if (parseInt(box4.attr('data-hour')) === timeNow) {
            box4.removeClass('past present future');
            box4.addClass('present');
  
        } else {
            box4.removeClass('past present future');
            box4.addClass('past');
  
        }
  
        if (parseInt(box5.attr('data-hour')) > timeNow) {
            box5.removeClass('past present future');
            box5.addClass('future');
        } else if (parseInt(box5.attr('data-hour')) === timeNow) {
            box5.removeClass('past present future');
            box5.addClass('present');
  
  
        } else {
            box5.removeClass('past present future');
            box5.addClass('past');
  
        }
  
        if (parseInt(box9.attr('data-hour')) > timeNow) {
            box9.removeClass('past present future');
            box9.addClass('future');
        } else if (parseInt(box9.attr('data-hour')) === timeNow) {
            box9.removeClass('past present future');
            box9.addClass('present');
  
  
        } else {
            box9.removeClass('past present future');
            box9.addClass('past');
  
        }
  
        if (parseInt(box10.attr('data-hour')) > timeNow) {
            box10.removeClass('past present future');
            box10.addClass('future');
        } else if (parseInt(box10.attr('data-hour')) === timeNow) {
            box10.removeClass('past present future');
            box10.addClass('present');
  
  
        } else {
            box10.removeClass('past present future');
            box10.addClass('past');
  
        }
  
        if (parseInt(box11.attr('data-hour')) > timeNow) {
            box11.removeClass('past present future');
            box11.addClass('future');
        } else if (parseInt(box11.attr('data-hour')) === timeNow) {
            box11.removeClass('past present future');
            box11.addClass('present');
  
  
        } else {
            box11.removeClass('past present future');
            box11.addClass('past');
  
        }
  
    }
  
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?

    //
    // TODO: Add code to display the current date in the header of the page.
 