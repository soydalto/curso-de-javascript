let img1 = document.getElementById(`image-1`);
let img2 = document.getElementById(`image-2`);

fetch("https://reqres.in/api/users/2")
    .then(res=>res.json())
    .then(res=>{
        console.log(res);
        img1.setAttribute("src",res.data.avatar);
    });

fetch("https://reqres.in/api/users",{
    method :"POST",
    body : `{"name": "morpheus","job": "leader"}`,
    headers : {"Content-type" : "application/json"}
})
    .then(res=>res.json())
    .then(res=>console.log(res));

fetch("https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg")
    .then(res=>res.blob())
    .then(res=>{
        console.log(res);
        img2.src = URL.createObjectURL(res);
    });