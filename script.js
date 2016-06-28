var alert_box;



var width = document.innerWidth,
	height = document.innerHeight;

var type_ptr = 0;
var s = 100;


$(document).ready(function() {
	$('#min-button').click(function () {
		display_alert([
			'Apathy Reduction Wizard','','Where else do you have to go?','nowhere']);
	})
	$('#max-button').click(function () {
		display_alert([
			'Maximalist Compulsion Checker','','What do you need more of?','nothing']);
	})
	$('#esc-button').click(function () {
		display_alert([
			'Life Boundary Affirmation','','How are you going to quit?','I don\'t know']);
	})

	$('#alert-box').hide();
	$('#alert-box-button').click(function(){ $('#alert-box').hide(); });
	$('#text-box').focus();
	$('#text-box').keypress(function(e) {
		type_ptr += 1
		var cptr = (type_ptr-16)*s;
		if ( type_ptr > 10 && cptr < content.length ){ e.preventDefault(); next(); }
	})
})

function next() {
	var txt = $('#text-box').val();
	var cptr = (type_ptr-16)*s;
	$('#text-box').val( txt + content.substring(cptr, cptr+s) );
	$('#text-box').scrollTop(100000000); // Scroll to the lowest thing ever
}

function display_alert(text) {
	$('#alert-box-header').html(text[0]);
	$('#alert-box-h3').html(text[1]);
	$('#alert-box-p').html(text[2]);
	$('#alert-box-button').html(text[3]);
	$('#alert-box').show();
}
