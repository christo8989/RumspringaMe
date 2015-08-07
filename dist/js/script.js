
var RM = RM || {};

RM.App = (function() {
    
    var _this = this;
    _this.Gender = $('#Gender');
    _this.Top = $('#Top');
    _this.Bottom = $('#Bottom');
    _this.Shoes = $('#Shoes');
    _this.Final = $('#Final');
    var buttonGender = $('a[href="#Gender"]');
    var buttonTop = $('a[href="#Top"]');
    var buttonBottom = $('a[href="#Bottom"]');
    var buttonShoes = $('a[href="#Shoes"]');
    var buttonFinal = $('a[href="#Final"]');
    
    _this.IsMale;
    _this.Outfits = [];
    _this.current = -1;
    _this.baseImageUrl = './images/';
    _this.styles = ['emo', 'hippie', 'partier'];
    
   
    var init = function() {
       Hide(_this.Top);
       Hide(_this.Bottom);
       Hide(_this.Shoes);
       Hide(_this.Final);
        
       SetupGenderButton(buttonGender, _this.Gender);
       SetupTopButton(buttonTop, _this.Top);
       SetupBottomButton(buttonBottom, _this.Bottom);
       SetupShoesButton(buttonShoes, _this.Shoes);
       SetupFinalButton(buttonFinal, _this.Final);
       
       Show(_this.Gender);
    };
    
    var SetupTopButton = function(button, container) {
        button.click(function(e) {
            e.preventDefault();
            
            _this.IsMale = $(this).data('is-boy') || _this.IsMale;
            BuildImageSrc(container, 'top');
            ShowContainer(container);
        });
    };
    
    var SetupBottomButton = function(button, container) {
        button.click(function(e) {
            e.preventDefault();
            
            _this.Outfits.push(new RM.Outfit());
            _this.current++;
            
            SetupOutfit(_this.Outfits[_this.current].Top, button);
            BuildImageSrc(container, 'bottom');
            ShowContainer(container);
        });
    };
    
    var SetupShoesButton = function(button, container) {
        button.click(function(e) {
            e.preventDefault();
            
            SetupOutfit(_this.Outfits[_this.current].Bottom, button);
            BuildImageSrc(container, 'shoes');
            ShowContainer(container);
        });
    };
    
    var SetupFinalButton = function(button, container) {
        button.click(function(e) {
            e.preventDefault();
            
            SetupOutfit(_this.Outfits[_this.current].Shoes, button);
            _this.Outfits[_this.current].BuildOutfit();
            ShowContainer(container);
        });
    };
    
    var SetupGenderButton = function(button, container) {
        button.click(function(e) {
            e.preventDefault();
            
            ShowContainer(container);
        });
    };
    
    var SetupOutfit = function(outfit, button) {
        var image = button.parent().find('.item.active img');
        outfit.Value = image.prop('src');
    };
    
    var ShowContainer = function(container) {
        HideAll();
        Show(container);
    };
    
    var HideAll = function() {
       Hide(_this.Gender);
       Hide(_this.Top);
       Hide(_this.Bottom);
       Hide(_this.Shoes);
       Hide(_this.Final);
    };
    
    var Show = function(element) {
        element.show();
        element.addClass('in active');
        element.removeClass('hide');
    };
    
    var Hide = function(element) {
        element.hide();
        element.removeClass('in active');
    };
    
    var BuildImageSrc = function(container, clothing) {
        var baseUrl = _this.baseImageUrl + (_this.IsMale ? 'boy/boy-' : 'girl/girl-') + clothing + '-';
        var elements = container.find('.carousel-inner .item img');
        for (var i = 0; i < _this.styles.length; ++i)
        {
            $(elements[i]).attr('src', baseUrl + _this.styles[i] + '.JPG');
        }
    };
    
    return {
        'init' : init,
    };
   
})();

$(document).ready(function() {
    RM.App.init();
});
