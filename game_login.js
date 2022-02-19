function submit(){
    player_1 = document.getElementById("player1").value
    player_2 = document.getElementById("player2").value
    localStorage.setItem("player1_key", player_1)
    localStorage.setItem("player2_key", player_2)
    window.location = "game_page.html"
}