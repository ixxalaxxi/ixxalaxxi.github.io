import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("kartka","kartka.png")

loadSound("muzyka","aniol.mp3")

add([
    sprite("kartka"),
    pos(0,0)
])

loadSprite("gwiazda","gwiazda1.1.png")

add([
    sprite("gwiazda"),
    pos(5,0)
])

loadSprite("gwiazda2","gwiazda2.2.png")

const gwiazda2 = add([
    sprite("gwiazda"),
    pos(50,50),
    rotate()
])

const gwiazda = add([
    sprite("gwiazda2"),
    pos(220,50),
    rotate()
])


onUpdate(()=>{
  
    if(gwiazda.pos.x <400)
    if(gwiazda2.pos.x <500)
   

    gwiazda2.pos.x=gwiazda2.pos.x+2.1
    gwiazda2.angle +=1
    gwiazda.pos.x=gwiazda.pos.x+2.1
    gwiazda.angle +=1
})

onKeyPress("space", ()=>{
    play("muzyka")
})