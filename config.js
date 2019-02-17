define( function ( require ) {

	"use strict";

	return {
		app_slug : 'agenda-del-conocimiento',
		wp_ws_url : 'https://agendadelconocimiento.com.ar/wp-appkit-api/agenda-del-conocimiento',
		wp_url : 'https://agendadelconocimiento.com.ar',
		theme : 'agenda-conocimiento-v1',
		version : '1.1',
		app_type : 'phonegap-build',
		app_title : 'Agenda del Conocimiento',
		app_platform : 'android',
		app_path: '',
		gmt_offset : 0,
		debug_mode : 'off',
		auth_key : ',3MWX4ramT7+$s4K;&_jblE:aMf5{}uXpAF?NCK^8k,+(;%7#`U9S<-Qx&3Zy=^8',
		options : {"refresh_interval":0,"pushwoosh":{"pwid":"724BF-91A4C","googleid":"703696420926"}},
		theme_settings : [],
		addons : [{"name":"Pushwoosh for WP-AppKit","slug":"wpak-addon-pushwoosh","url":"https:\/\/agendadelconocimiento.com.ar\/wp-content\/plugins\/wpak-addon-pushwoosh","js_files":[{"file":"js\/wpak-pushwoosh.js","type":"module","position":""},{"file":"js\/wpak-pushwoosh-app.js","type":"init","position":"before"}],"css_files":[],"html_files":[],"template_files":[],"app_data":null}]
	};

});
