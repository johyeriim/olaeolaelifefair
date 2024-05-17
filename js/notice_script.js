$(function () {
	$(".notice_inner> ul> li").click(function () {
		$(this).children(".text_info").slideToggle();
	});
	$(".notice_inner> ul> li").click(function () {
		$(this).toggleClass("turn");
	});
});






