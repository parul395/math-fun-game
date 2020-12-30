
var play = false;
var score;
var tr;
var action;
var c;

//if we click on start button
document.getElementById("startre").onclick = function(){
    

    
    if(play == true){
           
        location.reload();
        
    }else{
       
        
        
        play = true;
       
        
        
        score = 0;
        document.getElementById("val").innerHTML= score;
        
        
        
        show("time");
        tr = 60;
     document.getElementById("trr").innerHTML = tr;
        
       
        
        hide("over");
        
        
        document.getElementById("startre").innerHTML = "Reset Game";
        
        
        
        startCount();
        
        
        
        generateQA();
        }

}



for(i=1; i<5; i++){
    document.getElementById("b"+i).onclick = function(){
    //check if we are playing
    if(play == true){
            if(this.innerHTML == c)
                {
                    //correct answer
                   
                    score++;
                document.getElementById("val").innerHTML = score;
                    //hide wrong box and show correct box
                    hide("wrong");
                    show("Correct");
                    setTimeout(function(){
                        hide("Correct");
                    }, 1000);
                    //generate new question
                   
                    
                    generateQA();
                }else{//wrong answer
                 
                    hide("Correct");
                    show("wrong");
                    setTimeout(function(){
                        hide("wrong");
                    }, 1000);
                }
    }
}
}


function startCount(){
    action = setInterval(function(){
        tr -= 1 ;
        document.getElementById("trr").innerHTML = tr;
        if(tr == 0)
            {stopCounter();
             show("over");
             document.getElementById("over").innerHTML="<p>GAME OVER!</p><p>YOUR SCORE IS:" + score + ".</p>";
            
            hide("time"); 
             hide("Correct");
             hide("wrong");
            play = false;
              document.getElementById("startre").innerHTML="Start Game";
            }
        }, 1000);
}
function stopCounter()
{
    clearInterval(action);
}
function hide(Id){
    
    document.getElementById(Id).style.display = "none";
}
function show(Id){
    document.getElementById(Id).style.display = "block";
}


function generateQA()
{
  var a = 1+ Math.round(9*Math.random());
   var b =  1+ Math.round(9*Math.random());
    c = a/b;
    document.getElementById("ques").innerHTML= a + "/" + b ;
    
    var obj = 1+ Math.round(3*Math.random());
    
    document.getElementById("b"+obj).innerHTML= c;
  //for all different options
    var answer = [c];
    for(i=1; i<5; i++){
        if(i != obj){
            var wronga;
            do{
                 wronga = 1+ Math.round(9*Math.random())/(1+ Math.round(9*Math.random()));
            }while(answer.indexOf(wronga)>-1)
            document.getElementById("b"+i).innerHTML = wronga;
            answer.push(wronga);
          }
     }
}



  
