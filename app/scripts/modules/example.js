(function(APP) {
    APP.example = function(msg) {

        // You can use all modules in anywhere
        // See utils.js

        if(APP.utils.isMobile()) {
            console.log(msg);
        }
    };
})(window.APP = window.APP || {});
