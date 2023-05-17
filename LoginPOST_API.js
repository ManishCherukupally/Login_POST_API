function logininfo(){
    let username=document.querySelector('.username').value;
    let password=document.querySelector('.pswd').value;

    let details={
        "username" : username,
        "password" : password
    };
    //Dharani's (server) system IP address and PORT num
    fetch("http://192.168.0.153:5000/info",{
        method:"POST", 
        body:JSON.stringify(details),
        headers:{
            "Content-Type": "application/json"
        }
    })
    .then(res =>{
        return res.json()
    })
    .then(data=> {
        console.log(data)
        
    }).catch((err)=>{
        console.log(err,err) 
    });
}


