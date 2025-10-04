const fs = require('fs');
function readFileCallback(err, data) 
{ 
    if (err) {
    console.error('Error reading file:', err); 
    } else {
    console.log('File content:', data); 
    }
}
// อ่านไฟล์'example.txt' และเรียกใช้readFileCallback หลงั จากอ่านไฟลเ์ สร็จสิCน 
fs.readFile('example.txt', 'utf8', readFileCallback);