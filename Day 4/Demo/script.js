// var x = 10
// var mypromise = new Promise(function(resolve,reject){
//     if(x>5){
//         setTimeout(()=>{
//             resolve('promise1 done')
//         },5000)
//     }
//     else{
//         setTimeout(()=>{
//             reject('promise1 failed')//throw error ('promise1 failed')
//         },5000)
//     }
// })

// var result = mypromise
// .then(function(data){
//     console.log(data)
//     var x = 10
//     var mypromise2 = new Promise(function(resolve,reject){
//         if(x>5){
//             setTimeout(()=>{
//                 resolve('promise2 done')
//             },5000)
//         }
//         else{
//             setTimeout(()=>{
//                 reject('promise2 failed')//throw error ('promise1 failed')
//             },5000)
//         }
//     })
//     return mypromise2
// })
// .then(myfun)
// .catch(err=>{
//     console.log(err)
// })

// function myfun(data){
//     console.log(data)
// }


// implementation then,catch
// function test(myfun){
//     try{
//        var value = myfun()
//        if(!value){
//         return new Promise((r,f)=>{
//             r()
//         })
//        }
//        else
//         return value
//     }
//     catch(err){
//         return new  Promise((r,f)=>{
//             f(err)
//         })
//     }
// }

// var result = mypromise
// .then(function(data){
//     console.log(data)
//     throw 'error'
// })
// .catch(function(err){
//     console.log('log msg',err)
//     // var x = new Promise((r,f)=>{
//     //     r()
//     // })
//     // return x
    
// })
/**PromiseState
 * Pending
 * fulfilled
 * rejected
 */
/**
 * PromiseResult---->data passed resolve function or reject function
 */
// var y = 10
// var mypromise2 = new Promise(function(resolve,reject){
//     if(y>5){
//         setTimeout(()=>{
//             resolve('promise2 done')
//         },2000)
//     }
//     else{
//         setTimeout(()=>{
//             reject('promise2 failed')//throw promise1 failed
//         },2000)
//     }
// })
// console.log(mypromise)//{state:pending}
// // console.log(mypromise2)


// var result = mypromise
// .then(function(msg){
//     console.log(msg)//promise1 done
//     var y = 10
//     var mypromise2 = new Promise(function(resolve,reject){
//         if(y>5){
//             setTimeout(()=>{
//                 resolve('promise2 done')
//             },2000)
//         }
//         else{
//             setTimeout(()=>{
//                 reject('promise2 failed')//throw promise1 failed
//             },2000)
//         }
//     })
//     return mypromise2
// })
// // .then()
// console.log(result)//{state:pending}
// console.log(result)

// // mypromise2
// // .then(function(msg){
// //     console.log(msg)
// // })
// // .catch(function(err){
// //     console.log(err)
// // })


// var myval = 1
// console.log('test')
// console.log('test')
// console.log('test')
// console.log('test')
// console.log('test')
// console.log('test')
// console.log('test')
// console.log('test')
// /**create promise
//  * state-- pending
//  * resolved---fullfilled
//  * failed---rejected
//  */
// async function fun(){
// var mypromise = new Promise(function(resolve,reject){
//     resolve('mypromise1 done')
// })

// console.log(mypromise)
// var result = await mypromise
// console.log(result)
// }
// .then(function(msg){
//     console.log(msg)
// })
// .catch(function(err){
//     console.log(err)
// })

// async function fun(){
// var mypromise = new Promise(function(resolve,reject){
//     var xhr = new XMLHttpRequest()
//     xhr.open('GET','https://dummyjson.com/products')
//     xhr.onreadystatechange = function(){
//         if(xhr.readyState==4){
//             if(xhr.status>=200&&xhr.status<300){
//                 resolve(xhr.responseText)
//             }
//             else{
//                 reject(xhr.status)
//             }
//         }
//     }
//     xhr.send()
// })

// var result = mypromise
// .then(function(data){
//     var mypromise = new Promise(function(resolve,reject){
//     var xhr = new XMLHttpRequest()
//     xhr.open('GET','https://dummyjson.com/products/1')
//     xhr.onreadystatechange = function(){
//         if(xhr.readyState==4){
//             if(xhr.status>=200&&xhr.status<300){
//                 resolve(xhr.responseText)
//             }
//             else{
//                 reject(xhr.status)
//             }
//         }
//     }
//     xhr.send()
//     })
//     var result = mypromise
//     .then(function(data){
//         // console.log(JSON.parse(data))
//         return JSON.parse(data)
//     })
//     .catch(err=>{

//     })
// })
// .catch(err=>{

// })
// try{
// var result = await mypromise
// console.log(result)
// }catch(err){

// }

//call-back hell
// .then((data)=>{
//     console.log(JSON.parse(data))
// })
// .catch(err=>{
//     console.log(err)
// })








// async function fun(){
//     await

// }

// fun()


async function outerfun(){
    var mypromise = new Promise((r,f)=>{
        setTimeout(()=>{
            r('success')
        },2000)
    })
    var result = await mypromise.then(function(msg){console.log(msg)})

    console.log(result)
    console.log('test')
    console.log('test')
    console.log('test')
    console.log('test')
    console.log('test')
    console.log('test')
    console.log('test')
    console.log('test')
    console.log('test')
    console.log('test')
}



// fetch()
outerfun()
console.log('test2')
console.log('test2')
console.log('test2')




