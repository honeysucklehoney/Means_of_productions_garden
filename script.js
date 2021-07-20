//prints "hi" in the browser's dev tools console
console.log("hi");

window.onload = choosePic;
var food_N = new Array("blackberry", "rasberry","blueberry","thimbleberry", "snowberry", " appletree", "plumtree", "cherrytree") ;
var food_N2 = new Array("rasberry","plumtree",  "blackberry", "blueberry","cherrytree","snowberry", " appletree","thimbleberry") ;
var food_N3 = new Array("plumtree",  "blackberry", "blueberry","cherrytree","snowberry", " appletree","thimbleberry","rasberry") ;
var food_N4 = new Array( "blueberry","cherrytree","snowberry", " appletree","thimbleberry","rasberry","plumtree",  "blackberry") ;
var fibre_plants = new Array ("Day lily", "Iris", "milkweed", "phorium tanax", "Golden hops", "green willow", "hazel", "peachleaf willow","bamboo", "Blackberry (Himalayan and thornless)", "Yucca");
var dye_plants = new Array ("tea bush", "elderberry", "marigold", "lupine", "pokeberry", "madder root", "coreopsis", "Mallow hollyhock", "st. john's wort", "japanese indigo/dyers knotweed", "woad", "blood root", "weld");
var fibre_trees= new Array ("black willow", "bamboo", "yellow willow", "elderberry");
var food_S = new Array ("tanzi","tea bush", "sunchocke", "creeping buttercup", "cumfrey", "elecampane", "yellow dock", "mustard green", "rosehip", "goutweed", "mock orange",);
var fruit_trees= new Array ("Cherry_tree", "Plum tree", "Apple_tree"); //liberty apple and snow apple have been combined due to lack of imagery//
var bottom_plants = new Array ("tansy", "fireweed", "lupine", "furny stuff");
var nettle_n_such = new Array ("nettle","organgrapes");
var nettle_alt = new Array ("nettle2", "nettle3");
var food = new Array ("Blackberry (Himalayan and thornless)", "Rasberry", "Apple tree", "Plum tree", "Strawberry", "Blueberry", "Cherry tree", "Spruce tree", "Oregon grape", "Elderberry", "Suncoke", "Creeping buttercup","Plantain","Yellow dock", "Mustard Green", "nootka rose (rosehips)","Mock orange", "quince", "Red currant");
var wood = new Array ("Cherry tree", "Apple tree", "Empress tree", "Green willow", "White ash", "Chestnut", "Bamboo", "Ocean Spray (Iron Wood)")

function choosePic() {

var randomNum = Math.floor(Math.random() * food.length);
var randomNum_fruit_trees = Math.floor(Math.random() * fruit_trees.length);
var randomNum_nettle = Math.floor(Math.random() * nettle_n_such.length);
var randomNum_food_S = Math.floor(Math.random() * food_S.length);
var randomNum_dye = Math.floor(Math.random() * dye_plants.length);
var randomNum_fibre = Math.floor(Math.random() * fibre_plants.length);
var randomNum_food = Math.floor(Math.random() * food.length);
var randomNum_wood = Math.floor(Math.random() * wood.length);
 //document.getElementById("food_N_img").src = "/images/" + food_N[randomNum] +  ".jpg";
var imageUrl = "images/" + food[randomNum] + ".jpg";
$('.food_N').css('background-image', 'url("' + imageUrl + '")');

var imageUrl = "images/" + food[randomNum] + ".jpg";
$('.food_N2').css('background-image', 'url("' + imageUrl + '")');

var imageUrl = "images/" + food[randomNum] + ".jpg";
$('.food_N3').css('background-image', 'url("' + imageUrl + '")');

var imageUrl = "images/" + food[randomNum] + ".jpg";
$('.food_N4').css('background-image', 'url("' + imageUrl + '")');

var imageUrl = "images/" + nettle_n_such[randomNum_nettle] + ".jpg";
$('.nettle_n_such').css('background-image', 'url("' + imageUrl + '")');

var imageUrl = "images/" + nettle_alt[randomNum_nettle] + ".jpg";
$('.nettle_alt').css('background-image', 'url("' + imageUrl + '")');

var imageUrl = "images/" + fruit_trees[randomNum_fruit_trees] + ".jpg";
$('.fruit_trees').css('background-image', 'url("' + imageUrl + '")');

var imageUrl = "images/" + food_S[randomNum] + ".jpg";
$('.food_S').css('background-image', 'url("' + imageUrl + '")');


var imageUrl = "images/" + fibre_plants[randomNum_fibre] + ".jpg";
$('.fibre_plant_id').css('background-image', 'url("' + imageUrl + '")');
document.getElementById("fibre_plant_id_name").innerHTML = fibre_plants[randomNum_fibre];

var imageUrldye = "images/" + dye_plants[randomNum_dye] + ".jpg";
$('.dye_plant_id').css('background-image', 'url("' + imageUrldye + '")');
document.getElementById("dye_plant_id_name").innerHTML = dye_plants[randomNum_dye];

var imageUrlfood = "images/" + food[randomNum_food] + ".jpg";
$('.food_plant_id').css('background-image', 'url("' + imageUrlfood + '")');
document.getElementById("food_plant_id_name").innerHTML = food[randomNum_food];

var imageUrlwood = "images/" + wood[randomNum_wood] + ".jpg";
$('.wood_plant_id').css('background-image', 'url("' + imageUrlwood + '")');
document.getElementById("wood_plant_id_name").innerHTML = wood[randomNum_wood];

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
    // $('.Id_formating2').css("left", "100px")
    // $('.Id_formating2').css("top", "20%")
    // $('.Id_formating3').css("top", "700px")
    // $('.Id_formating3').css("left", "80%")
    // $('.Id_formating4').css("top", "500px")
    // $('.Id_formating4').css("left", "100px")




    // moreText.style.display = "none";
  }
  else {
    dots.style.width = "80%";
    dots.style.margin = "0%";
    dots.style.marginTop = "150px";
    dots.style.height ="1500px";
    btnText.innerHTML = "Close map";
  // $('.Id_formating2').css("left", "80%")
  // $('.Id_formating2').css("top", "710px")
  // $('.Id_formating3').css("top", "1000px")
  // $('.Id_formating3').css("left", "80%")
  // $('.Id_formating4').css("top", "1320px")
  // $('.Id_formating4').css("left", "80%")

    // moreText.style.display = "inline";
  }
}

function fibre_plants_button() {
  var popdownfibre = document.getElementById("popdownfibre");
  // var fibrehighlight = document.getElementsByClassName("fibre")[0];
  // var moreText = document.getElementById("letslarger");

  if (popdownfibre.style.display === "none") {
    popdownfibre.style.display = "block";
    popdownfood.style.display = "none";
    popdownwood.style.display = "none";
    popdowndye.style.display = "none";


    $(".fibre").each(function(){
           // Test if the div element is empty
           if($(this).is(":empty")){
               $('.Id_formating2').css("top", "+275px")
               $('.Id_formating3').css("top", "+275px")
               $('.Id_formating4').css("top", "+275px")


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

    $('.Id_formating2').css("top", "+0px")
    $('.Id_formating3').css("top", "+0px")
    $('.Id_formating4').css("top", "+0px")






  }
}

function dye_plants_button() {
  var popdowndye = document.getElementById("popdowndye");
  // var moreText = document.getElementById("letslarger");

  if (popdowndye.style.display === "none") {
    popdowndye.style.display = "block";
    popdownfood.style.display = "none";
    popdownwood.style.display = "none";
    popdownfibre.style.display = "none";


    $(".dye").each(function(){
           // Test if the div element is empty
           if($(this).is(":empty")){
               $(this).css("background", "#d8e4fa");

               $('.Id_formating3').css("top", "+275px")
               $('.Id_formating4').css("top", "+275px")
           }
       });

  }

  else {
    popdowndye.style.display = "none";
    $(".causeiloveu.dye").css("background", "#293d01");
    $(".andaheap.dye").css("background", "#3b5900");
    $('.Id_formating3').css("top", "+0")
    $('.Id_formating4').css("top", "+0")


  }
}

function food_plants_button() {
  var popdownfood = document.getElementById("popdownfood");
  // var moreText = document.getElementById("letslarger");

  if (popdownfood.style.display === "none") {
    popdownfood.style.display = "block";
    popdowndye.style.display = "none";
    popdownwood.style.display = "none";
    popdownfibre.style.display = "none";

    $(".food").each(function(){
           // Test if the div element is empty
           if($(this).is(":empty")){
               $(this).css("background", "#476BC7");
               $('.Id_formating4').css("top", "+275px")

           }
       });

  }

  else {
    popdownfood.style.display = "none";
    $(".bushel.food").css("background", "#4d4d00");
    $(".and_a_peck.food").css("background", "#304701");
    $(".and_a_barrel.food").css("background", "#698000");
    $(".andaheap.food").css("background", "#3b5900");
    $(".quince.food").css("background", "#00292E");
    $(".heyo.food").css("background", "#4d4d00");
    $(".windand.food").css("background", "#999900");
    $(".therain.food").css("background", "#2b2b00");
    $(".causeiloveu.food").css("background", "#293d01");

    $('.Id_formating4').css("top", "+0px")

  }
}

function wood_button() {
  var popdownwood = document.getElementById("popdownwood");
  // var moreText = document.getElementById("letslarger");

  if (popdownwood.style.display === "none") {
    popdownwood.style.display = "block";
    popdowndye.style.display = "none";
    popdownfood.style.display = "none";
    popdownfibre.style.display = "none";



    $(".wood").each(function(){
           // Test if the div element is empty
           if($(this).is(":empty")){
               $(this).css("background", "#3C59F4");
           }
       });

  }

  else {
    popdownwood.style.display = "none";
    $(".im_talkin.wood").css("background", "#1b2603");
    $(".inmysleep.wood").css("background", "#baba02");
    $(".heyo.wood").css("background", "#4d4d00");
    $(".windand.wood").css("background", "#999900");
    $(".therain.wood").css("background", "#2b2b00");

  }
}
