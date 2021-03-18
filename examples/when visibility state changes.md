
## send data on visibility state change i.e when the document becomes __visible__ or __hidden__

 ``` js   
    
    <script src="./sendAnalytics.js></script>
    
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

    analytics.repeat(); // or analytics.once();

```
