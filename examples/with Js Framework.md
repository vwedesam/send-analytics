### usage inside js framework

### Reactjs,Vuejs and Nextjs

``` js
      
    import 'send-analytics';
    or
    require('send-analytics');
    
    const analytics = window.sendAnalytics.config({ when: 'visible' });

    analytics.onSuccess(()=>{
        setMsg(` Analytics Request Counter  \n
                Counter = ${count} `);
        setCount( count+1 );
    })
    .send("https://jsonplaceholder.typicode.com/posts", { msg: "hello sam how are you??"})
    
```
