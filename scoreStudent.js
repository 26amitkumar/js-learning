let score = Number(prompt("Enter total percentage of student"));

if (score >= 90 && score <= 100) {
    console.log("A grade");
} else if (score >= 70 && score < 90) {
    console.log("B grade");
} else if (score >= 60 && score < 70) {
    console.log("C grade");
} else if (score >= 50 && score < 60) {
    console.log("D grade");
} else if (score >= 0 && score < 50) {
    console.log("E grade");
} else {
    console.log("Invalid score");
}
