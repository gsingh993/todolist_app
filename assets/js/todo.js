$("ul").on("click", "li", function(){
	$(this).toggleClass("markOff");
});
$("ul").on("click", "span",function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation();
})
$("input[type = text]").keypress(function(event){
	if(event.which === 13){
		var newText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> "+newText+"</li>");
		}
})

$(".fa-plus").click(function(){
	$("input[type = 'text']").fadeToggle();
})