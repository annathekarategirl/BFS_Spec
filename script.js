const gridDiv=document.getElementById('grid');
const calcBoxDiv=document.getElementById("calcBox");


 class Algorithm{
    //Abstract class
 }

 class BFS extends Algorithm{

 }

  class Node{
     constructor(type){
        this.type=type
     }
 }

 class Grid{
    constructor()//height,width)
    {
        // this.height=height
        // this.width=width
    } 
    makeGrid(height,width){
        var array=[]
        for(let i=0;i<height;i++){
            array.push([])
            let tableRow=document.createElement("tr")
            tableRow.id="Row "+i
            gridDiv.appendChild(tableRow)
            for (let j=0;j<width;j++){
                array[i].push(new Node("normal"))
                let tableData= document.createElement("td")
                tableData.id="Row-"+i+" Data-"+j
                tableRow.appendChild(tableData)
                tableData.innerHTML="<img src='whitesquare.png' style='height:50px;width:50px'>"
            }
        }
        console.log(array)
    }
}
    
    let grid= new Grid
    grid.makeGrid(6,7)