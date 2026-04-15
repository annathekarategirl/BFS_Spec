const gridDiv=document.getElementById('grid');
const calcBoxDiv=document.getElementById("calcBox");


 class Algorithm{
    //Abstract class
 }

 class BFS extends Algorithm{

 }

  class Node{

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
            for (let j=0;j<width;i++){
                array[i].push(new Node())
            }
        }
        console.log(array)
    }
}

