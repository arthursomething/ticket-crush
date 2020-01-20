function move(){
    var flag=0;
    var aux = document.getElementById("prodcCtrlAnid");
    var aux2 = document.getElementById("containerTxts");
    var btn = document.getElementById("ctaClickCtrl");
    if(!aux.classList.contains("scale")){
        aux.classList.add("scale");
        aux2.classList.remove('hide');
        aux2.classList.add('show');

        btn.classList.remove('hide');
        btn.classList.remove('noDisplay');
        btn.classList.add('show');
        btn.classList.add('display');

    }
    else if(aux.classList.contains("scale")){
        aux.classList.remove("scale");
        aux2.classList.remove('show');
        aux2.classList.add('hide');

        btn.classList.add('hide');
        btn.classList.add('noDisplay');
        btn.classList.remove('show');
        btn.classList.remove('display');
    }
   
}





function activate(ticket){
    var aux = document.getElementById(ticket);
    if(aux.classList.contains('back1')){
        aux.classList.remove('back1');
        aux.classList.add('back2');
    }
    else{
        aux.classList.remove('back2');
        aux.classList.add('back1');
    }
    
}