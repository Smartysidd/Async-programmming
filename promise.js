let mypromise=new Promise(function(resolve,reject){
const a=5
const b=3
if(a==b){
resolve('yes they are equal')
}
else{
    reject('no they are not equal')
}
})

//then method

mypromise.then(function(data){
    console.log(data)
})

//catch method
mypromise.catch(function(data){
    console.log(data)
})
