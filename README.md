
## Send Analytics and Diagnostics to Server Asynchronously

__sendAnalytics.js__ is js Library for sending Analytics and Diagnostics code/data from web browsers to a server using ('hidden', 'visible') transition.

> __Transition__ happens when a user navigates to a __new page__, switches __tabs__, closes the tab, minimizes or closes the __browser__, or, on mobile, switches from the browser to a different app. 

data is transmitted asynchronously when the user agent has an opportunity to do so, without delaying unload or the next navigation. 
   This means:

  * The data is sent reliably
  * It's sent asynchronously
  * It doesn't impact the loading of the next page

### #Supported HTTP Verb
* POST

## #Installation
include sendAnalytics.js to your html, you can grab it from npm

``` js
    npm install send-analytics
```
or from a cdn
``` js
    https://cdn.jsdelivr.net/npm/sendAnalytics
```

## #Usage

> send data on DOMdocumentLoad
``` js 
    
    const obj = { text: 'Hello world' };
    
    const url = "http://localhost:3002/api/hello";
    
    const analytics = sendAnalytics.config()
                      .send(url, obj);

```

> send data on visibility state change 
``` js 
    
    const obj = { text: 'Hello world' };
    
    const url = "http://localhost:3002/api/hello";
    
    const analytics = sendAnalytics.config({ when: 'hidden' })
                      .send(url, obj)

    analytics.once();


```

``` js

    const obj = { 
               name: 'John doe',
               metaData: { 
                    email: "mymail@yahoo.com",
                    phone: "08080-9898-0000"
                    }
               };
    
    const url = "http://localhost:3002/api/hello";

    const analytics = sendAnalytics.config({ when: 'hidden' })
                      .send(url, obj)

    analytics.repeat();


```

## #API

### config([ transitionObject ])

  * transitionObject < Object >  ==> { when: ['visible', 'hidden'] }
                    * if no params is passed the once() and repeat() will be ignored
                    * data will be send immediately the DOMdocumentLoad 
  * Return < instance of sendAnalytics > which allows you to chain other methods

> The Page Transitioin and Visibility is especially useful for saving resources and improving performance by letting a page avoid performing unnecessary tasks when the document isn't visible
  
### send([ url, data ])

  * url < URL String >  ===> The URL that will receive the data. Can be relative or absolute.
  * data < Object >   ===> object containing the data to send.
  * Return < instance of sendAnalytics > 
  
### once() 
  * send data to server once on visibility state change 
 
### repeat()
  . send data on every visibility state change
  
  * __true__ if the user agent successfully queued the data for transfer. Otherwise, it returns __false__.

> __Ref  [developer.mozilla.org - sendBeacon](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon)__

### #License
### [the Lamb of God]()
