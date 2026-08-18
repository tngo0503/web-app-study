// /* 
// 1. Use the inquirer npm package to get user input.
// 2. Use the qr-image npm package to turn the user entered URL into a QR code image.
// 3. Create a txt file to save the user input using the native fs node module.
// */

// import inquirer from 'inquirer';
// import qr from 'qr-image';
// import fs from 'fs';

// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'userURL',
//       message: 'Enter your url: ',
//     },
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//     console.log('You enter a url: ' + answers.userURL);

//     const qr_png = qr.imageSync(answers.userURL, { type: 'png' });
//     console.log(qr_png);
//     fs.writeFile('./qrcode.png', qr_png, (error) => {
//       if (error) throw error;
//       console.log("QR code saved as qrcode.png");
//     })
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//       console.log("Hello world");
//     } else {
//       // Something else went wrong
//       console.log("Oppss something else went wrong");
//     }
//   });

import qr from 'qr-image';
import inquirer from 'inquirer';
import fs from 'fs';

inquirer
  .prompt([
    {
      "type": 'input',
      "name": 'userURL',
      "message": 'Type your url: ',
    },
  ])
  .then((answers) =>{
    console.log('Your entered url: ' + answers.userURL);
    
    // qr.imageSync(data, options) returns Buffer object & fs.writeFile(fileName, data) only takes either string or Buffer object for the data argument
    // const qr_png = qr.imageSync(answers.userURL, {type: 'png'});
    // fs.writeFile('./qrcode2.png', qr_png, (error)=>{
    //   if(error) throw error;
    //   console.log("png QR is saved successfully !!!");
    // })

    //qr.image(data, options) returns only a Stream object, so we need to use .pipe(fs.createWriteStream(fileName))
    const qr_png = qr.image(answers.userURL);
    qr_png.pipe(fs.createWriteStream('qrcode_stream.png'));
  })
  .catch((error)=>{
    console.log(error.stack); //where in the code it happened
    if(error.isTtyError) console.log("Something went wrong");
    else console.log("Opps something else went wrong !!");
  });