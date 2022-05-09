//$(“.all”).hide();

$(".continue").click(function() {
$(".one").hide();
    $(".three").hide();
    $(".four").hide();
    $(".five").hide();
});

$(".exit").click(function() {
$(".three").show();
$(".two").hide();
    $(".foot2").hide();
    $(".foot3").hide();
    $(".door").hide();
});

$(".foot1").dblclick(function() {
$(".foot1").hide();
    $(".foot2").show();
});

$(".foot2").dblclick(function() {
$(".foot2").hide();
    $(".foot3").show();
});

$(".foot3").dblclick(function() {
$(".foot3").hide();
    $(".door").show();
});

$(".stay").click(function() {
$(".four").show();
    $(".two").hide();
     $(".five").hide();
});

$(".button").click(function() {
$(".five").show();

});
