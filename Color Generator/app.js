function getcolor(){
    const rand = Math.floor(Math.random()*16777215);
    const hexcolor = '#'+rand.toString(16)
    console.log(hexcolor)
    document.body.style.backgroundColor=hexcolor
    document.getElementById("color-code").innerHTML=hexcolor
}
btn = document.getElementById("btn").addEventListener("click",getcolor)
// document.getElementById("color-code").innerHTML=hexcolor