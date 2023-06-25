const fs=require('fs')
let f1p = fs.promises.readFile('f1.txt')
let f2p = fs.promises.readFile('f2.txt')
let f3p = fs.promises.readFile('f3.txt')
function cb1(data){
    console.log('this is my file1 data->'+data)
    let f2p = fs.promises.readFile('f2.txt')
    return f2p
}
function cb2(data){
    console.log('this is my file2 data->'+data)
    let f3p = fs.promises.readFile('f3.txt')
    return f3p
}
function cb3(data){
    console.log('this is my file3 data->'+data)
}

f1p.then(cb1).then(cb2).then(cb3)