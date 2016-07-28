var dropdown = function(){
	$( ".wrapper-inner" ).hover(function(){
        $(".button-box").stop().slideDown(1000);
    },
	function(){
		$(".button-box").stop().slideUp(1000);
	});
};

$(document).ready(dropdown);
