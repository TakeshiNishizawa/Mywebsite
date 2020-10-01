
/*--------------------------------------------------------------
	
	Script Name : Link Scroll
	Author : FIRSTSTEP - Motohiro Tani
	Author URL : https://www.1-firststep.com
	Create Date : 2018/10/14
	Version : 1.0
	Last Update : 2018/10/14
	
--------------------------------------------------------------*/


(function( $ ) {
	
	// function link_scroll
	function link_scroll() {
		
		var link_href = $( this ).attr( 'href' );
		
		$( 'html, body' ).animate({
			scrollTop : $( link_href ).offset().top
		}, 750 );
		
		return false;
		
	}
	
	
	
	
	$( 'a.link-scroll' ).on( 'click', link_scroll );
	
})( jQuery );