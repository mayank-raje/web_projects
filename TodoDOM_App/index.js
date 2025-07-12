
let todoarr=JSON.parse(localStorage.getItem("todo"))||[];
document.querySelector("form").addEventListener("submit",getdata);
 
 displayTable(todoarr);
 
function getdata(e){
    e.preventDefault();

    const taskName=document.querySelector("#task").value
     const taskPriority=document.querySelector("#priority").value

     let taskobj={taskName,taskPriority} //  bu default key and value   ES6

     todoarr.push(taskobj);
     console.log(todoarr);

     localStorage.setItem("todo",JSON.stringify(todoarr));

     displayTable(todoarr);
}

function displayTable(todo){

     document.querySelector("tbody").innerText="";

     todo.forEach((el)=>{
        const row=document.createElement("tr");
    const td1=document.createElement("td")
    td1.innerText=el.taskName;

    const td2=document.createElement("td")
    td2.innerText=el.taskPriority;

    if(el.taskPriority=="High"){
        td2.style.backgroundColor="red"
    }
     else {
         td2.style.backgroundColor="green"
     }

    const td3=document.createElement("button")
    td3.innerText="add to Fav ❤️"

    td3.style.borderRadius="8px";
      td3.style.padding="5px";
        td3.style.borderColor="white";
         
     td3.addEventListener("click",function (){
        console.log(el);
     })
    row.append(td1,td2,td3)

    document.querySelector("tbody").append(row)
     
});
}

//   client side storage

     // it is provided by the web browser for localy storage the data 

     // in inspect - application

       // 1 local storage
       // 2 session storage