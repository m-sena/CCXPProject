function addRedBorder(id){
    element = document.querySelector("#"+id);
    element.style.border = "5px solid red";
}


// function highlightCard(selector) {
//     var element = querySelector(selector);

//     element.classList.toggle("card-hightlight");
//     if(ing2.includes(selector)) ing2.pop(selector);
//     else ing2.push(selector);
// }

function highlightCard(cardId) {
    var element = document.getElementById(cardId);
    element.classList.toggle("card-highlight");
}