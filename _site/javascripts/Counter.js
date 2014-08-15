function Counter(){
}

Counter.prototype.Count = function(div){
	this.div = div;
	$(div).length;
}

Counter.prototype.Paste = function(div, content){
	this.div = div;
	this.content = content;
	$(div).html(content)
}