$(function () {
	
	var stylesheets = {}
	var baseurl = 'components/';
	
	// Loads and caches styles // 
	var loadStyle = function (name) {
		if (stylesheets[name])
			return;
		
		var url = baseurl + name + '.css';
		$('head').append('<link href="'+ url +'" rel="stylesheet" type="text/css">');
		stylesheets[name] = true;
	}
	
	$('[nemesis]').each {
		var name = $(this).attr('nemesis');
	}
})