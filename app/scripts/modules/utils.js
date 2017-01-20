(function(APP) {
    APP.utils = {};
    

    // Verify the UserAgent to use 
    APP.utils.isMobile = function() {
        var userAgent = navigator.userAgent.toLowerCase();
        if( userAgent.search(/(android|avantgo|blackberry|iemobile|nokia|lumia|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i)!= -1 ){           
            return true;
        }
    };
})(window.APP = window.APP || {});



