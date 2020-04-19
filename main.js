function formSubmit(){
    alert("Your button is working!");
}

document.getElementById("name").addEventListener('input', function(){

    var name=document.getElementById("name").value;

    document.getElementById("showname").innerText = name;

})

//End of exercise 1

function changeText(){
    document.getElementById("words").style.color = "darkgreen";
}

//End of exercise 2

function removeFruit(){
    var fruit = document.getElementById("fruitSelect");

    fruit.remove(fruit.selectedIndex);
}

//End of exercise 3