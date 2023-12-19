const https = require('https');

https.get('https://jsonplaceholder.typicode.com/users',(res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        let jsonData = JSON.parse(data);
        console.log(jsonData);
    });
});
 
