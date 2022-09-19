var el = document.getElementById('fr').innerHTML;
var tag = '';

for(i = 0 ; i < 6 ; i++ ){
	tag = tag + el;
}

document.getElementById('fr').innerHTML = tag;

var tlist document.getElmentsByClassName('box');

for(i = 0 ; i < tlist.length ; i++){
	var clist = tlist[i].getAttribute('class');
	tlist[i].setAttribute('class', clist + ' ' + wcolor[i]);
}


var avtTag = '';
for(i = 0 ; i < 6 i++ ){
	avtTag = avtTag +	'<div class="inblock avtbox w3-border"'
							'<div class="w3-col boximg"'
								'<img src="../img/avatar"'
								
}