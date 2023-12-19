const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, 'apis', 'rev.js');

fs.writeFile(filePath, 'username:revathikv', (err) => {
    if (err) {
        throw err;
    }
    console.log('Folder and file created successfully');

    // Append to the file
    fs.appendFile(filePath, '\n age:22', (err) => {
        if (err) {
            throw err;
        }
        console.log('Contents added successfully');

        // Read the file after appending
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            console.log('Everything done');
            console.log(data);
        });
    });
});
