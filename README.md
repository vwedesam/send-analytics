
## Send Analytics and Diagnostics to Server Asynchronously

__sendAnalytics.js__ is use to schedule asynchronous and non-blocking delivery of data that minimizes resource contention with other time-critical operations, while ensuring that such requests are still processed and delivered to destination.
 This means:

  * The data is sent reliably
  * It's sent asynchronously
  * It doesn't impact the loading of the next page
  * this library also support transition

> __Transition__ happens when a user navigates to a __new page__, switches __tabs__, closes the tab, minimizes or closes the __browser__, or, on mobile, switches from the browser to a different app. 
  
### #Supported HTTP Verb
* POST

## #Installation
include sendAnalytics.js to your html, you can grab it from npm

``` js
    npm install send-analytics
```
or from a cdn
``` js
    https://cdn.jsdelivr.net/npm/send-analytics
```

## #Usage

> send data on DOMdocumentLoad
``` js 
    
    const obj = { text: 'Hello world' };
    
    const url = "http://localhost/api/hello";
    
    const analytics = sendAnalytics.config()
                      .send(url, obj);
```
## See [Examples](https://github.com/vwedesam/send-analytics/tree/main/examples)
## [React.js Example](https://github.com/vwedesam/send-analytics/blob/main/examples/with%20Js%20Framework.md)

## #API

### config([ transitionObject ])

  * transitionObject < Object >  ==> { when: ['visible', 'hidden'] }
     * if no params is passed the once() and repeat() will be ignored     
     * data will be sent immediately the DOMdocumentLoad 
  * Return < instance of sendAnalytics > which allows you to chain other methods

> The Page Transition and Visibility is especially useful for saving resources and improving performance by letting a page avoid performing unnecessary tasks when the document isn't visible
  
### send([ url, data ])

  * url < URL String >  ===> The URL that will receive the data. Can be relative or absolute.
  * data < Object >   ===> object containing the data to send.
  * Return < instance of sendAnalytics > 
  
### once() 
  * send data to server once on __First__ visibility state change 
 
### repeat()
  * send data on __Every__ visibility state change

### onSuccess( [ callback ] )
  * callback < Function >
> __Note:__ for you to receive a __success__ Event the __onSuccess__ method must come before the __send([ url, data])__ method.
> see example [onSuccess](https://github.com/vwedesam/send-analytics/blob/main/examples/onSuccess.md)
  
> __Ref  [developer.mozilla.org - sendBeacon](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon)__

### #License
### [the Lamb of God](https://www.ligonier.org/blog/jesus-christ-lamb-god/)
