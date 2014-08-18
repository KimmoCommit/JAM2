function Resizor(){
alert("hola");
    var winwidth = $(window).width();
    var winheight = $(window).height();

    this.setWinwidth = function(w){
        winwidth = s;
    }

    this.getWinwidth = function(){
        return winwidth;
    }

    this.setWinheight = function(h){
        winheight = h;
    }

    this.getWinheight = function(){
        return winheight;
    }
}

Resizor.prototype.resizeHeight = function(div){
    var winheight = this.getWinheight() - 200;
    this.div = div;
    $(div).css({'min-height': winheight + 'px'});
}

Resizor.prototype.resizeWidth = function(div){
    var winwidth = this.getWinwidth();
    this.div = div;
    $(div).css({'width': winwidth + 'px'});
}

Resizor.prototype.resizeBoth = function(div){
    var winwidth = this.getWinwidth();
    var winheight = this.getWinheight();
    this.div = div;
    $(div).css({'min-height': winheight + 'px'});
    $(div).css({'width': winwidth + 'px'});
    $(div).css({'max-width': winwidth + 'px'});

}

Resizor.prototype.resizeToDivHeight = function(div,model){
    this.div = div;
    this.model = model;
    var modelHeight = $(model).height();
    $(div).css({'min-height': modelHeight + 'px'});
}