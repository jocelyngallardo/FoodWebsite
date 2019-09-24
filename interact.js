/*seasonal drink website link
	toggle with side dishes
	toggle with seasonal drinks
 */
 $(document).ready(function(){
	$("h1").click(function(){
		$("p").toggle();
		$("img").toggle;
	});
	$("#one").click(function(){
		$(".hide").toggle();
		$("img").show();
	});
});