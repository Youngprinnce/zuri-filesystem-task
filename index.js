const axios = require('axios');
const fs = require('fs');

// Asynchronous function to get all the posts
const dotun = async () => {
    //Fetch data
    const response = await axios.get('http://jsonplaceholder.typicode.com/posts');
    
    //Convert to JSON
    const data = JSON.stringify(response.data, null, 4);

    // Write to file
    fs.writeFile(`${__dirname}/result/posts.json`, data, err => {
        if (err) throw err;
        console.log('Posts successfully written to file');
    });
}

//Call the function
dotun()


        
        