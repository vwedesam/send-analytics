
## Send Analytics and Diagnostics to Server Asynchronously

> Web sites often want to send analytics or diagnostics to the server when the user has finished with the page

__sendAnalytics.js__ helps you achieve this by sending data asynchronously from web browsers to a server using ('hidden', 'visible') transition when the user agent has an opportunity to do so, without delaying unload or the next navigation
 This means:

  * The data is sent reliably
  * It's sent asynchronously
  * It doesn't impact the loading of the next page


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

> send data on visibility state change i.e when the document becomes __visible__ or __hidden__

 ``` js   
    const obj = { 
               name: 'John doe',
               metaData: { 
                    email: "mymail@yahoo.com",
                    phone: "08080-9898-0000"
                    }
               };
    
    const url = "http://localhost/api/hello";
    
    const analytics = sendAnalytics.config({ when: 'visible' }) // or { when: 'hidden' }
                      .send(url, obj)

    analytics.once(); // or analytics.repeat();


```
> send data on __Every__ visibility state change i.e when the document becomes __hidden__

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

``` js

    const obj = { name: 'John doe' };
    
    const url = "https://jsonplaceholder.typicode.com/posts";

    const analytics = sendAnalytics.config()
    
    analytics.onSuccess((e)=>{
            console.log("analytics sent!!")
    })
    .send(url, obj);
    
    // repeat(), once() can be added to the chain

```
  

> __Ref  [developer.mozilla.org - sendBeacon](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon)__

### #License
### [the Lamb of God](https://www.ligonier.org/blog/jesus-christ-lamb-god/)
