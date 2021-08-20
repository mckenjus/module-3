




// Functions
function color(event) {
    event.preventDefault();
    alert(`My favorite color is Blue, preferably Royal Blue.`)
}
function place(event) {
    event.preventDefault();
    alert(`My favorite place is Disneyland.`)
}
function ritual(event) {
    event.preventDefault();
    alert(`I'm not sure... I guess I always bounce the basketball 3x when taking a free throw`)
}


// Event Listeners
let faveColor = document.querySelector(`#color`)
faveColor.addEventListener(`click`, color)

let favePlace = document.querySelector(`#place`)
favePlace.addEventListener(`click`, place)

let faveRitual = document.querySelector(`#ritual`)
faveRitual.addEventListener(`click`, ritual)