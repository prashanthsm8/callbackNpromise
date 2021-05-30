//XMLhttpRequest

const request = new XMLHttpRequest();
request.open("Get","https://jsonplaceholder.typicode.com/users2");
request.send();
request.onload=()=>{
    console.log(request);
    if(request.status===200)
    {
        console.log(JSON.parse(request.response));
    }else
    {
        console.log(`error ${request.status}`);
    }
}

//fetch api
fetch("https://jsonplaceholder.typicode.com/users2").then((response)=>response.json()).catch((response)=>console.log(response)).
then((json)=>console.log(json));

/*fetch("https://jsonplaceholder.typicode.com/users2").then((response)=>console.log(response.status));*/

async function ab()
{
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let op = await res.json();
    console.log(op);
}

ab();

fetch('https://jsonplaceholder.typicode.com/posts',{
    method : 'POST',
    headers :{
        'Content-Type' : 'application/json'
    },
    body : JSON.stringify(
            {
                "userId": 11,
                "id": 11,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          }
        )
}).then(res=>console.log(res.json()));
