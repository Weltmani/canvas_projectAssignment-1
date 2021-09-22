console.log("canvas!")
var canvas=document.getElementById("canvas")
var slider=document.getElementById("lineWidth")
var ctx=canvas.getContext("2d")
ctx.fillStyle="#ff0000"
ctx.fillRect(0,0,200,100)



function drawTriangle(){
    console.log("drawTriangle")
    ctx.strokeStyle="#00ff00"
    ctx.lineWidth=slider.value
    ctx.beginPath()
    ctx.moveTo(300,300)
    ctx.lineTo(400,300)
    ctx.lineTo(400,400)
    ctx.lineTo(300,400)
    ctx.closePath()
    ctx.stroke()


}