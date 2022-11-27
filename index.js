// const num= [92,2122,17775,1,6];

// let sli = num.slice(2,4)
// // compare = (a,b) =>{
// //     return b-a;
// // }
// // num.sort(compare);
// console.log(num,sli);


// const num = [1,2,3,4,5,6];

// num.forEach((element)=>{
//     console.log(element*element);
// })

// Convert any object to array
// let name = "Chirag";
// let char_name = Array.from(name);
// console.log(char_name);

//for of

// const num = [1,2,34,5];
// for(let i of num){
//     console.log(i);
// }

//for in => Returns index of an object

// const num = [1,2,34,5];
// for(let i in num){
//     console.log(i);
// }


// Higher order Array methods
// Map , Reduce , Filter Methods

// const a = [1,2,3,4,5];

// let new_a = a.map((value)=>{
    
//     return value*2;
// })

// console.log(new_a,typeof new_a);


// const a = [1,2,3,4,5];

// let filter_a = a.filter((value)=>{
//     return value>2;
// })

// console.log(filter_a);


// const a = [1,2,3,4,5];

// let reduce_a = a.reduce((a,b)=>{
//     return a+b;
// })

// console.log(reduce_a);



//Callback Functions
// greet("Good Morning",name1,name2);


// function greet(wish,name1,name2){
//     console.log(wish);
//     name1("Chirag",name2);
//     name2("Arora");
// }

// function name1(boy){
//     console.log(boy);
//     name2("Arora");
// }

// function name2(surname){
//     console.log(surname);
//     greet("Good afternoon",name1,name2);
// }

//Promises

// let p1 = new Promise((resolve,reject)=>{
//     console.log("Promise pending");
//     setTimeout(()=>{
//         resolve("Success");
//     },3000);
    
    
// })

// p1.then((value)=>{
//     console.log(value + "to the promise");
// })

// let p2 = new Promise((resolve,reject)=>{
//     console.log("Promise pending");

//     setTimeout(()=>{
//         reject(new Error("Rejected due to error"))
//     },3000);
    
// })

// console.log(p1,p2);

// Async(returns a promise) and await function(wait till the promise is not complete)

// let weather = temp();
// console.log(weather);
// async function temp(){
//     let delhi = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(21);
//         },1000)
//     })

//     let udaipur = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Udaipur temp is " + 27);
//         },2000)
//     })

//     console.log("Temperature of delhi is");
//     // delhi.then((value)=>{
//     //     console.log(value);
//     // });
//     let delhi_weather = await delhi;
//     let udaipur_weather = await udaipur;
//     // console.log(udaipur_weather)
//     return [delhi_weather, udaipur_weather];
// }

// Fetch API

const answer = document.querySelector('#ans');


let promise = fetch("https://dog.ceo/api/breeds/image/random");

promise.then((response)=>{
    
        return response.json();
    
}).then((data)=>{
    answer.innerHTML = `<img src="${data.message}" width="600px" height="400px">`;
    

})



