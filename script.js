const gridDiv=document.getElementById('grid');
const calcBoxDiv=document.getElementById("calcBox");
const startX=document.getElementById("startx");
const startY=document.getElementById("starty");
const startSub=document.getElementById("startsub")
const goalX=document.getElementById("goalx");
const goalY=document.getElementById("goaly");
const goalSub=document.getElementById("goalsub")
const heightInput=document.getElementById("height");
const widthInput=document.getElementById("width");
const sizeSub=document.getElementById("sizesub")

 class Algorithm{
    //Abstract class
 }

 class BFS extends Algorithm{

 }

  class Node{
     constructor(type, tableData, coordinates){
        this.type=type
        this.tableData=tableData
        this.coordinates=coordinates
     }
     setColor(hue){
        this.tableData.style.backgroundColor=hue
     }
     setStart(){
        this.type="start"
     }
     setGoal(){this.type="goal"
        this.setColor("red")
     }
     setStart(){
        this.type="start"
        this.setColor("purple")
     }
 }

 class Grid{
    constructor(height,width)
    {
        this.height=height
        this.width=width
        this.array=[]
    } 
    makeGrid(height,width){
        var array=[]
        this.height=height
        this.width=width
        for(let i=0;i<height;i++){
            array.push([])
            let tableRow=document.createElement("tr")
            tableRow.id="Row "+i
            gridDiv.appendChild(tableRow)
            for (let j=0;j<width;j++){
                array[i].push(new Node("normal",document.createElement("td"),[i,j]))
                array[i][j].tableData.id="Row-"+i+" Data-"+j
                tableRow.appendChild(array[i][j].tableData)
                array[i][j].tableData.style="border: 1px solid black;padding:40px"
                array[i][j].tableData.addEventListener("click",function(){
                    console.log(array[i][j].type)
                    if(array[i][j].type=="normal"){
                        console.log("type works")
                        array[i][j].type='wall';
                        console.log(array[i][j].type)
                        array[i][j].setColor("grey")
                        
                    }
                
                    else if (array[i][j].type=="wall") {
                            array[i][j].type='normal';
                            array[i][j].setColor("white")
                        }
                    else{console.log("test")};})
            }
        }
        
        //console.log(array)
        this.array=array
        return array
        
    }
    goalNode(){
        for(let i=0;i<this.array.length;i++){
            for(let j=0;j<this.array[i].length;j++){
                if (this.array[i][j].type=="goal"){
                    this.array[i][j].type="normal"
                    this.array[i][j].setColor('white')
                }
            }
        }
        this.array[goalY.value][goalX.value].setGoal()
    }
    startNode(){
        for(let i=0;i<this.array.length;i++){
            for(let j=0;j<this.array[i].length;j++){
                if (this.array[i][j].type=="start"){
                    this.array[i][j].type="normal"
                    this.array[i][j].setColor('white')
                }
            }
        }
        this.array[startY.value][startX.value].setStart()
    }
}
    
    let grid= new Grid
grid.makeGrid(6,8)

goalSub.addEventListener('click', () => {grid.goalNode()})
startSub.addEventListener("click",() => {grid.startNode()})