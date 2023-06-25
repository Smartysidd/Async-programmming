const fs=require ('fs')
// fs.readFile('f1.txt',cb)
// function cb(err,data){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("This is file1->"+ data)
//     }
// }
// let promiseReadFile = fs.promises.readFile('f5.txt')

//now handling this promise

// promiseReadFile1.then(function(data){
//     console.log('this is f1 data->' + data)
// })

// promiseReadFile1.catch(function(err){
//     console.log('this is your error->' + err)
// })
// // ------------------------------
// let promiseReadFile1 = fs.promises.readFile('f1.txt')
// let promiseReadFile2=fs.promises.readFile('f2.txt')
// let promiseReadFile3=fs.promises.readFile('f3.txt')
// promiseReadFile1.then(function(data){
//     console.log('This is file1 data->'+data)
// })
// promiseReadFile1.catch(function(err){
//     console.log('This is file1 data->'+err)
// })


// promiseReadFile2.then(function(data){
//     console.log('this is my file2 data->'+data)
// })
// promiseReadFile2.catch(function(err){
//     console.log('this is my file2 data->' + data)
// })



// promiseReadFile3.then(function(data){
//     console.log('This is my file3 data->'+data)
// })
// promiseReadFile3.catch(function(err){
//     console.log('this is my file3 data->'+err)
// })


// callback functions working


// function printfirstname(cb1,cb2,cb3,cb4){
// cb1()
// cb2()
// cb3()
// cb4()
// }
// function printlastname(){
// console.log('gupta')
// }

// function printage(){
//     console.log(23)
// }

// function printstate(){
//     console.log('TamilNadu')
// }

// function printcity(){
//     console.log('chennai')
// }

// printfirstname(printlastname,printage,printstate,printcity)

let f1p = fs.promises.readFile('f1.txt')
let f2p = fs.promises.readFile('f2.txt')
let f3p = fs.promises.readFile('f3.txt')

function readFilecallback(data){
    console.log('this is my file1->'+data)
}

function readfilehandleerror(err){
    console.log('this is my file->'+data)
}

f1p.then(readFilecallback)
f2p.then(readFilecallback)
f3p.then(readFilecallback)

f1p.catch(readfilehandleerror)
f2p.catch(readfilehandleerror)
f3p.catch(readfilehandleerror)