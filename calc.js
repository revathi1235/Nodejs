//  function  add(a,b){
//      return a+b;
//  }
//  function sub(c,d){
//      return c-d;
//  }
// function  fibSeries(value){
// let n1=0,n2=1,sum;
// for( let i=0;i<value;i++){
// sum=n1+n2;
// n1=n2;
// n2=sum ;

// }
// return n1;
// }
//  module.exports.add=add
//  module.exports.subs=sub
// module.exports.fibSeries=fibSeries


// console.log(path)
//  console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.dirname(__filename));
// console.log(path.parse(__filename));

// console.log(path.join(__dirname,"api",'revathi.js'))



const path=require('path');
const fs=require('fs');
fs.writeFile(path.join(__dirname, "api", "revathi.js"),"username:swathi", (err) => {
    if(err) {
        throw err;
    }
   console.log('file created succesfully');
 
});
fs.appendFile(path.join(__dirname, "api", "revathi.js"),"\n email:eyddh123", (err,data) => {
    if(err) {
        throw err;
    }
   console.log('file contents written succesfully');
   console.log(data);
});
// fs.unlink(path.join(__dirname, "api", "revathi.js"),(err) => {
//     if(err) {
//         throw err;
       
//     }
//    console.log('deleted succesfully');
  
// });
fs.readFile(path.join(__dirname, "api", "revathi .js"),"utf8", (err,data) => {
    if(err) {
        console.log(err);
    }
   console.log('file readed succesfully');
   console.log(data);
});