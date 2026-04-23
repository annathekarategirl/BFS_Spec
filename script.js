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
const sizeSub=document.getElementById("sizesub");
const calcButton=document.getElementById("calc")

 class Algorithm{
    //Abstract class
 }



  class Node{
     constructor(type, tableData, coordinates,neighbors){
        this.type=type
        this.tableData=tableData
        this.coordinates=coordinates
        this.neighbors=neighbors
        this.parent=parent
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
     cleanNeighbors(){
        let removables=[]
        for(let i=0;i<this.neighbors.length;i++){
            // if (this.neighbors[i][0]<0){
            //     this.neighbors.splice(i,1)
           
            //console.log(this.neighbors)
            if (this.neighbors[i][0]<0 || this.neighbors[i][1]<0 ||this.neighbors[i][0]>grid.height-1 || this.neighbors[i][1]>grid.width-1){
                //this.neighbors.splice(i,1)
                removables.push(this.neighbors[i])
            }
        } 
        //console.log(this.coordinates)
        //console.log("Before:",this.neighbors)
        //console.log("Remove:",removables)
       let res = [].concat(this.neighbors.filter(x => !removables.includes(x)));
    //    this.neighbors=[]
    //    for(let i=0;i<res.length;i++){
    //     this.neighbors.push(grid.array[res[i][0]][res[i][1]])
    //    }
       this.neighbors=res
        //console.log("After:",this.neighbors)
 }}

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
        this.array=[]
        gridDiv.innerHTML=""
        for(let i=0;i<height;i++){
            array.push([])
            let tableRow=document.createElement("tr")
            tableRow.id="Row "+i
            gridDiv.appendChild(tableRow)
            for (let j=0;j<width;j++){
                let iminusone=i-1
                let jminusone=j-1
                let iplusone=i+1
                let jplusone=j+1
                array[i].push(new Node("normal",document.createElement("td"),[i,j],[[iplusone,j],[iminusone,j],[i,jplusone],[i,jminusone]]))
                array[i][j].cleanNeighbors()
                //console.log(array[i][j].neighbors)
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
    changeSize(){
        this.makeGrid(heightInput.value,widthInput.value)
        console.log("test")
        //appends instead but do later
    }
}

 class BFS extends Algorithm{
    calculate(){
        let current
        let queue=[]
        let visited=[]
        //acccess start and goal object
        for(let i=0;i<grid.array.length;i++){
                for(let j=0;j<grid.array[i].length;j++){
                    if (grid.array[i][j].type=="start"){
                        
                        var startObject=grid.array[i][j]
                    }
                    if (grid.array[i][j].type=="goal"){
                        var goalObject=grid.array[i][j]
                        
                    }
                    if (grid.array[i][j].tableData.style.backgroundColor=="blue"){
                        grid.array[i][j].setColor("white")
                    }
                }   
            }
        //push start to queue
        let goalFound=false
        queue.push(startObject)
        current=queue.shift()
        if (typeof(startObject)==undefined){
            console.log("Is goal")
            return
        }
        else{
            while(goalFound==false){
            visited.push(current)
            for(let i=0;i<current.neighbors.length;i++){
                console.log(current)
                //console.log("neighbor",current.neighbors)
                //console.log("grid",grid.array[current.neighbors[i][0]][current.neighbors[i][1]])
                let neighborObject=grid.array[current.neighbors[i][0]][current.neighbors[i][1]]
                if(neighborObject.type=="goal"){
                    console.log("Is goal")
                    neighborObject.parent=current
                    console.log(current)
                    var endGoalObj=neighborObject
                    goalFound=true
                    
                }
                if(visited.includes(neighborObject)){
                    //neighborObject.setColor("magenta")

                }
                else if(neighborObject.type=="wall"){

                }
                
                else {
                    queue.push(neighborObject)
                    visited.push(neighborObject)
                    neighborObject.parent=current
                    neighborObject.setColor("pink")
                    startObject.setColor("purple")
                    //console.log("neighparent",neighborObject.parent)
                }
                // current=queue.shift()
            }
            current=queue.shift()
            
            //console.log("currnet",current)
            //console.log(current)
            //console.log("queue:",queue)
            
        }
        endGoalObj.setColor("red")
        endGoalObj.parent.setColor("blue")
        let next=endGoalObj.parent
        //LOOP UNTIL START NODE
        //let startFound=false
        let i=0
        while(next.parent){
            next=next.parent
            //console.log("next: ",next,"type: ",next.type,"parent: ",next.parent)
            next.setColor("blue")
            console.log("next",next.coordinates)
            console.log("p:",next.parent.parent.coordinates)
            i++
            startObject.setColor("purple")
        }
        
    }
    //
        //access neighbors
 }}
let bfsObject = new BFS()
    
let grid= new Grid()
grid.makeGrid(6,8)

goalSub.addEventListener('click', () => {grid.goalNode()})
startSub.addEventListener("click",() => {grid.startNode()})
sizeSub.addEventListener("click",() =>{grid.changeSize()})
calcButton.addEventListener("click",() =>{bfsObject.calculate()})

//problem- assigning parents to nodes links pairs together instead of sequenced