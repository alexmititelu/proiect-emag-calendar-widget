    
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
    let days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
    let currentDate = new Date();
    currentDayShown = false;
    currentDayValue = currentDate.getDay();


    // initializeLocation();
    span = document.getElementById("monthDisplayed");
    txt = document.createTextNode(months[currentDate.getMonth()] + " " + currentDate.getFullYear());
    span.appendChild(txt);
        
    currentMonth = months.indexOf(document.getElementById("monthDisplayed").firstChild.nodeValue.split(" ")[0]);
    currentYear = document.getElementById("monthDisplayed").firstChild.nodeValue.split(" ")[1];

    resetCalendarHeader();
    
    function resetCalendarHeader() {
        span.firstChild.nodeValue = months[currentMonth] + " " + currentYear;
        currentDayShown = markCurrentDay();
        resetCalendarContent();
    }

    function markCurrentDay() {
        if(currentMonth == currentDate.getMonth() && currentYear == currentDate.getFullYear()) {
            return true;
        }
        return false;
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

        indexOfLastDayOfTheMonth = getLastDayOfMonth(currentMonth,currentYear);
        
        if(currentMonth>0) {
        lastDayOfPreviousMonth = getLastDayOfMonth(currentMonth-1,currentYear);
        } else {
            lastDayOfPreviousMonth = getLastDayOfMonth(11,currentYear-1);
        }
        
        for(i=indexOfFirstDayOfTheMonth-1;i>=0;i--) {
            firstRow.children[i].textContent = lastDayOfPreviousMonth;
            lastDayOfPreviousMonth--;
            firstRow.children[i].style = '';
            firstRow.children[i].style.opacity = "0.3";
        }

        dayValue = 1;

        // for(i=0;i<indexOfFirstDayOfTheMonth;i++) {
        //     firstRow.children[i].textContent = null;
        // }

        for(i=indexOfFirstDayOfTheMonth;i<7;i++) {
            firstRow.children[i].textContent = dayValue;
            if(currentDayShown == true && currentDayValue == dayValue) {
                firstRow.children[i].style.border = '2px solid black';
                firstRow.children[i].style.fontWeight = 'bold';    
            }  else {
                firstRow.children[i].style = null;
            }
            firstRow.children[i].style.opacity = "1";
            dayValue++;
        }

        for(i=0;i<7;i++) {
            secondRow.children[i].textContent = dayValue;
            if(currentDayShown == true && currentDayValue == dayValue) {
                secondRow.children[i].style.border = '2px solid black';
                secondRow.children[i].style.fontWeight = 'bold';    
            }    else {
                secondRow.children[i].style = null;
            }
            secondRow.children[i].style.opacity = "1";
            dayValue++;
        }

        for(i=0;i<7;i++) {
            thirdRow.children[i].textContent = dayValue;
            if(currentDayShown == true && currentDayValue == dayValue) {
                thirdRow.children[i].style.border = '2px solid black';
                thirdRow.children[i].style.fontWeight = 'bold';    
            }  else {
                thirdRow.children[i].style = null;
            }
            thirdRow.children[i].style.opacity = "1";
            dayValue++;
        }
        for(i=0;i<7;i++) {
            fourthRow.children[i].textContent = dayValue;
            if(currentDayShown == true && currentDayValue == dayValue) {
                fourthRow.children[i].style.border = '2px solid black';
                fourthRow.children[i].style.fontWeight = 'bold';    
            }  else {
                fourthRow.children[i].style = null;
            }
            fourthRow.children[i].style.opacity = "1";
            dayValue++;
        }

        lastIndexWrote = -1;
        for(i=0;i<7 && dayValue<=indexOfLastDayOfTheMonth;i++) {
            fifthRow.children[i].textContent = dayValue;
            if(currentDayShown == true && currentDayValue == dayValue) {
                fifthRow.children[i].style.border = '2px solid black';
                fifthRow.children[i].style.fontWeight = 'bold';    
            }  else {
                fifthRow.children[i].style = null;
            }
            dayValue++;
            fifthRow.children[i].style.opacity = "1";
            lastIndexWrote++;
        }
        if(dayValue>indexOfLastDayOfTheMonth) {

            dayOfNextMonth = 1;

            for(i=lastIndexWrote+1;i<7;i++) {
                fifthRow.children[i].textContent = dayOfNextMonth;
                fifthRow.children[i].style = '';
                fifthRow.children[i].style.opacity = "0.3";
                dayOfNextMonth++;
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
                if(currentDayShown == true && currentDayValue == dayValue) {
                    sixthRow.children[i].style.border = '2px solid black';
                    sixthRow.children[i].style.fontWeight = 'bold';    
                }  else {
                    sixthRow.children[i].style = null;
                }
                sixthRow.children[i].style.opacity = "1";
                dayValue++;
                lastIndexWrote++;
            }
            
            dayOfNextMonth = 1;

            for(i=lastIndexWrote+1;i<7;i++) {
                sixthRow.children[i].textContent = dayOfNextMonth;
                sixthRow.children[i].style = '';
                sixthRow.children[i].style.opacity = "0.3";
                dayOfNextMonth++;
            }

            // for(i=lastIndexWrote;i<7;i++) {
            //     sixthRow.children[i].textContent = null;
            // }
        }
    } 


    function getLastDayOfMonth(month,year) {
        fullMonths = ["January", "March", "May", "July", "August", "October", "December"];
        semiFullMonths = ["April","June","September","November"];
        lastDay = 0;
        [0,3,5,7,8,10,12]
        if(fullMonths.indexOf(months[month]) != -1) {
            lastDay = 31;
        } else if(semiFullMonths.indexOf(months[month]) != -1) {
            lastDay = 31;
        } else {
            if(year%4==0 && year%100 !=0 || year%400) {
                lastDay = 29;
            } else {
                lastDay = 28;
            }
        }
        return lastDay;
    }
    
