$(document).ready(function(){
 $("#left").mouseenter(function(){
  $("body").css("background-color", "yellow");
 });
 $("#left").mouseleave(function(){
  $("body").css("background-color", "green");
 });
});
