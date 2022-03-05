player1_name=localStorage.getItem("player1_key")
player2_name=localStorage.getItem("player2_key")
player1_score=0
player2_score=0
document.getElementById("player1_name").innerHTML = player1_name+" : "
document.getElementById("player2_name").innerHTML = player2_name+" : "
document.getElementById("player1_score").innerHTML = player1_score
document.getElementById("player2_score").innerHTML = player2_score
document.getElementById("questionturn").innerHTML = "questionturn : "+player1_name
document.getElementById("answerturn").innerHTML = "answerturn : "+player2_name
function Send(){
    get_word = document.getElementById("word").value
    word = get_word.toLowerCase()
    console.log(word)
    char1 = word.charAt(1)
    console.log(char1)
    position2 = Math.floor(word.length/2)
    char2 = word.charAt(position2)
    console.log(char2)
    char3 = word.charAt(word.length - 1)
    console.log(char3)
    q1 = word.replace(char1, "_")
    q2 = q1.replace(char2, "_")
    q3 = q2.replace(char3, "_")
    console.log(q3)
    qtag = "<h3 id = 'word_display'>q." + q3 + "</h3>"
    itag = "<br>answer:<input type = 'text' id = 'inputbox'> "
    btag = "<br><br><button class = 'btn btn-info' onclick = 'check()'>check</button>"
    row = qtag + itag + btag
    document.getElementById("output").innerHTML = row
    document.getElementById("word").value = ""
}
questionturn = "player 1"
answerturn = "player 2"
function check(){
    get_answer = document.getElementById("inputbox").value
    answer = get_answer.toLowerCase()
    if(answer == word){
        if(answerturn == "player 1"){
            player1_score += 1
            document.getElementById("player1_score").innerHTML = player1_score
        }
        else if(answerturn == "player 2"){
            player2_score += 1
            document.getElementById("player2_score").innerHTML = player2_score
        }
    }
    if (questionturn == "player 1"){
        questionturn = "player 2"
        document.getElementById("questionturn").innerHTML = "questionturn : "+player2_name
    }
    else{
        questionturn = "player 1"
        document.getElementById("questionturn").innerHTML = "questionturn : "+player1_name
    }
    if(answerturn == "player 2"){
        answerturn = "player 1"
        document.getElementById("answerturn").innerHTML = "answerturn : "+player1_name
    }
    else {
        answerturn = "player 2"
        document.getElementById("answerturn").innerHTML = "answerturn : "+player2_name
    }
    document.getElementById("output").innerHTML = ""
}