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
    setTimeout(()=>{
        obj.push(nj);
        callback();
    },3000)
}



creatli({name:'kam', place:'chick'},getobj);
