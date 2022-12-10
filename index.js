const btn=document.getElementsByClassName('btn');
const list=document.getElementsByClassName('users');
btn[0].addEventListener('click',adddata);
console.log(document.getElementsByClassName('btn'));
function adddata(e){
    var id=document.getElementById('id').value;
    var amount=document.getElementById('amount').value;
var desc=document.getElementById('desc').value;
var type=document.getElementById('type').value;
    e.preventDefault();
   alert(id);
   
    if(amount!=0 && desc!='' &&type!=''){
        console.log(`${amount} ${desc} ${type}`);
    //     class Obj{
    //         constructor(amount,desc,type){
    //             this.amount=amount;
    //             this.desc=desc;
    //             this.type=type;
    //         }

    //    }
       let obj1={
                "amount":amount,
                "desc":desc,
                "type":type
       }
        // let obj =new Obj(`${amount}, ${desc}, ${type}`);
            if(id==''){
            axios.post('https://crudcrud.com/api/9458c0e189c04e92957de6fb1aaed494/appointmentData',obj1)
            .then((response)=>{
                viewuser(response.data);
            })
            .catch(err=>console.log(err));
        }else{
          
                axios.put(`https://crudcrud.com/api/9458c0e189c04e92957de6fb1aaed494/appointmentData/${id}`,obj1)
                .then((response)=>{
                   getuserbyid(id);
                })
                .catch(err=>console.log(err));
        }
            // let objserialized=JSON.stringify(obj1);
            // localStorage.setItem(amount,objserialized);
            // console.log(JSON.parse(localStorage.getItem(obj1)));
            amount="";
            desc="";
        

    }
    
}
window.addEventListener('DOMContentLoaded',getuser);

function getuserbyid(id){
    axios.get(`https://crudcrud.com/api/9458c0e189c04e92957de6fb1aaed494/appointmentData/${id}`)
    .then((response)=>{
        console.log(response);
        viewuser(response.data);
    })
    .catch(err=>console.log(err));
}
function getuser(){
    axios.get('https://crudcrud.com/api/9458c0e189c04e92957de6fb1aaed494/appointmentData')
    .then((response)=>{
        console.log(response);
        // let nextValue;
for (let i = 0; i < response.data.length; i++){
    // nextValue = localStorage.getItem(localStorage.key(i));
//    console.log(nextValue);
//    let data=JSON.parse(value);
    viewuser(response.data[i]);


}
    })
    .catch(err=>console.log(err));
}

// let nextValue;
// for (let i = 0; i < localStorage.length; i++){
//     nextValue = localStorage.getItem(localStorage.key(i));
//    console.log(nextValue);
//    let data=JSON.parse(value);
//     viewuser(data);


// }
function editexpense(amount){
//     // console.log('clicked');
//    let detail= localStorage.getItem(amount);
//    let data=JSON.parse(detail);
//    console.log(data);
axios.get(`https://crudcrud.com/api/9458c0e189c04e92957de6fb1aaed494/appointmentData/${amount}`)
.then((response)=>{
    document.getElementById('id').value=response.data._id;
    document.getElementById('amount').value=response.data.amount;
   document.getElementById('desc').value=response.data.desc;
   document.getElementById('type').value=response.data.type;
   deletefromlist(response.data._id);
})
//    var amount=document.getElementById('amount').value=data.amount;
//    var desc=document.getElementById('desc').value=data.desc;
//    var type=document.getElementById('type').value=data.type;
   
}
function viewuser(data){
    // const li=document.createElement('li');
    
   
   
    const childhtml=`<li id=${data._id}> ${data.amount} ${data.desc} ${data.type} <button onclick="editexpense('${data._id}');">Edit</button><button onclick="deleteexpense('${data._id}');">Delete</button>`;
    
    const parentnode=document.querySelector('.users');
    parentnode.innerHTML=parentnode.innerHTML+childhtml;
    // console.log(list);

}

function deleteexpense(amount){
        // localStorage.removeItem(amount);
        axios.delete(`https://crudcrud.com/api/9458c0e189c04e92957de6fb1aaed494/appointmentData/${amount}`)
        .then((response)=>{
            deletefromlist(amount);
        })
        .catch(err=>console.log(err));
       
}
function deletefromlist(amount){
    const parentnode=document.getElementById('user');
    const nodedelete=document.getElementById(amount);
    if(nodedelete){
        parentnode.removeChild(nodedelete);
    }
   }