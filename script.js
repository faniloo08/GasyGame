var myIndex = 0;
/*carousel();*/
var x = document.getElementsByClassName("mySlides");

function _get(elt)
{
    return document.getElementById(elt);
}

function _create(elt)
{
    return document.createElement(elt);
}

function carousel(){
    var i;
    for (i = 0; i < x.length; i++){
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length){
        game();
    }    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 10000);    
}

function move(){
    window.location.assign("../html/home.html");
}

function myfunction(){
    window.location.assign("../html/Slider.html");
}

function next(){
    var i;
    for (i = 0; i < x.length; i++){
       x[i].style.display = "none";  
    }
    myIndex++;
    /*if (myIndex > x.length){
        move();
    }  */  
    x[myIndex-1].style.display = "block"; 
}

function prev(){
    /*var i;
    for (i = 0; i < x.length; i++){
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length){
        move();
    }   
    x[1-myIndex].style.display = "block"; */ 
    window.history.back();
}

function game(){
    window.location.assign("../html/game.html");
}

function choixsens(){
    var droite = _get("D");
    var gauche = _get("G");
    var d = false;
    var g = false;
    droite.addEventListener("click",function(e){
        d = true;
        console.log("d= ",d);
    });
    gauche.addEventListener("click",function(e){
        g = true;
        console.log("g= ",g);
    });
    if (d == true){
        return d;
    }
    else if (g == true){
        return g;
    }
}

function createplat(){
    var tableau = _get("tab");
    let plateauordi=_get("ordi");
    //creation plateau joueur
    tableau.style.backgroundColor="";
    tableau.style.border="2px solid skyblue";
    tableau.style.borderRadius="20px";
    tableau.style.margin="15px 350px 0px 350px";
    tableau.style.borderSpacing="10px 10px";
    ordi.style.backgroundColor="";
    ordi.style.border="2px solid skyblue";
    ordi.style.borderRadius="20px";
    ordi.style.margin="3px 350px 0px 350px";
    ordi.style.borderSpacing="10px 10px";
    for (let i = 0; i < 2; i++) {//creation ligne
        var tr = _create('tr');
        tableau.appendChild(tr);
        for (let j = 0; j < 6; j++) {//creation cellule
            let td = _create('td');
            tr.appendChild(td);
            let bout = _create('button');
            bout.style.color = "white";
            bout.style.fontSize="50px";
            bout.style.width = "70px";
            bout.style.height = "70px";
            bout.style.cursor="pointer";
            bout.style.borderRadius="40px 40px";
            bout.style.background="url(../image/vato.png)";
            bout.style.border="2px solid skyblue";
           
            td.appendChild(bout);//chaque cellule est un boouton
            bout.addEventListener('mouseover',function(e){
                bout.style.background="url(../image/vatob.png)"; 
            });
            bout.addEventListener('mouseout',function(e){
                bout.style.background="url(../image/vato.png)"; 
            });
            var contenu = 2;
            bout.innerHTML = contenu;
            bout[i,j] = contenu;
            bout.addEventListener('click',function (vide){
                    bout.innerHTML = 0;
                    bout[i,j] = 0;
                    bout.style.background="url(../image/vide.png";
                    console.log(i,j);
                    var k = j + contenu;
                    var kprim = j - contenu;
                    console.log(k);
                    console.log(bout[i,j]);
                    let defsens = _create("button");
                    defsens.innerHTML = "Go";
                    bout.appendChild(defsens);
                    defsens.addEventListener('click',function(e){
                        let dist = j + 1;
                        var win = _get("win");
                        win.style.display = "block";
                        win.style.opacity= "1";
                        win.style.borderRadius= "20px";
                        var jeu = _get("jeu");
                        jeu.style.opacity= "0";
                        /*for (let dist = j + 1; dist <= k;dist ++){
                            bout[i,dist] = bout[i,dist] + 1 ;
                            console.log(bout[i,dist]);
                            //bout.innerHTML = ++contenu;
                        }*/
                    });
                    /*if (choixsens().return == 'd'){
                        /*for (let dist = j + 1; dist <= k;dist ++){
                            bout[i,dist]++;
                            bout.innerHTML ++;
                            console.log(bout[i,dist]);
                        }
                        
                    }*/
            });
            
        }
    }
    //creation plateau ordi
    plateauordi.style.backgroundColor="";
        for (let a = 0; a < 2; a++) {
            var tr = _create('tr');
            plateauordi.appendChild(tr);
            for (let b = 0; b < 6; b++) {
                let td = _create('td');
                tr.appendChild(td);
                let bout = _create('button'); 
                bout.style.color = "white";
                bout.style.fontSize="50px";          
                bout.style.width = "70px";
                bout.style.height = "70px";
                bout.style.cursor="pointer";
                bout.style.cursor="pointer";
                bout.style.borderRadius="40px 40px";
                bout.style.background="url(../image/vato.png)";
                bout.style.border="2px solid skyblue";
                td.appendChild(bout);
                bout.innerHTML = 2;
            }
        }

}
function validateForm(){
    var x = _get("uname").value;
    _get("username").innerHTML= x;
}

function changeavat(){
    var i;
    var ch = _get("avatar");
    var avat = _get("test");
    avat.style.display="block";
    const img = document.querySelectorAll(".avatar");
    for (i= 0; i< img.length; i++){
        img[i].addEventListener('click',function(e){
            for (j= 0; j< img.length; j++){
                ch.src = img[j].src;
            }
            avat.style.display="none";
            _get("picker").style.display="none";
        });
    };
};

