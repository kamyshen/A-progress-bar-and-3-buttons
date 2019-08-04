$(document).ready(init);

function init(){
	$('#btnFirst').click(function() {
		changeWidth(1)});
	$('#btnSecond').click(function() {
		changeWidth(3)});
	$('#btnThird').click(function() {
		changeWidth(7)});
}

function changeWidth(incr) {
	console.log(incr);
	$('.progress-bar').width(function (n, currentWidth) {
		return currentWidth*(1 + incr / 100)});
}