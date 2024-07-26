function cal(){
    let phy = parseInt(document.getElementById("phy").value);
    let bio = parseInt(document.getElementById("bio").value);
    let chm = parseInt(document.getElementById("chm").value);
    let ur = parseInt(document.getElementById("ur").value);
    let Eng = parseInt(document.getElementById("Eng").value);
    let is = parseInt(document.getElementById("is").value);
    let stdTmMarks = parseInt(document.getElementById("tm").value);
    let totalObtainedMarks = phy + bio + chm + ur + Eng + is;
    let Result = (totalObtainedMarks / stdTmMarks) * 100;
    document.getElementById("result").innerHTML = "Total Percentage: " + Result;
    if (Result === 100) {
        document.getElementById("grade").innerHTML = "A+ Grade";
    } else if (Result >= 90 && Result < 100) {
        document.getElementById("grade").innerHTML = "A Grade";
    } else if (Result >= 70 && Result < 89) {
        document.getElementById("grade").innerHTML = "B Grade";
    } else if (Result >= 50 && Result < 69) {
        document.getElementById("grade").innerHTML = "C Grade";
    } else if (Result >= 40 && Result < 49) {
        document.getElementById("grade").innerHTML = "D Grade";
    } else {
        document.getElementById("grade").innerHTML = "F Grade";
    }
}