var dropdown = function(){
	$( ".wrapper-inner" ).hover(function(){
        $(".profile-tray").stop().slideDown(1000);
    },
	function(){
		$(".profile-tray").stop().slideUp(1000);
	});
};

$(document).ready(dropdown);
