let fs=require('fs');
//fs.writeFileSync('out.txt','This should get written to the file');
//console.log('this should print after the previous line');
fs.writeFile('out.txt','This should be written asynchronously',(err)=>{
    console.log('This is printed after the file is written');
});
console.log("this should print after previous line");