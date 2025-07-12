// fill in javascript code here
document.querySelector("form").addEventListener("submit", getdata)

function getdata(e) {
    e.preventDefault();
    let name = document.querySelector("#name").value
    let id = document.querySelector("#docID").value
    let dept = document.querySelector("#dept").value
    let exp = document.querySelector("#exp").value

    let email = document.querySelector("#email").value

    let mobile = document.querySelector("#mbl").value

    let objtable={name,id,dept,exp,email,mobile} // ES6

    diplayTable(objtable);
    console.log(objtable);
}

function diplayTable(objtable){

    let row=document.createElement("tr");

    let td1=document.createElement("td")
     td1.innerText=objtable.name;

     let td2=document.createElement("td")
     td2.innerText=objtable.id;

     let td3=document.createElement("td")
     td3.innerText=objtable.dept;

     let td4=document.createElement("td")
     td4.innerText=objtable.exp;

     let td5=document.createElement("td")
     td5.innerText=objtable.email;

     let td6=document.createElement("td")
     td6.innerText=objtable.mobile;

     let td7=document.createElement("td")
     td7.innerText="trainy";

     let td8=document.createElement("td")
     td8.innerText="delete";

     row.append(td1,td2,td3,td4,td5,td6,td7,td8)
     document.querySelector("tbody").append(row);
}

