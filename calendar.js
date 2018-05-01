    
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
    let days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
    let currentDate = new Date();

    span = document.getElementById("monthDisplayed");
    txt = document.createTextNode(months[currentDate.getMonth()-1] + " " + currentDate.getFullYear());
    span.appendChild(txt);

            
    currentMonth = months.indexOf(document.getElementById("monthDisplayed").firstChild.nodeValue.split(" ")[0]);
    currentYear = document.getElementById("monthDisplayed").firstChild.nodeValue.split(" ")[1];
    resetCalendarHeader();
    
    function resetCalendarHeader() {
        span.firstChild.nodeValue = months[currentMonth] + " " + currentYear;
        resetCalendarContent();
    }

    function switchToNextMonth() { 
        if(currentMonth<11) {
            currentMonth++;
        }
        else {
            currentMonth = 0;
            currentYear++;
        }

        resetCalendarHeader();
    } 

    function switchToPreviousMonth() { 
        if(currentMonth>0) {
            currentMonth--;
        }
        else {
            currentMonth = 11;
            currentYear--;
        }

        resetCalendarHeader();
    } 

    function resetCalendarContent() { 
        displayedDate = new Date(currentYear,currentMonth,1);
        // displayedDate.setDate()
        console.log(displayedDate.toString());

        firstDayOfTheMonth = displayedDate.toString().split(" ")[0];
        console.log(firstDayOfTheMonth);
        indexOfFirstDayOfTheMonth = days.indexOf(firstDayOfTheMonth);
        console.log(indexOfFirstDayOfTheMonth);

        daysRepresentation = document.getElementById("calendarContentID").children[0];

        firstRow = daysRepresentation.children[0];
        secondRow = daysRepresentation.children[1];
        thirdRow = daysRepresentation.children[2];
        fourthRow = daysRepresentation.children[3];
        fifthRow = daysRepresentation.children[4];
        sixthRow = daysRepresentation.children[5];

        indexOfLastDayOfTheMonth = getLastDayOfTheCurrentMonth();

        dayValue = 1;

        for(i=0;i<indexOfFirstDayOfTheMonth;i++) {
            firstRow.children[i].textContent = null;
        }

        for(i=indexOfFirstDayOfTheMonth;i<7;i++) {
            firstRow.children[i].textContent = dayValue;
            dayValue++;
        }

        for(i=0;i<7;i++) {
            secondRow.children[i].textContent = dayValue;
            dayValue++;
        }

        for(i=0;i<7;i++) {
            thirdRow.children[i].textContent = dayValue;
            dayValue++;
        }
        for(i=0;i<7;i++) {
            fourthRow.children[i].textContent = dayValue;
            dayValue++;
        }

        lastIndexWrote = -1;
        for(i=0;i<7 && dayValue<=indexOfLastDayOfTheMonth;i++) {
            fifthRow.children[i].textContent = dayValue;
            dayValue++;
            lastIndexWrote++;
        }
        if(dayValue>indexOfLastDayOfTheMonth) {
            for(i=lastIndexWrote+1;i<7;i++) {
                fifthRow.children[i].textContent = null;
            }

            for(i=0;i<7;i++) {
                sixthRow.children[i].textContent = null;
            }

            document.getElementById("lastCalendarRow").style.display = 'none';

        } else {
            document.getElementById("lastCalendarRow").style.display = '';
            lastIndexWrote = -1;
            for(i=0;i<7 && dayValue<=indexOfLastDayOfTheMonth;i++) {
                sixthRow.children[i].textContent = dayValue;
                dayValue++;
                lastIndexWrote++;
            }
            
            for(i=lastIndexWrote;i<7;i++) {
                sixthRow.children[i].textContent = null;
            }
        }
    } 


    function getLastDayOfTheCurrentMonth() {
        fullMonths = ["January", "March", "May", "July", "August", "October", "December"];
        semiFullMonths = ["April","June","September","November"];
        lastDay = 0;
        [0,3,5,7,8,10,12]
        if(fullMonths.indexOf(months[currentMonth]) != -1) {
            lastDay = 31;
        } else if(semiFullMonths.indexOf(months[currentMonth]) != -1) {
            lastDay = 31;
        } else {
            if(currentYear%4==0 && currentYear%100 !=0 || currentYear%400) {
                lastDay = 29;
            } else {
                lastDay = 28;
            }
        }
        return lastDay;
    }
    // createCal.cache = {}; 
   
