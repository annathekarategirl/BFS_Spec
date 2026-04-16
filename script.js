const gridDiv=document.getElementById('grid');
const calcBoxDiv=document.getElementById("calcBox");


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
                
                    else if (array[i][j].type=="wall")
                            {array[i][j].type='normal';
                            array[i][j].setColor("white")}
                    else{console.log("test")};})
            }
        }
        
        console.log(array)
    }
}
    
    let grid= new Grid
    grid.makeGrid(9,9)