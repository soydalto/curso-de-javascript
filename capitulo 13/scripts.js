let req;
if (window.XMLHttpRequest) req = new XMLHttpRequest();
else req = ActiveXObject(`Microsoft.XMLHTTP`);

// req.addEventListener(`load`,()=>{
//     let res;
//     if (req.status == 200) res = req.response;
//     else res = `File not found`;
//     json = JSON.parse(res);
//     console.log(json);
// })
// req.open(`GET`,`file.json`);
// req.send();

req.addEventListener(`load`,()=>{
    let res;
    if (req.status == 200 || 201) res = req.response;
    else res = `File not found`;
    json = JSON.parse(res);
    console.log(json);
});

req.open(`POST`,`https://reqres.in/api/users`);
req.setRequestHeader(`Content-type`,`application/json;charset=UFT8`);
req.send(JSON.stringify({
    "name": "Angel",
    "job": "Dev"
}));