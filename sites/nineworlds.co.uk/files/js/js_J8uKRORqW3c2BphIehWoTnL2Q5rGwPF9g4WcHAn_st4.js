jQuery(function($){
	$(document).ready(function(){
		
		//remove img height and width attributes for better responsiveness
		$('img').each(function(){
			$(this).removeAttr('width')
			$(this).removeAttr('height');
		});
		
		//responsive drop-down
		$("<select />").appendTo("#block-superfish-1");
		$("<option />", {
		   "selected": "selected",
		   "value": "",
		   "text": "Menu"
		}).appendTo("#block-superfish-1 select");
		$("#block-superfish-1 a").each(function() {
		 var el = $(this);
		 $("<option />", {
			 "value"   : el.attr("href"),
			 "text"    : el.text()
		 }).appendTo("#block-superfish-1 select");
		});
		
		//remove options with # symbol for value
		$("#block-superfish-1 option").each(function() {
			var navOption = $(this);
			
			if( navOption.val() == '#' ) {
				navOption.remove();
			}
		});
		
		$("#block-superfish-1 select").change(function() {
		  window.location = $(this).find("option:selected").val();
		});
		
		//uniform
		$(function(){
       		// $("#block-superfish-1 select").uniform();
      	});
	
	}); // END doc ready
}); // END function;
