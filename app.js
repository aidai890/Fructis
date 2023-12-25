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






