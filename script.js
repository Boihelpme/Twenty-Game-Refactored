 function run() {

    user()

}




function getCard() {
    var suitArray = ["C", "D", "H", "S"]
    var randomSuit = Math.floor(Math.random() * 4) // 0 to 3
    var suit =suitArray[randomSuit]
    return suit
}

score = 0
compc = 0

function genNum() {
    var A = Math.floor(Math.random() * 10) + 1
    return A
}

function user() {
    var B = getCard()
    var C = genNum()
    score = score + C
    document.getElementById("paragraph").innerHTML = "User Score: " + score; 
    document.getElementById("card").insertAdjacentHTML("beforeend", "<img src=images/" + C + B + ".jpg>")
    return score

}





 
