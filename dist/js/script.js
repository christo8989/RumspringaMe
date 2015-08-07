
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
    
    var IsMale;
    var Outfits = [];
    var current = -1;
     
   
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
    
    var SetupTopButton = function(button, showMe) {
        button.click(function(e) {
            e.preventDefault();
            
            IsMale = $(this).data('is-boy') || IsMale;
            ShowContainer(showMe);
        });
    };
    
    var SetupBottomButton = function(button, showMe) {
        button.click(function(e) {
            e.preventDefault();
            
            Outfits.push(new RM.Outfit());
            current++;
            
            SetupOutfit(Outfits[current].Top, button);
            ShowContainer(showMe);
        });
    };
    
    var SetupShoesButton = function(button, showMe) {
        button.click(function(e) {
            e.preventDefault();
            
            SetupOutfit(Outfits[current].Bottom, button);
            ShowContainer(showMe);
        });
    };
    
    var SetupFinalButton = function(button, showMe) {
        button.click(function(e) {
            e.preventDefault();
            
            SetupOutfit(Outfits[current].Shoes, button);
            Outfits[current].BuildOutfit();
            ShowContainer(showMe);
        });
    };
    
    var SetupGenderButton = function(button, showMe) {
        button.click(function(e) {
            e.preventDefault();
            
            ShowContainer(showMe);
        });
    };
    
    var SetupOutfit = function(outfit, button) {
        var image = button.parent().find('.item.active img');;
        outfit.Value = image.prop('src');
    };
    
    var ShowContainer = function(showMe) {
        HideAll();
        Show(showMe);
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
    
    return {
        'init' : init,
    };
   
})();

$(document).ready(function() {
    RM.App.init();
});
