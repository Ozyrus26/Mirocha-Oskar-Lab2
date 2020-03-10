document.addEventListener('DOMContentLoaded', appStart)

let canvas
let ctx
let md
let brush = "square"
const color = drawcolor

function appStart() {
    canvas = document.querySelector('#canvas')

    document.querySelector('#square').addEventListener('click', () =>{ 
            painting()
            paintingSquare()
    })
    document.querySelector('#circle').addEventListener('click', () =>{
            paintingCircle()
            painting()
    })
    document.querySelector('#black').addEventListener('click', () =>{
            black()
    })
    document.querySelector('#blue').addEventListener('click', () =>{
            blue()
    })
    document.querySelector('#red').addEventListener('click', () =>{
            red()
    })
    document.querySelector('#green').addEventListener('click', () =>{
            green()
    })
    document.querySelector('#yellow').addEventListener('click', () =>{
            yellow()
    })
    document.querySelector('#orange').addEventListener('click', () =>{
            orange()
    })
    document.querySelector('#white').addEventListener('click', () =>{
            white()
    })
    document.querySelector('#purple').addEventListener('click', () =>{
            purple()
    })
    document.querySelector('#grey').addEventListener('click', () =>{
            grey()
})
ctx = canvas.getContext('2d')
}

function painting(){
    canvas.addEventListener('mousedown', down)
    canvas.addEventListener('mouseup', toggledraw)
    canvas.addEventListener('mousemove',
    function(e){
        var mousePos = getMousePos(canvas, e)
        var posx = mousePos.x
        var posy = mousePos.y
        var brush = "circle"
        draw(canvas, posx, posy, brush)
    })
   
function down(){
    md = true
}

function toggledraw(){
    md = false
}

function getMousePos(canvas, e){
    var rect = canvas.getBoundingClientRect()
    return{
        x:e.clientX - rect.left,
        y:e.clientY - rect.top
    }
}

function draw(canvas, posx, posy){
    var context = canvas.getContext('2d')   
    if(md){
        if (brush == "square"){
            context.fillRect(posx, posy, 14, 14)
            context.fillStyle = drawcolor
        }
        else if (brush == "circle"){
        context.beginPath()
        context.arc(posx, posy, 10, 0, 2 * Math.PI)
        context.fill()
        context.fillStyle = drawcolor
        }
        }
    }
}

function paintingCircle() { brush = "circle" }
function paintingSquare() { brush = "square" }
function black()  { drawcolor = 'black' }
function blue()   { drawcolor = 'blue'  }
function red()    { drawcolor = 'red'   }
function green()  { drawcolor = 'green' }
function yellow() { drawcolor = 'yellow'}
function orange() { drawcolor = 'orange'}
function white()  { drawcolor = 'white' }
function purple() { drawcolor = 'purple'}
function grey()   { drawcolor = 'grey'  }