//prints "hi" in the browser's dev tools console
console.log("hi");

window.onload = choosePic;
var food_N = new Array("blackberry", "rasberry","blueberry","thimbleberry", "snowberry", " appletree", "plumtree", "cherrytree") ;
var food_N2 = new Array("rasberry","plumtree",  "blackberry", "blueberry","cherrytree","snowberry", " appletree","thimbleberry") ;
var food_N3 = new Array("plumtree",  "blackberry", "blueberry","cherrytree","snowberry", " appletree","thimbleberry","rasberry") ;
var food_N4 = new Array( "blueberry","cherrytree","snowberry", " appletree","thimbleberry","rasberry","plumtree",  "blackberry") ;
var fibre_plants = new Array ("Day lily", "Iris", "milkweed", "phorium tanax", "golden hops", "green willow", "hazel", "peachleaf willow","bamboo", "Blackberry (Himalayan and thornless)", "Yucca");
var dye_plants = new Array ("tea bush", "elderberry", "marigold", "lupine", "pokeberry", "madder root", "coreopsis", "Mallow hollyhock", "st. john's wort", "japanese indigo/dyers knotweed", "woad", "blood root", "weld");
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
var randomNum_dye = Math.floor(Math.random() * dye_plants.length);
var randomNum_fibre = Math.floor(Math.random() * fibre_plants.length);
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


var imageUrl = "images/" + fibre_plants[randomNum_fibre] + ".jpg";
$('.fibre_plant_id').css('background-image', 'url("' + imageUrl + '")');

document.getElementById("fibre_plant_id_name").innerHTML = fibre_plants[randomNum_fibre];

var imageUrldye = "images/" + dye_plants[randomNum_dye] + ".jpg";
$('.dye_plant_id').css('background-image', 'url("' + imageUrldye + '")');

document.getElementById("dye_plant_id_name").innerHTML = dye_plants[randomNum_dye];

}

function myFunction() {
  var dots = document.getElementById("lets");
  // var moreText = document.getElementById("letslarger");
  var btnText = document.getElementById("expandbutton");

  if (dots.style.width === "80%") {
    dots.style.width = "40%";
    dots.style.height = "600px";
    btnText.innerHTML = "Open map";
    dots.style.margin = "30%";
    dots.style.marginTop = "0px";
    $('.Id_formating2').css("left", "100px")
    $('.Id_formating2').css("top", "20%")



    // moreText.style.display = "none";
  }
  else {
    dots.style.width = "80%";
    dots.style.margin = "0%";
    dots.style.height ="1500px";
    btnText.innerHTML = "Close map";
  $('.Id_formating2').css("left", "1200px")
  $('.Id_formating2').css("top", "700px")


    // moreText.style.display = "inline";
  }
}

function fibre_plants_button() {
  var popdownfibre = document.getElementById("popdownfibre");
  // var fibrehighlight = document.getElementsByClassName("fibre")[0];
  // var moreText = document.getElementById("letslarger");

  if (popdownfibre.style.display === "none") {
    popdownfibre.style.display = "block";
    $(".fibre").each(function(){
           // Test if the div element is empty
           if($(this).is(":empty")){
               $(this).css("background", "cornflowerblue");
           }
       });
  }
  else {
    popdownfibre.style.display = "none";

    $(".and_a_peck.fibre").css("background", "#304701");
    //..//
    $(".about_you.fibre").css("background", "#a8ba02");
    $(".causeiloveu.fibre").css("background", "#293d01");
    //... //
    $(".andaheap.fibre").css("background", "#3b5900");
    $(".im_talkin.fibre").css("background", "#1b2603");
    $(".inmysleep.fibre").css("background", "#baba02");
    //...//
    $(".heyo.fibre").css("background", "#4d4d00");
    //...//
    $(".therain.fibre").css("background", "#2b2b00");




  }
}

function dye_plants_button() {
  var popdowndye = document.getElementById("popdowndye");
  // var moreText = document.getElementById("letslarger");

  if (popdowndye.style.display === "none") {
    popdowndye.style.display = "block";
    $(".dye").each(function(){
           // Test if the div element is empty
           if($(this).is(":empty")){
               $(this).css("background", "#d8e4fa");
           }
       });

  }

  else {
    popdowndye.style.display = "none";
    $(".causeiloveu.dye").css("background", "#293d01");
    $(".andaheap.dye").css("background", "#3b5900");


  }
}




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
