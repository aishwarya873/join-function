function getParagraph(){
    var inputs=[];
    for(var i=1;i <=6;i++){
        inputs.push(document.getElementById("para_"+i).value)
    }
document.getElementById("showpara1").innerHTML=inputs.join(". ");
}