// JavaScript Document

jQuery(document).ready(function(e) {
    var animate_width = jQuery('#side_nav_cont').width();
	jQuery('#side_nav_cont').animate({right: '-'+animate_width},500);
	jQuery('#side_nav_toggle2').animate({right: '-'+animate_width},10);
	
	jQuery('#side_nav_toggle').click(function(e) {
        e.preventDefault();
		jQuery(this).animate({right: '-'+animate_width},500);
		jQuery('#side_nav_toggle2').animate({right: animate_width},800);
		jQuery('#side_nav_toggle2').animate({right: animate_width},500);
		jQuery('#side_nav_cont').animate({right: '0px'},800);
		
    });
	
	jQuery('#side_nav_toggle2').click(function(e) {
        e.preventDefault();
		jQuery(this).animate({right: '-'+animate_width},500);
		jQuery('#side_nav_toggle').animate({right: '0px'},200);
		jQuery('#side_nav_toggle').animate({right: '0px'},500);
		jQuery('#side_nav_cont').animate({right: '-'+animate_width},800);
		
    });
	
	//view button position
	/*var linksSpace = $('.links').css('padding-left');
	alert(linksSpace);
	$('.mid_links a.view').css('left',linksSpace);*/
	
	if(window.innerWidth<941){
		var menus = jQuery('#side_nav_cont ul').html();
		jQuery('#nav').append(menus);
	}
});

window.onresize = function(){
	if(window.innerWidth<941){
		var menus = jQuery('#side_nav_cont ul').html();
		jQuery('#nav').append(menus);
	}
}