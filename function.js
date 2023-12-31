$(document).ready(function(){
$("#aboutcontent").mouseover(function(){
    $("#about-content").fadeIn(3000)
})
$("#skillcontent").mouseover(function(){
    $("#imgcontent").fadeIn(5000)
})
$("#contactcontent").mouseover(function(){
    $("#concontent").slideDown(3000)
})
$('.subm').click(function(){
    alert("Successfully Send")
})
});