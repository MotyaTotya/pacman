let pacman=document.getElementById("pacman")
let cursorX=0
let pX=0
let pY=0
let prev_cursorX=0
document.body.onmousemove=(event)=>{
    cursorX=event.offsetX
    if (cursorX>prev_cursorX) {
        pacman.style.transform="translate(-50%,-50%)"
    }
    else{

        pacman.style.transform="translate(-50%,-50%) scaleX(-1)"
    }
    // console.log(cursorX,prev_cursorX)
    prev_cursorX=cursorX
    pX=event.offsetX
    pacman.style.left=pX+"px"
    pY=event.offsetY
    pacman.style.top=pY+"px"
}
setInterval(function(){
    let enemy=document.createElement("img")
    enemy.src="c.png"
    document.body.appendChild(enemy)
    enemy.classList.add("enemy")
    enemy.style.top=Math.random()*window.innerHeight+"px"
    let enemyWidth=Math.random()*180+20
    enemy.style.width=enemyWidth+"px"
    enemy.style.left="-"+enemyWidth+"px"
    // let enemyTransition=Math.random()*10+5
    // enemy.style.transition=enemyTransition+"s"
    // setTimeout(function () {
    //     enemy.style.left=window.innerWidth+"px"
    //     setTimeout(function (){
    //         enemy.remove()
    //     },enemyTransition*1000)
    // },500)
},700)
setInterval(function(){
    let enemyr=document.createElement("img")
    enemyr.src="c.png"
    document.body.appendChild(enemyr)
    enemyr.classList.add("enemyr")
    enemyr.style.top=Math.random()*window.innerHeight+"px"
    let enemyrWidth=Math.random()*180+20
    enemyr.style.width=enemyrWidth+"px"
    enemyr.style.left=window.innerWidth+"px"
    let enemyrTransition=Math.random()*10+5
    // enemyr.style.transition=enemyrTransition+"s"
    // // setTimeout(function () {
    //     enemyr.style.right=window.innerWidth+"px"
    //     setTimeout(function (){
    //         enemyr.remove()
    //     },enemyrTransition*1000)
    // },500)
},700)
setInterval(function(){
    let enemiesl=document.getElementsByClassName("enemy")
    for(let e of enemiesl){
        let eX=parseInt(window.getComputedStyle(e, null).getPropertyValue("left"))+2
        let eY=parseInt(window.getComputedStyle(e, null).getPropertyValue("top"))
        e.style.left=eX+"px"
        if (Math.abs(eX-pX)<50 && Math.abs(eY-pY)<50) {
            console.log("контакт"+"px");
            e.remove()
        }
        if (eX>window.innerWidth) {
            e.remove()
        }
        
    }
    let enemiesr=document.getElementsByClassName("enemyr")
    for(let e of enemiesr){
        let eX=parseInt(window.getComputedStyle(e, null).getPropertyValue("left"))-2
        let eY=parseInt(window.getComputedStyle(e, null).getPropertyValue("top"))
        e.style.left=eX+"px"
        if (Math.abs(eX-pX)<50 && Math.abs(eY-pY)<50) {
            console.log("контакт"+"px");
            e.remove()
        }
        if (eX<0) {
            e.remove()
        }
    }
},1)