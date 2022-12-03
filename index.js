const btn=document.getElementsByClassName('btn');
const list=document.getElementsByClassName('users');
btn[0].addEventListener('click',adddata);
console.log(document.getElementsByClassName('btn'));
function adddata(e){
    var amount=document.getElementById('amount').value;
var desc=document.getElementById('desc').value;
var type=document.getElementById('type').value;
    e.preventDefault();
   
   
    if(amount!=0 && desc!='' &&type!=''){
        console.log(`${amount} ${desc} ${type}`);
        class Obj{
            constructor(amount,desc,type){
                this.amount=amount;
                this.desc=desc;
                this.type=type;
            }

       }
       let obj1={
                "amount":amount,
                "desc":desc,
                "type":type
       }
        let obj =new Obj(`${amount}, ${desc}, ${type}`);

            let objserialized=JSON.stringify(obj1);
            localStorage.setItem(amount,objserialized);
            console.log(JSON.parse(localStorage.getItem(obj1)));
            amount="";
            desc="";
        

    }
    
}

let nextValue;
for (let i = 0; i < localStorage.length; i++){
    nextValue = localStorage.getItem(localStorage.key(i));
   console.log(nextValue);
    viewuser(nextValue);


}
function editexpense(amount){
    // console.log('clicked');
   let detail= localStorage.getItem(amount);
   let data=JSON.parse(detail);
   console.log(data);
   var amount=document.getElementById('amount').value=data.amount;
   var desc=document.getElementById('desc').value=data.desc;
   var type=document.getElementById('type').value=data.type;
   
}
function viewuser(value){
    // const li=document.createElement('li');
    let data=JSON.parse(value);
   
   
    const childhtml=`<li id=${data.amount}> ${data.amount} ${data.desc} ${data.type} <button onclick="editexpense(${data.amount});">Edit</button><button onclick="deleteexpense(${data.amount});">Delete</button>`;
    
    const parentnode=document.querySelector('.users');
    parentnode.innerHTML=parentnode.innerHTML+childhtml;
    console.log(list);

}

function deleteexpense(amount){
        localStorage.removeItem(amount);
        deletefromlist(amount);
}
function deletefromlist(amount){
    const parentnode=document.getElementById('user');
    const nodedelete=document.getElementById(amount);
    if(nodedelete){
        parentnode.removeChild(nodedelete);
    }
   }