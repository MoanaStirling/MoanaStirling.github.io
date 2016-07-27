//var app = angular.module('MoanaStirling', []);

var dropdown = function(){
	$( ".wrapper-inner" ).hover(function(){
        $(".box").stop().slideDown(500);
    },
	function(){
		$(".box").stop().slideUp("slow");
	});
};

$(document).ready(dropdown);
