let obj=[
   {
        name : 'prash',
        place : 'bangalore'
    },

    {
        name : 'poo',
        place : 'atlanta'
    }
]

function getobj()
{
    setTimeout(()=>{
        let op ='';
        obj.forEach((ob,index)=>{
             op+= `<li>${ob.name}</li>`
            });
        document.body.innerHTML = op;
    },1000)
}

function creatli(nj)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
        obj.push(nj);
         let err =false;
         if(!err)
         {
            resolve();
         }
         else
         {
            reject('wrong');
         }
         },3000)

    })

}

async function init()
{
    await creatli({name:'kam', place:'chick'});

    getobj();
}

init();

async function ab()
{
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let op = await res.json();
    console.log(op);
}

ab();
