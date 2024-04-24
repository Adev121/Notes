// --Promise-- 
// Basic Promise Syntax  //
// ----------------------------------------------------//
// let ticket= new Promise((resolve,reject)=>{
// let complete=true;
//     if(complete==true)
//     {
//         resolve("Hurray !!  Ticket Confirmed.");
//     }
//     else
//     reject("Sorry, Ticket Not Confirmed !");
// });

// ticket.then((data)=>{console.log(data);})
// .catch((error)=>{console.log(error);});

// ----------------------------------------------------//

// Using setTimeout delay  //

// function delay(complete)
// {
//     return new Promise((resolve,reject)=>{
//         console.log("Fetching....");// fetching keyword is used to show the user that thedata is being fetched.
//         setTimeout(() => {
//             if(complete)
//             {
//                 console.log("Hurray ! Ticket Confirmed");
//             }
//             else
//             console.log("Sorry, Ticket Cancelled.");
//         }, 2000);
//     });
// }
// delay(false).then((data)=>console.log(data))
// .then((error)=>console.log(error));


// ----------------------------------------------------//

function getCheese()
{
    return new Promise ((resolve,reject)=>{
setTimeout(() => {
    const cheese= "🧀";
    
    resolve(cheese);
}, 2000);
    })
}

function getDuogh()
{
    return new Promise ((resolve,reject)=>{
setTimeout(() => {
    const dough= "🍩";

    resolve(dough);
}, 2000);
    })
}

function getPizza()
{
    return new Promise ((resolve,reject)=>{
setTimeout(() => {
    const pizza= "🍕";

    resolve(pizza);
}, 2000);
    })
}

function Order()
{
    return new Promise ((resolve,reject)=>{
setTimeout(() => {
    resolve("Order is Ready !!");
}, 3000);
    })
}
getCheese().then((cheese)=>{
    console.log("Cheese is being prepared",cheese)
    return getDuogh(cheese);
}).then((dough)=>{
    console.log("Dough is being prepared",dough)
    return getPizza(dough);
}).then((pizza)=>{
    console.log("Pizza is being prepared",pizza);
    return Order(pizza);
})
.then((order)=>{
    console.log(`\n${order}`);
})
