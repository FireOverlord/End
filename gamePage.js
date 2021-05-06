
player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
P1_score = 0;
P2_score = 0;
//Name
document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";
//Score
document.getElementById("P1_score").innerHTML = P1_score;
document.getElementById("P2_score").innerHTML = P2_score;
//
document.getElementById("PlayerQ").innerHTML = "Question turn-" + player1_name;
document.getElementById("PlayerA").innerHTML = "Answer turn-" + player2_name;
function send(){
    var N1=document.getElementById("N1").value;
    var N2=document.getElementById("N2").value;
    var Ans=N1*N2;
    document.getElementById("PlayerQ").innerHTML=N1+"x"+N2+"=?";
     if (document.getElementById("ANS").value==Ans) {
         document.getElementById("PlayerQ").innerHTML="you are correct!";
         P1_score=P1_score+1;
         P2_score=P2_score-1;  
     } else {
        document.getElementById("PlayerQ").innerHTML="you are wrong";
         P1_score=P1_score-1 ; 
         P2_score=P2_score+1;
     }
}
Q_turn="player1";
A_turn="player2";

function check(){
FetchA=document.getElementById("input_check_box").value;
Answer=FetchA.toLowerCase();
console.log("Answer is"+Answer);
if(Answer==word){
    if(A_turn=="player1"){
P1_score=P1_score+1;
document.getElementById("P1_Score").innerHTML=P1_score;
    }else{
        P2_score=P2_score+1;
        document.getElementById("P2_Score").innerHTML=P2_score;
    }
}
if(Q_turn=="player1"){
    Q_turn="player2";
    document.getElementById("playerQ").innerHTML="Question turn="+player2_name;
}else{
    Q_turn="player1";
    document.getElementById("playerQ").innerHTML="Question turn="+player1_name;  
}
if(A_turn=="player1"){
    A_turn="player2";
    document.getElementById("playerA").innerHTML="Answer Turn ="+player2_name;
}else{
    A_turn="player1";
    document.getElementById("playerA").innerHTML="Answer turn="+player1_name;  
}
document.getElementById("output").innerHTML="";
}