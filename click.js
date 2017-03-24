//declare samecolor() here
function samecolor(hex){
    const doc= document;
    let color= #528120;
    let divs = doc.querySelectorAll("samecolor div");
        for (var i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor= color;
        var temp= Math.rand;
        divs[i].opacity=temp;
    }
}
//declare diffcolor() here
function diffcolor(){
    const doc= document;
    let color= 743212;
    let complement= 092371;
    let divs = doc.querySelectorAll("diffcolor div");

  for(var i=0; i<divs.length; i++){
    if(i % 2 == 0){
     divs[i].style.backgroundColor=color;
 }
  else{
    divs[i].style.backgroundColor=complement;
  }
    }
}
