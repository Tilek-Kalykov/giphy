const API='http://api.giphy.com/v1/gifs/search?q='
const KEY='&api_key=eO6vPhypWwApKAiTPgfH2vw2wo1yqhK8'
const LIMIT = '&Lmit=10'

const search_giphy_by_name= async()=>{
    let text =document.getElementById('txt').value
   let url=API+text+KEY+LIMIT
   console.log(url);
   const res = await fetch(url)
   const req = await res.json()
   console.log(req.data);
   renderPoki(req.data)
}
let output=document.getElementById('output')
const renderPoki =(pokemons)=>{
    output.innerHTML=''
    pokemons.map(el=>{
        let block =document.createElement('div')
        let img =document.createElement('img')
        let name =document.createElement('h3')
        let number =document.createElement('p')
        let email=document.createElement('p')
        let ifrm=document.createElement('iframe')
        let name =document.createElement('h3')
        ifrm.src=el.embed_url
        name.textContent=el.title
        output.append(ifrm,name)
    })
}