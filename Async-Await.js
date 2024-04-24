function getCheese()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Cheese being prepared");
        },2000)
    })
}
function getDough()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve("Dough being prepared");
            reject("Dough is Outstock");
        },2000)
    })
}
function getPizza()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Pizza being prepared");
        },2000)
    })
}
function getOrder()
{
   return new Promise((resolve,reject)=>{
       setTimeout(()=>{
           resolve("Order is Ready !!");
       },3000);
   })
}

async function orderPizza()
{
try{
    console.log(await getCheese()+"🧀");
    console.log(await getDough()+" 🍩");
    console.log(await getPizza()+" 🍕");
    console.log(await getOrder()+" 📦");
}
catch(error){
    console.log("Error Occured : ",error);
}

}
orderPizza();