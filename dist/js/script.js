
var RM = RM || {};

RM.App = (function() {
    
    var Gender = $('#Gender');
    var Top = $('#Top');
    var Bottom = $('#Bottom');
    var Shoes = $('#Shoes');
    var Final = $('#Final');
    var buttonGender = $('a[href="#Gender"]');
    var buttonTop = $('a[href="#Top"]');
    var buttonBottom = $('a[href="#Bottom"]');
    var buttonShoes = $('a[href="#Shoes"]');
    var buttonFinal = $('a[href="#Final"]');
   
    var init = function() {
       Hide(Top);
       Hide(Bottom);
       Hide(Shoes);
       Hide(Final);
       Show(Gender);
        
       SetupButton(buttonGender, Gender);
       SetupButton(buttonTop, Top);
       SetupButton(buttonBottom, Bottom);
       SetupButton(buttonShoes, Shoes);
       SetupButton(buttonFinal, Final);
    };
    
    var SetupButton = function(button, showMe) {
        button.click(function(e) {
            e.preventDefault();
            
            HideAll();
            Show(showMe);
        });
    };
    
    var HideAll = function() {
       Hide(Gender);
       Hide(Top);
       Hide(Bottom);
       Hide(Shoes);
       Hide(Final);
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
