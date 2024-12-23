DAY13

// .catch

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

async
async
 await   
 
 function work(){



}

try {
    let resut = 10/5
    console.log(resut)
    
}catch(error){
    console.log("an errror  occurren:",error);
    
}

// interitance
class parent{
    house(){
        console.log("Apartments");
        

    }
    
}
class Child extends parent{

    car(){
        console.log("bmw");
        
    }
}
const child = new child()
child.car()
child.house()

// parent : bike , car ,money
// child : house

// o/p
// bike money house

class parent{
    bike(){
        console.log("honda");   

    }
    car(){
        console.log("kia");
        
    }
    cash(){
        console.log("money");
        
    }
}
class chils = new child()

