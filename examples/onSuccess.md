
## send and Listen for success event 

``` js

    <script src="./sendAnalytics.js"></script>

    const obj = { name: 'John doe' };
    
    const url = "https://jsonplaceholder.typicode.com/posts";

    const analytics = sendAnalytics.config()
    
    analytics.onSuccess((e)=>{
            console.log("analytics sent!!")
    })
    .send(url, obj);

```

## send when page is visible and listen for success event

``` js

    <script src="./sendAnalytics.js"></script>

    const obj = { name: 'John doe' };
    
    const url = "https://jsonplaceholder.typicode.com/posts";

    const analytics = sendAnalytics.config({ when: 'visible })
    
    analytics.onSuccess((e)=>{
            console.log("analytics sent!!")
    })
    .send(url, obj).repeat(); 
    
    // once() can be added to the chain

```
