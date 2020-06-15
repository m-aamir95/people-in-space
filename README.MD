# People In Space

A Simple package to get the names of people currently in space from [This Useful API](http://api.open-notify.org/astros.json)
**This is basically a demo package** which I created to learn and walk through the steps of creating and publishing
packages on NPM.

*If however you still want to download and run it, here is some sample code on how to use it.*

```javascript  

/*Requiring the Pacakge alone will make a fetch request to the  above mentioned API  
  If successful, it will return an object containing the `count` and `people` property.
    count => Total Count of people currently in space
    people => An array containing names of People currently in space
*/
const spacePeople = require("people-in-space");

spacePeople
        .then(resp => console.log(resp.people));
```
