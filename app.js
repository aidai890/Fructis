// const Url
const url__api = 'https://656df576bcc5618d3c244f13.mockapi.io/ap/v1/Fructs';

async function getFructs(){
  const res=await fetch(url__api)
  const data=await res.json()
  console.log(data);
  renderFructs(data.slice(0,4))
}
getFructs()

function renderFructs(arr){
  cards.innerHTML=''
  for (const fructs of arr) {
    cards.innerHTML+=`
    <img width='20%' src='${fructs.avatar}' />
    <h4>${fructs.name}</h4>`
    
  }

}


const oranges=document.querySelector('#Oranges')
const all=document.querySelector('#all')
const org=document.querySelector('#org')
const fresh=document.querySelector('#fresh')
const veg=document.querySelector('#veg')
const fast=document.querySelector('#fast')
const rectangle=document.querySelector('#Rectangle')


const url='https://656df576bcc5618d3c244f13.mockapi.io/ap/v1/Fructs'

async function getProduct(){
    const res=await fetch(url)
    const data=await res.json()
    console.log(data);
    renderProduct(data.slice(13,21))
}
getProduct()

function renderProduct(obj){
    oranges.innerHTML=''
    for (const user of obj) {
        oranges.innerHTML+=`
    <div id="imgProduct">
    <img width='89%' src=${user.avatar}>
    <p >${user.name}</p>
    <h3>${user.price}</h3>
   </div>
        `
    }

}
async function getfructs(id){
    const res=await fetch(url +'/'+id)
    const data=await res.json()
    console.log(data);
    showFructs(data)
    
}
fructs()

function showFructs(obj){
    rectangle.innerHTML=''
 oranges.innerHTML=`
 <div id='content_2'>
 <div id='content_img'><img src='${obj.avatar}' />  
 </div>
 <div id='content_info'><h4>${obj.name}</h4>
 <p>${obj.price}</p>
 <div id='content_btns'>
 <button>В корзину</button>
 <button>В любимую</button>
 </div></div>
 </div>`

}








