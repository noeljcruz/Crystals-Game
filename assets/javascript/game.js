
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
}

newNums();

$(document).ready(function() {

    $("#crystal1").on("click", function () {
        counter = counter + crystal1;
        $("#counter").text(counter);
    });

    $("#crystal2").on("click", function () {
        counter = counter + crystal2;
        $("#counter").text(counter);
    });

    $("#crystal3").on("click", function () {
        counter = counter + crystal3;
        $("#counter").text(counter);
    });

    $("#crystal4").on("click", function () {
        counter = counter + crystal4;
        $("#counter").text(counter);
    });
    
    if (counter > randomNum) {
        losses++;
        newNums();
    }
    
    if (counter === randomNum) {
        wins++;
        newNums();
    }

    $("#random").text(randomNum);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    $("#counter").text(counter);

});
