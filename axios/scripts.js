axios(`file.json`)
    .then(res=>console.log(res.data));

axios(`https://reqres.in/api/users/2`)
    .then(res=>console.log(res.data));

axios.post(`https://reqres.in/api/users`,{
    "name" : "Angel",
    "job" : "Dev"
})
    .then(res=>console.log(res.data));