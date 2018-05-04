let shown = -1;
// function showNote() {
//     shown = true;
//     console.log(shown);
//     document.getElementsByTagName("td").entries
// }

let dates = document.getElementsByClassName("date");
let index=0

console.log(shown);
function showNote() {
    // shown = number;
    console.log(index);
}

for(;index<dates.length;++index) {
    dates[index].addEventListener("click",showNote());
    console.log(shown);
    // dateIndex++;
}

// dates.forEach(myFunction)
// document.getElementByClass("date").addEventListener("click", function() {
//     gotoNode(result.name);
// }, false);