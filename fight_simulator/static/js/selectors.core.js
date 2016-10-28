// clean corner

RED_CORNER = true;
BLUE_CORNER = false;

// True is for red corner, False is for blue corner
// NOTE this function expects a consistent html structure
// and is based on the existance of a 'class named corner' on
// both fighter corners. updating that html may require an update
// of this function
function clear_player_selection(corner) {
  // clear gender
  var RED_CORNER = true;
  var BLUE_CORNER = false;
  
  var side = 99;
  
  if( corner === RED_CORNER ) {
  side = 0;
  } else {
  side = 1;
  }

  var _gender = 0;
  var _promotion = 1;
  var _weight = 2;
  var _fighter = 3;
  
  // clear fighter info
  var gender_sel = $('.corner')[side].getElementsByTagName('select');
  $( gender_sel[_gender] ).selectpicker('val', 'Gender');
  $( gender_sel[_promotion] ).selectpicker('val', 'Promotion');
  $( gender_sel[_weight] ).selectpicker('val', 'Weight');
  $( gender_sel[_fighter] ).selectpicker('val', 'Fighter');

  // clear the image
  $('.corner')[side].getElementsByTagName('img')[0].src = "../static/images/Body-1.png";
  // clear fighter info text

  var _name = 1;
  var _nickname = 3;
  var _weightclass = 5;
  var _record = 7;
  
  finfo_txt = $('.corner')[side].getElementsByTagName('td');
  finfo_txt[_name].innerHTML = "";
  finfo_txt[_nickname].innerHTML = "";
  finfo_txt[_weightclass].innerHTML = "";
  finfo_txt[_record].innerHTML = "";
}
// end of clear_player_selection

// trap on change ( menu option, gender, so that it applies to both corners )
function filter_by_gender(corner) {  
  $('.gender_menu').change(function() {
    var gender_sel = $(this).val().toLowerCase();
    if (gender_sel === "male") {
      console.log(get_fighters_by_gender(gender_sel));
    } else if (gender_sel === "female") {
      console.log(get_fighters_by_gender(gender_sel));
    }
  });
}

function filter_by_promotion(corner) {
  $('.promotion_menu').change(function() {
    var promotion_sel = $(this).val();
    if (promotion_sel === "UFC") {
      console.log(get_fighters_by_promotion(promotion_sel));
    } else if (promotion_sel === "Bellator") {
      console.log(get_fighters_by_promotion(promotion_sel));
    }
  });
}

function filter_by_weight(corner) {
  $('.weight_menu').change(function() {
    var weight_sel = $(this).val().toLowerCase();
    if (weight_sel === "strawweight") {
      console.log(weight_sel);
    } else if (weight_sel === "flyweight") {
      console.log(weight_sel);
    } else if (weight_sel === "bantamweight") {
      console.log(weight_sel);
    } else if (weight_sel === "fetherweight") {
      console.log(weight_sel);
    } else if (weight_sel === "lightweight") {
      console.log(weight_sel);
    } else if (weight_sel === "welterweight") {
      console.log(weight_sel);
    } else if (weight_sel === "middleweight") {
      console.log(weight_sel);
    } else if (weight_sel === "light heavyweight") {
      console.log(weight_sel);
    } else if (weight_sel === "heavyweight") {
      console.log(weight_sel);
    }      
  });
}

$(document).ready(function() {
  filter_by_gender(RED_CORNER);
  filter_by_promotion();
  filter_by_weight();
});