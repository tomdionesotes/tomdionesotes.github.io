$(document).ready(function(){
 
 $("#left").mouseenter(function(){
  $("body").css("background-color", "#1daeff");
 });
 $("#left").mouseleave(function(){
  $("body").css("background-color", "#394357");
 });
 
 $("#center").mouseenter(function(){
  $("body").css("background-color", "#27bb66");
 });
 $("#center").mouseleave(function(){
  $("body").css("background-color", "#394357");
 });
 
 $("#right").mouseenter(function(){
  $("body").css("background-color", "#ff5257");
 });
 $("#right").mouseleave(function(){
  $("body").css("background-color", "#394357");
 });
 
 
});
