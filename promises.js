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

function creatli(nj,callback)
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



creatli({name:'kam', place:'chick'}).then(getobj).catch(err=>{console.log(err)});

const Promise1 = Promise.resolve("Hi there!");
const Promise2 = 10;
const Promise3 = new Promise((resolve,reject)=>{setTimeout(resolve,3000,'bye!!')});
const Promise4 = fetch('https://jsonplaceholder.typicode.com/users').then((response)=>response.json())
Promise.all([Promise1,Promise2,Promise3,Promise4]).then((val)=>console.log(val));
