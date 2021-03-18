
/*@license
 *
 *  sendAnalytics.js  library for sending analytics and diagnostics data to a server
 * 
 *  Released under the The Lamb Of God license
 *  @author eshemiedomi samuel Oghenevwede
 *  @git: https://github.com/vwedesam/send-analytics
 *  
 */

(function (window) {

    const Analytics = () => {
        // Set the name of the hidden property and the change event for visibility
        var hidden, visibilityChange;
        if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
          hidden = "hidden";
          visibilityChange = "visibilitychange";
        } else if (typeof document.msHidden !== "undefined") {
          hidden = "msHidden";
          visibilityChange = "msvisibilitychange";
        } else if (typeof document.webkitHidden !== "undefined") {
          hidden = "webkitHidden";
          visibilityChange = "webkitvisibilitychange";
        }
    }

    const sentEvent = new Event('sent');

    Analytics.when = 'default'; // visible or hidden
    let _url = "";
    let _data = "";
    let isOnce = false;

    const sendData = function(){

        const url = _url;
        const data = _data;

        let validUrl = new window.URL(url);

        let obj = data;

        const blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });

        validUrl = validUrl.toJSON();

        const result = navigator.sendBeacon(validUrl, blob);

        if(result) document.dispatchEvent(sentEvent); // Create and dispatch Sent event;
        
        return result;
        
    }

    const handler = function(){

        if (document.visibilityState === Analytics.when) {
            sendData();
            if( isOnce ){
                document.removeEventListener("visibilitychange", handler);
            }
        }
    }

    Analytics.config = function ({ when = {}} = {}) {

        if(Object.keys(when).length == 0);
        else if (['visible', 'hidden'].includes(when)) {

            Analytics.when = when;

        } else {
            throw new Error(" invalid Config. Transition must either by 'visible' or 'hidden' !!!")
        }
        return this;
    }

    Analytics.send =  function (url, data) {

        _url = url;
        _data = data;

        if( Analytics.when == "default" ) sendData();
        else document.addEventListener('visibilitychange', handler)

        return this;
    }

    Analytics.onSuccess = function(callback){
        document.addEventListener('sent', (e)=>{
            callback(e);
        }, false)
        return this;
    }

    Analytics.once = function () {
            isOnce = true;
    }

    Analytics.repeat = function () {
            isOnce = false;
    }

    window.sendAnalytics = Analytics;

})( typeof window != 'undefined' ? window : this )
