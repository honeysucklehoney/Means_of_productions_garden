//prints "hi" in the browser's dev tools console
console.log("hi");
// 💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~ //
// 💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~ //

window.onload = choosePic;
// var food_N = new Array("blackberry", "rasberry","blueberry","thimbleberry", "snowberry", " appletree", "plumtree", "cherrytree") ;
// var food_N2 = new Array("rasberry","plumtree",  "blackberry", "blueberry","cherrytree","snowberry", " appletree","thimbleberry") ;
// var food_N3 = new Array("plumtree",  "blackberry", "blueberry","cherrytree","snowberry", " appletree","thimbleberry","rasberry") ;
// var food_N4 = new Array( "blueberry","cherrytree","snowberry", " appletree","thimbleberry","rasberry","plumtree",  "blackberry") ;
var fibre_plants = new Array ("Day lily", "Iris", "Milkweed", "Phorium tanax", "Golden hops", "Green willow", "Hazel", "Yellow willow","Bamboo", "Blackberry (himalayan and thornless)", "Yucca");
var dye_plants = new Array ("Tea bush", "Elderberry", "Lupine", "Poke weed", "Madder root", "Coreopsis", "St.john's wort", "Japanese indigo", "Woad", "Blood root", "Weld");
var fibre_trees= new Array ("Green willow", "Bamboo", "Yellow willow", "Elderberry");
var food_S = new Array ("tanzi","tea bush", "Sunchoke", "cumfrey", "elecampane", "Dill weed");
var fruit_trees= new Array ("Cherry_tree", "Plum tree", "Apple_tree"); //liberty apple and snow apple have been combined due to lack of imagery//
var bottom_plants = new Array ("tansy", "fireweed", "lupine", "furny stuff");
var nettle_n_such = new Array ("nettle","organgrapes");
var nettle_alt = new Array ("nettle2", "nettle3");
var food = new Array ("Blackberry (himalayan and thornless)", "Rasberry", "Apple tree", "Plum tree", "Strawberry", "Blueberry", "Cherry tree", "Spruce tree", "Oregon grape", "Elderberry", "Sunchoke", "Plantain","Dill weed", "Nootka rose", "Quince", "Red currant");
var wood = new Array ("Cherry tree", "Apple tree", "Empress tree", "Green willow", "Chestnut", "Bamboo", "Ocean spray (iron wood)")
function choosePic() {

var randomNum = Math.floor(Math.random() * food.length);
var randomNum_fruit_trees = Math.floor(Math.random() * fruit_trees.length);
var randomNum_nettle = Math.floor(Math.random() * nettle_n_such.length);
var randomNum_food_S = Math.floor(Math.random() * food_S.length);
var randomNum_dye = Math.floor(Math.random() * dye_plants.length);
var randomNum_fibre = Math.floor(Math.random() * fibre_plants.length);
var randomNum_food = Math.floor(Math.random() * food.length);
var randomNum_wood = Math.floor(Math.random() * wood.length);

// var imageUrl = "images/" + food[randomNum] + ".jpg";
// $('.food_N').css('background-image', 'url("' + imageUrl + '")');
//
// var imageUrl = "images/" + food[randomNum] + ".jpg";
// $('.food_N2').css('background-image', 'url("' + imageUrl + '")');
//
// var imageUrl = "images/" + food[randomNum] + ".jpg";
// $('.food_N3').css('background-image', 'url("' + imageUrl + '")');
//
// var imageUrl = "images/" + food[randomNum] + ".jpg";
// $('.food_N4').css('background-image', 'url("' + imageUrl + '")');
//
// var imageUrl = "images/" + nettle_n_such[randomNum_nettle] + ".jpg";
// $('.nettle_n_such').css('background-image', 'url("' + imageUrl + '")');
//
// var imageUrl = "images/" + nettle_alt[randomNum_nettle] + ".jpg";
// $('.nettle_alt').css('background-image', 'url("' + imageUrl + '")');
//
// var imageUrl = "images/" + fruit_trees[randomNum_fruit_trees] + ".jpg";
// $('.fruit_trees').css('background-image', 'url("' + imageUrl + '")');
//
// var imageUrl = "images/" + food_S[randomNum] + ".jpg";
// $('.food_S').css('background-image', 'url("' + imageUrl + '")');

// 💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~ //
// 💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~ //
// 💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~ //
// 💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~ //
// 🦋 🦋 🦋 🦋 🦋 🦋 🦋 🦋 🦋 🦋 🦋 🦋 🦋 🦋 🦋 🦋 🦋 🦋 🦋 🦋 🦋//

// ✿ Fibre random imput for pop down and link 4 home page ✿ //
// 💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~ //
var imageUrl = "images/" + fibre_plants[randomNum_fibre] + ".jpg";
$('.fibre_plant_id').css('background-image', 'url("' + imageUrl + '")');
document.getElementById("fibre_plant_id_name").innerHTML = fibre_plants[randomNum_fibre];

var fibrerandolink = fibre_plants[randomNum_fibre] + ".html";
document.getElementById("fibrerandolink").href = fibrerandolink;


// ✿ Fibre random imput for pop down and link 4 home page ✿ //
// 💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~ //
var imageUrldye = "images/" + dye_plants[randomNum_dye] + ".jpg";
$('.dye_plant_id').css('background-image', 'url("' + imageUrldye + '")');
document.getElementById("dye_plant_id_name").innerHTML = dye_plants[randomNum_dye];

var dyerandolink = dye_plants[randomNum_dye] + ".html";
document.getElementById("dyerandolink").href = dyerandolink;


// ✿ Fibre random imput for pop down and link 4 home page ✿ //
// 💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~ //
var imageUrlfood = "images/" + food[randomNum_food] + ".jpg";
$('.food_plant_id').css('background-image', 'url("' + imageUrlfood + '")');
document.getElementById("food_plant_id_name").innerHTML = food[randomNum_food];

var foodrandolink = food[randomNum_food] + ".html";
document.getElementById("foodrandolink").href = foodrandolink;

// ✿ Fibre random imput for pop down and link 4 home page ✿ //
// 💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~ //
var imageUrlwood = "images/" + wood[randomNum_wood] + ".jpg";
$('.wood_plant_id').css('background-image', 'url("' + imageUrlwood + '")');
document.getElementById("wood_plant_id_name").innerHTML = wood[randomNum_wood];

var woodrandolink = wood[randomNum_wood] + ".html";
document.getElementById("woodrandolink").href = woodrandolink;
}

// 💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~ //
// 💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~ //
// 💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~  💗 ~ ~ ~ //


function myFunction() {
  var dots = document.getElementById("lets");
  // var moreText = document.getElementById("letslarger");
  var btnText = document.getElementById("expandbutton");

  if (dots.style.width === "100%") {
    dots.style.width = "50%";
    dots.style.height = "800px";
    btnText.innerHTML = "Open Map";
    dots.style.margin = "30%";
    dots.style.marginTop = "0px";
  $('.Id_formating').css("display", "block")
  $('.Id_formating2').css("display", "block")
  $('.Id_formating3').css("display", "block")
  $('.Id_formating4').css("display", "block")
  $('.explain').css("display", "block")

    // $('.Id_formating2').css("top", "20%")
    // $('.Id_formating3').css("top", "700px")
    // $('.Id_formating3').css("left", "80%")
    // $('.Id_formating4').css("top", "500px")
    // $('.Id_formating4').css("left", "100px")



    // moreText.style.display = "none";
  }
  else {
    dots.style.width = "100%";
    dots.style.margin = "0%";
    dots.style.marginTop = "150px";
    dots.style.height ="1500px";
    btnText.innerHTML = "Close map";
    $('.Id_formating').css("display", "none")
    $('.Id_formating2').css("display", "none")
    $('.Id_formating3').css("display", "none")
    $('.Id_formating4').css("display", "none")
    $('.explain').css("display", "none")

  // $('.Id_formating2').css("left", "80%")
  // $('.Id_formating2').css("top", "710px")
  // $('.Id_formating3').css("top", "1000px")
  // $('.Id_formating3').css("left", "80%")
  // $('.Id_formating4').css("top", "1320px")
  // $('.Id_formating4').css("left", "80%")

    // moreText.style.display = "inline";
  }
}

// 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄

function fibre_plants_button() {
  var popdownfibre = document.getElementById("popdownfibre");
  // var fibrehighlight = document.getElementsByClassName("fibre")[0];
  // var moreText = document.getElementById("letslarger");

  if (careinfo.style.display === "block") {


    $(".fibre").each(function(){
           // Test if the div element is empty
           if($(this).is(":empty")){
             $(this).css("background", "#1d62e2");
             // 🍄 🍄 dye 🍄 🍄

             $(".causeiloveu.dye").css("background", "#293d01");
             $(".andaheap.dye").css("background", "#3b5900");
             // 🍄 🍄 food 🍄 🍄

             $(".bushel.food").css("background", "#4d4d00");
             $(".and_a_peck.food").css("background", "#304701");
             $(".and_a_barrel.food").css("background", "#698000");
             $(".andaheap.food").css("background", "#3b5900");
             $(".quince.food").css("background", "#00292E");
             $(".heyo.food").css("background", "#4d4d00");
             $(".windand.food").css("background", "#999900");
             $(".therain.food").css("background", "#2b2b00");
             $(".causeiloveu.food").css("background", "#293d01");
             // 🍄 🍄 wood 🍄 🍄
             $(".im_talkin.wood").css("background", "#1b2603");
             $(".inmysleep.wood").css("background", "#baba02");
             $(".heyo.wood").css("background", "#4d4d00");
             $(".windand.wood").css("background", "#999900");
             $(".therain.wood").css("background", "#2b2b00");



           }
       });
  }
  else {
    // 🍄 🍄 fibre 🍄 🍄
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

// 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄


function dye_plants_button() {
  var popdowndye = document.getElementById("popdowndye");
  // var fibrehighlight = document.getElementsByClassName("fibre")[0];
  // var moreText = document.getElementById("letslarger");

  if (harvestinfo.style.display === "block") {


    $(".dye").each(function(){
           // Test if the div element is empty
           if($(this).is(":empty")){
             $(this).css("background", "#d8e4fa");
             // 🍄 🍄 food 🍄 🍄

             $(".bushel.food").css("background", "#4d4d00");
             $(".and_a_peck.food").css("background", "#304701");
             $(".and_a_barrel.food").css("background", "#698000");
             $(".andaheap.food").css("background", "#3b5900");
             $(".quince.food").css("background", "#00292E");
             $(".heyo.food").css("background", "#4d4d00");
             $(".windand.food").css("background", "#999900");
             $(".therain.food").css("background", "#2b2b00");
             $(".causeiloveu.food").css("background", "#293d01");
             // 🍄 🍄 wood 🍄 🍄
             $(".im_talkin.wood").css("background", "#1b2603");
             $(".inmysleep.wood").css("background", "#baba02");
             $(".heyo.wood").css("background", "#4d4d00");
             $(".windand.wood").css("background", "#999900");
             $(".therain.wood").css("background", "#2b2b00");
             // 🍄 🍄 fibre 🍄 🍄
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
       });
  }
  else {

    // 🍄 🍄 dye 🍄 🍄

    $(".causeiloveu.dye").css("background", "#293d01");
    $(".andaheap.dye").css("background", "#3b5900");
  }
}

// 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄


function food_plants_button() {
  var popdownfood = document.getElementById("popdownfood");
  // var fibrehighlight = document.getElementsByClassName("fibre")[0];
  // var moreText = document.getElementById("letslarger");

  if (usesinfo.style.display === "block") {


    $(".food").each(function(){
           // Test if the div element is empty
           if($(this).is(":empty")){
             $(this).css("background", "#476BC7");
             // 🍄 🍄 wood 🍄 🍄
             $(".im_talkin.wood").css("background", "#1b2603");
             $(".inmysleep.wood").css("background", "#baba02");
             $(".heyo.wood").css("background", "#4d4d00");
             $(".windand.wood").css("background", "#999900");
             $(".therain.wood").css("background", "#2b2b00");
             // 🍄 🍄 fibre 🍄 🍄
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
             // 🍄 🍄 dye 🍄 🍄

             $(".causeiloveu.dye").css("background", "#293d01");
             $(".andaheap.dye").css("background", "#3b5900");


           }
       });
  }
  else {
    // 🍄 🍄 food 🍄 🍄
    $(".bushel.food").css("background", "#4d4d00");
    $(".and_a_peck.food").css("background", "#304701");
    $(".and_a_barrel.food").css("background", "#698000");
    $(".andaheap.food").css("background", "#3b5900");
    $(".quince.food").css("background", "#00292E");
    $(".heyo.food").css("background", "#4d4d00");
    $(".windand.food").css("background", "#999900");
    $(".therain.food").css("background", "#2b2b00");
    $(".causeiloveu.food").css("background", "#293d01");
  }
}

// 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄 🍄


function wood_plants_button() {
  var popdownwood = document.getElementById("popdownwood");
  // var fibrehighlight = document.getElementsByClassName("fibre")[0];
  // var moreText = document.getElementById("letslarger");

  if (idinfo.style.display === "block") {


    $(".wood").each(function(){
           // Test if the div element is empty
           if($(this).is(":empty")){
             $(this).css("background", "#3C59F4");
             // 🍄 🍄 fibre 🍄 🍄
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
             // 🍄 🍄 dye 🍄 🍄
             $(".causeiloveu.dye").css("background", "#293d01");
             $(".andaheap.dye").css("background", "#3b5900");
             // 🍄 🍄 food 🍄 🍄
             $(".bushel.food").css("background", "#4d4d00");
             $(".and_a_peck.food").css("background", "#304701");
             $(".and_a_barrel.food").css("background", "#698000");
             $(".andaheap.food").css("background", "#3b5900");
             $(".quince.food").css("background", "#00292E");
             $(".heyo.food").css("background", "#4d4d00");
             $(".windand.food").css("background", "#999900");
             $(".therain.food").css("background", "#2b2b00");
             $(".causeiloveu.food").css("background", "#293d01");



           }
       });
  }
  else {
    // 🍄 🍄 wood 🍄 🍄
    $(".im_talkin.wood").css("background", "#1b2603");
    $(".inmysleep.wood").css("background", "#baba02");
    $(".heyo.wood").css("background", "#4d4d00");
    $(".windand.wood").css("background", "#999900");
    $(".therain.wood").css("background", "#2b2b00");

  }
}


var divState = {};
function showhide(id) {
    if (document.getElementById) {
        var divid = document.getElementById(id);
        divState[id] = (divState[id]) ? false : true;
        //close others
        for (var div in divState){
            if (divState[div] && div != id){
                document.getElementById(div).style.display = 'none';
                divState[div] = false;
            }
        }
        divid.style.display = (divid.style.display == 'block' ? 'none' : 'block');
    }
}

function letsgo(){

var all_plants = new Array ("Tea bush", "Elderberry", "Lupine", "Poke weed", "Madder root", "Coreopsis", "St.john's wort", "Japanese indigo", "Woad", "Blood root", "Weld","Day lily", "Iris", "Milkweed", "Phorium tanax", "Golden hops", "Green willow", "Hazel", "Yellow willow","Bamboo", "Blackberry (himalayan and thornless)", "Yucca","Blackberry (himalayan and thornless)", "Rasberry", "Apple tree", "Plum tree", "Strawberry", "Blueberry", "Cherry tree", "Spruce tree", "Oregon grape", "Elderberry", "Sunchoke", "Plantain","Dill weed", "Nootka rose", "Quince", "Red currant", "Cherry tree", "Apple tree", "Empress tree", "Green willow", "Chestnut", "Bamboo", "Ocean spray (iron wood)");
var randomNum_all_plants = Math.floor(Math.random() * all_plants.length);


var letsgo = all_plants[randomNum_all_plants] + ".html";
document.getElementById("letsgogo").href = letsgo;

}
