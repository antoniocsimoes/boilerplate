(function(APP) {
    APP.home = {};

    function changeColor() {
        // Can use all modules anywhere
        // See utils.js
        if(!APP.utils.isMobile()) {
            console.log('Desktop Version');
        }
    };

    
    APP.home.init = function() {
        changeColor();
    };
    
})(window.APP = window.APP || {});