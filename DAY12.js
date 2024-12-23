DAY12
// PROMICE
// retuen promise((resove,reject))

// PROMISE IS OBJECT 
// ARUN

//WATERCAN
// ROOM CLEAN
// TRASH OUT

// then() - it will store the resolve valvues
//catch -willstore the reject valvues


function wake(){
    return new Promise ((resolve,reject) =>{
        setTimeout(() => {
            resolve("sakthi wakeup at 5am");
        },3000)
    });
}

function gym(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("gym going at 7am");

        },1000)
    });
}
 function office(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("office going at 7am");

        },2000)
    });
}

wake().then (valve =>{console.log(valve);return gym()})
.then (valve2 =>{console.log(valve2);return office()})
.then (valve3 =>{console.log(valve3);console.log("task completed")})

