const yargs = require('yargs');
const fs = require('fs');

const txt = 'You are awesome';

if (yargs.argv.filename) {
    fs.access(yargs.argv.filename, (err) => {
        if (!err) {
            console.log('File already exists, insert new filename');
        } else {
            // write a new file
            fs.writeFile(yargs.argv.filename, txt, function(err) {
                if (!err) {
                    console.log('File Created');
                } else {
                    console.log(err);
                }
            });
        }
    });
} else {
    console.log('Please enter a filename');
}