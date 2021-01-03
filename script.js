//prints "hi" in the browser's dev tools console
console.log("hi");

window.onload = choosePic;
var food_N = new Array("blackberry", "rasberry","blueberry","thimbleberry", "snowberry", " appletree", "plumtree", "cherrytree") ;
var food_N2 = new Array("rasberry","plumtree",  "blackberry", "blueberry","cherrytree","snowberry", " appletree","thimbleberry") ;
var food_N3 = new Array("plumtree",  "blackberry", "blueberry","cherrytree","snowberry", " appletree","thimbleberry","rasberry") ;
var food_N4 = new Array( "blueberry","cherrytree","snowberry", " appletree","thimbleberry","rasberry","plumtree",  "blackberry") ;
var fibre_plants = new Array ("day lily", "Iris", "yucca", "milkweed", "phorium tanax", "golden hops");
var dye_plants = new Array ("tea bush", "elderberry", "marigold", "lupine", "pokeberry", "madder root", "coreopsis", "hollyhocks", "st. john's wort", "japanese indigo", "dyers knotweed", "woad", "blood root", "mahonia", "pansy", "boradge", "yellow dock");
var fibre_trees= new Array ("black willow", "bamboo", "yellow willow", "elderberry");
var food_S = new Array ("tanzi","tea bush", "sunchocke", "creeping buttercup", "cumfrey", "elecampane", "yellow dock", "mustard green", "rosehip", "goutweed", "mock orange",);
var fruit_trees= new Array ("cherry", "plumtree", "appletree"); //liberty apple and snow apple have been combined due to lack of imagery//
var bottom_plants = new Array ("tansy", "fireweed", "lupine", "furny stuff");
var nettle_n_such = new Array ("nettle","organgrapes");
var nettle_alt = new Array ("nettle2", "nettle3");

function choosePic() {

var randomNum = Math.floor(Math.random() * food_N.length);
var randomNum_fruit_trees = Math.floor(Math.random() * fruit_trees.length);
var randomNum_nettle = Math.floor(Math.random() * nettle_n_such.length);
var randomNum_food_S = Math.floor(Math.random() * food_S.length);
 //document.getElementById("food_N_img").src = "/images/" + food_N[randomNum] +  ".jpg";
var imageUrl = "images/" + food_N[randomNum] + ".jpg";
$('.food_N').css('background-image', 'url("' + imageUrl + '")');

var imageUrl = "images/" + food_N2[randomNum] + ".jpg";
$('.food_N2').css('background-image', 'url("' + imageUrl + '")');

var imageUrl = "images/" + food_N3[randomNum] + ".jpg";
$('.food_N3').css('background-image', 'url("' + imageUrl + '")');

var imageUrl = "images/" + food_N4[randomNum] + ".jpg";
$('.food_N4').css('background-image', 'url("' + imageUrl + '")');

var imageUrl = "images/" + nettle_n_such[randomNum_nettle] + ".jpg";
$('.nettle_n_such').css('background-image', 'url("' + imageUrl + '")');

var imageUrl = "images/" + nettle_alt[randomNum_nettle] + ".jpg";
$('.nettle_alt').css('background-image', 'url("' + imageUrl + '")');

var imageUrl = "images/" + fruit_trees[randomNum_fruit_trees] + ".jpg";
$('.fruit_trees').css('background-image', 'url("' + imageUrl + '")');

var imageUrl = "images/" + fruit_trees[randomNum] + ".jpg";
$('.fruit_trees').css('background-image', 'url("' + imageUrl + '")');

var imageUrl = "images/" + food_S[randomNum] + ".jpg";
$('.food_S').css('background-image', 'url("' + imageUrl + '")');
