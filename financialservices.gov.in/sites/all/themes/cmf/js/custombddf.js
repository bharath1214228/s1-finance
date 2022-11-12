jQuery(document).ready(function(){
	
 	jQuery('#main-menu #nav li').find('a').each(function() {
	    if(jQuery(this).text() == "Home") {
	          jQuery(this).html('<i class="fa fa-home"></i>');
	    }
		if(jQuery(this).text() == "होम") {
	          jQuery(this).html('<i class="fa fa-home"></i>');
	    }
	});
	//for bottom links 
	//$('#block-block-16 ul li:gt(3)').hide();
	jQuery('#block-block-16 ul li').slice(6).hide();
	
	jQuery('.expanded').toggleClass('close');
	jQuery('.expanded>span').click(function(){
		if(jQuery(window).width() < 980){
			jQuery(this).toggleClass('moreminus');
			jQuery(this).parent().toggleClass('close');
			
			if(jQuery(this).parent('li').hasClass('close')){
				jQuery('.nav-wrapper ul li.open ul.menu').css('display','none');		
			}
			}
			
		});
		
	/* to add popup on extenal url click */
	jQuery("a[href^='http://']:not([href*='"+location.hostname+"']), [href^='https://']:not([href*='"+location.hostname+"'])")
    .attr("target","_blank").click(function(e){
        return confirm('You are being redirected to an external website. Please note that \'Department of Financial Services\' cannot be held responsible for external websites content & privacy policies.');
    });
	/* end */
	
	});

// var print1 = "<div class='ico-print' target='_blank'>Print</div>";

// jQuery(document).ready(function() {
    // jQuery('div.page-content').prepend(print1);
    // jQuery('.ico-print').click(function() {
        // w = window.open();
        // w.document.write('<html><head><title></title><body>');
        // if(jQuery('h1').length>0){
        // w.document.write(jQuery('h1').html());
         // }
        // w.document.write(jQuery('.inner-content').html());
        // w.document.write('</body></html>');
        // w.print();
        // w.close();
    // });
// });


(function ($) { 
  Drupal.behaviors.exampleModule = {
    attach: function (context, settings) {
      	jQuery( ".calendar-calendar table tbody tr .redCal" ).each(function() { 
			jQuery(this).parent().parent().parent().parent().parent().parent().parent().parent().addClass('red');
				var Id = jQuery(this).parent().parent().parent().parent().parent().parent().parent().parent().attr('id');
				var newval = Id.slice(0, -2);
				var upper_cls = newval+"-date-box";
				jQuery("#"+upper_cls).addClass('red');
		});
		jQuery( ".calendar-calendar table tbody tr .greenCal" ).each(function() {
			jQuery(this).parent().parent().parent().parent().parent().parent().parent().parent().addClass('green');
			var Idg = jQuery(this).parent().parent().parent().parent().parent().parent().parent().parent().attr('id');
				var newvalg = Idg.slice(0, -2);
				var upper_clsg = newvalg+"-date-box";
				jQuery("#"+upper_clsg).addClass('green');
		});
    }
  };
}(jQuery));


