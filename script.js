/* If you're feeling fancy you can add interactivity
    to your site with Javascript */


//prints "hi" in the browser's dev tools console
console.log("hi");

window.onload = choosePic;
var food_N = new Array("blackberry", "rasberry","blueberry","thimble berry", "snow berry", " apple tree", "plum tree", "cherry tree") ;
var fibre_plants = new Array ("day lily", "Iris", "yucca", "milkweed", "phorium tanax", "golden hops");
var dye_plants = new Array ("tea bush", "elderberry", "marigold", "lupine", "pokeberry", "madder root", "coreopsis", "hollyhocks", "st. john's wort", "japanese indigo", "dyers knotweed", "woad", "blood root", "mahonia", "pansy", "boradge", "yellow dock");
var fibre_trees= new Array ("black willow", "bamboo", "yellow willow", "elderberry");
var food_S = new Array ("tanzi", "sunchocke", "creeping buttercup", "cumfrey", "elecampane", "yellow dock", "stinging nettle", "mustard green", "rosehip", "goutweed", "mock orange", "organ grape");
var fruit_trees= new Array ("snow apple", "cherry", "plum", "liberty apple");
var bottom_plants = new Array ("tansy", "fireweed", "lupine", "furny stuff");

function choosePic() {

var randomNum = Math.floor(Math.random() * food_N.length);
 //document.getElementById("food_N_img").src = "/images/" + food_N[randomNum] +  ".jpg";
var imageUrl = "/images/" + food_N[randomNum] + ".jpg";
$('#food_N').css('background-image', 'url("' + imageUrl + '")');

var imageUrl = "/images/" + food_N[randomNum] + ".jpg";
$('#food_N2').css('background-image', 'url("' + imageUrl + '")');

var imageUrl = "/images/" + food_N[randomNum] + ".jpg";
$('#food_N3').css('background-image', 'url("' + imageUrl + '")');

var imageUrl = "/images/" + food_N[randomNum] + ".jpg";
$('#food_N4').css('background-image', 'url("' + imageUrl + '")');


//document.getElementById("food_N").innerHTML = food_N[randomNum];

// var randomNum2 = Math.floor(Math.random() * fibre_plants.length);
//    document.getElementById("cell-a3").src = (fibre_plants[randomNum2] + ".jpg");
//    document.getElementById("cell-a4").innerHTML = fibre_plants[randomNum2];
//
// var randomNum3 = Math.floor(Math.random() * dye_plants.length);
//     document.getElementById("cell-a3").src = (dye_plants[randomNum3] + ".jpg");
//     document.getElementById("cell-a4").innerHTML = dye_plants[randomNum3];
//
// var randomNum4 = Math.floor(Math.random() * fibre_trees.length);
//     document.getElementById("cell-a3").src = (fibre_trees[randomNum4] + ".jpg");
//     document.getElementById("cell-a4").innerHTML = fibre_trees[randomNum4];
//
// var randomNum6 = Math.floor(Math.random() * food_S.length);
//     document.getElementById("cell-a3").src = (food_S[randomNum6] + ".jpg");
//     document.getElementById("cell-a4").innerHTML = food_S[randomNum6];
//
// var randomNum7 = Math.floor(Math.random() * fruit_trees.length);
//     document.getElementById("cell-a3").src = (fruit_trees[randomNum7] + ".jpg");
//     document.getElementById("cell-a4").innerHTML = fruit_trees[randomNum7];
//
// var randomNum8 = Math.floor(Math.random() * bottom_plants.length);
//     document.getElementById("cell-a3").src = (bottom_plants[randomNum8] + ".jpg");
//     document.getElementById("cell-a4").innerHTML = bottom_plants[randomNum8];


}
