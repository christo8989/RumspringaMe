
var RM = RM || {};

RM.Outfit = function(p_Top, p_Bottom, p_Shoes) {
    
    var _this = this;
    
    var ImageTop = $('#outfit-top');
    var ImageBottom = $('#outfit-bottom');
    var ImageShoes = $('#outfit-shoes');
    
    _this.Top = _this.Top || {};
    _this.Bottom = _this.Bottom || {};
    _this.Shoes = _this.Shoes || {};
    
    _this.Top.Value = p_Top || '';
    _this.Bottom.Value = p_Bottom || '';
    _this.Shoes.Value = p_Shoes || '';
    
    var BuildOutfit = function() {
        ImageTop.prop('src', _this.Top.Value);
        ImageBottom.prop('src', _this.Bottom.Value);
        ImageShoes.prop('src', _this.Shoes.Value);
    };
    
    return {
        'Top' : _this.Top,
        'Bottom' : _this.Bottom,
        'Shoes' : _this.Shoes,
        'BuildOutfit' : BuildOutfit,
    };
};