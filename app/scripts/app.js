(function(APP) {

    // Init Calls
    APP.init = function() {

        // Module Calls
        APP.example('test');

        // You can use all modules in anywhere
        console.log(!APP.utils.isMobile());

        // Page Calls
        APP.home.init();
    }

    // Init Application
    APP.init();
})(window.APP = window.APP || {});