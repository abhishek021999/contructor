
let cont=document.getElementById("container")
let button=document.getElementById("btn")
button.addEventListener("click",function(){
    fetch("https://reqres.in/api/users").then(function(response){
    return response.json()
    
    }).then(function(res){
    let data=res.data
    display(data)
    })
})


function display(detail){
    detail.forEach(element => {
        let avatar_image=document.createElement("img")
        avatar_image.src=element.avatar
        let user_name= document.createElement("h3")
        user_name.innerText=`user_name:- ${element.first_name}`
        let Email=document.createElement("p")
        Email.innerText=`Email :- ${element.email}`
        cont.append(avatar_image,user_name,Email)
    });
}
