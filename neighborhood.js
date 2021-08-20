const foodArr = [`McDonalds`, `Dairy Queen`, `Jurassic Street Tacos`, `Village Pizza`, `Six Sisters`]


function food(event) {
    event.preventDefault();
    const random = foodArr[Math.floor(Math.random() * foodArr.length)];
    // document.getElementById('#result').innerhtml = foodArr[random]
    // alert(`you should try` foodArr(randomElement))
    alert(random, foodArr[random])
    

}

let pickFood = document.querySelector(`#food`)
pickFood.addEventListener(`click`, food)