
let randomNum = 0;
let crystal1 = 0;
let crystal2 = 0;
let crystal3 = 0;
let crystal4 = 0;
let counter = 0;
let wins = 0;
let losses = 0;

function newNums() {
    randomNum = Math.floor(Math.random() * (120 - 19)) + 19;
    crystal1 = Math.floor(Math.random() * (12 - 1)) + 1;
    crystal2 = Math.floor(Math.random() * (12 - 1)) + 1;
    crystal3 = Math.floor(Math.random() * (12 - 1)) + 1;
    crystal4 = Math.floor(Math.random() * (12 - 1)) + 1;
    counter = 0;
    $("#random").text(randomNum);
    $("#crystal1").attr("value", crystal1);
    $("#crystal2").attr("value", crystal2);
    $("#crystal3").attr("value", crystal3);
    $("#crystal4").attr("value", crystal4);
    $("#counter").text(counter);
}

newNums();

$(".crystal").click(function () {
    
    var counterNumber = parseInt(counter);
    var objectValue = $(this).attr("value");
    counter = counterNumber + parseInt(objectValue);
    
    $("#counter").text(counter);
    
    if (counter > randomNum) {
        losses++;
        newNums();
    }
    if (counter === randomNum) {
        wins++;
        newNums();
    }
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
});
