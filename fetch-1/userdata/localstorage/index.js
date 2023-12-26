let form=document.getElementById("form_data")
let get_data=document.getElementById("retrieve_btn")
let display=document.getElementById("display_data")
form.addEventListener("submit",function(e){
    e.preventDefault()
    let name=document.getElementById("name").value
    let age=document.getElementById("age").value
    localStorage.setItem("user_name",name)
    localStorage.setItem("user_age",age)
    
})
get_data.addEventListener("click",function(){
    let get_user=localStorage.getItem("user_name")
    let get_age=localStorage.getItem("user_age")
    let head=document.createElement("h1")
    let age_head=document.createElement("h2")
    head.innerText=get_user
    age_head.innerText=get_age
    display.append(head,age_head)

})