$(document).ready(function(){
	/*左侧tab切换*/
	$("#SY-Product-Category").idTabs();
	
	/*树形折叠*/
	$(".SY-Product-Category-List ul > li ul").hide();
	$(".SY-Product-Category-List ul > li span").each(function(i,node){
		var _this = $(this);
		
		_this.bind('click',function(){
			_this.parent().parent().find("ul").slideUp();
			_this.next().slideDown();
		});
	});
});