$(document).ready(function() {

	$("#btn-rawtext, .menu-link").hover(function() {
		$(this).css("background-color", "#A406D7");
	},function() {
		$(this).css("background-color", "#000000");
	});

	$("#fldLeft, #fldMiddleT, #fldRight, #fldMiddleB").hover(function() {
		$(this).css("background-color", "#A406D7");
	}, function() {
		$(this).css("background-color", "#000");
	});

	$("#menu-restart").click(function() {
		location.reload();
	});

});
