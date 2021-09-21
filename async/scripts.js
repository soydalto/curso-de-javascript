let getData = async ()=>{
    let req = await fetch("file.json");
    let res = await req.json();
    console.log(res);
}

getData();

let getDataWithAxios = async ()=>{
    try {
        let res = await axios("filke.json");
        console.log(res.data);
    } catch (e) {
        console.log("API failed");
    }
}

getDataWithAxios();