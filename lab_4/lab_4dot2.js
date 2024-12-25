const fs = require('fs');

const options = {
    encoding: 'utf8',
    // highWaterMark:16,
}

const readStream = fs.createReadStream('./lab_4/text_lab_4.txt',options);

readStream.on('data', (chunk) => {
    console.log('------------------------');
    console.log(chunk);

});

readStream.on('end', () => {
    console.log('Finished reading file.');
});
