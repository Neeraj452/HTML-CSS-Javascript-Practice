function Calculator() {


    var p = parseInt(document.getElementById("Amount").value);

    var year = parseInt(document.getElementById("year").value);
    var rate = parseInt(document.getElementById("interest").value);
    var interest = (p * rate) / 100;
    interest = interest / 1.819;
    console.log(interest);
    var amount = p + interest;
    console.log("total ", amount);
    var month = amount / 12 * year;
    console.log("month", month);

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "EMI CALCULATOR"
        },
        data: [{
            type: "pie",
            startAngle: 235,
            yValueFormatString: "##0.0\"\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                {y: p, label: "Principle"},
                {y: year, label: "Year"},
                {y: rate, label: " Rate of Interest"},
                {y:interest,label: "Total Interest"},
                {y: amount, label: " Total Amount"},
                {y: month, label: "Monthly EMI Amount"}
            ]
        }]
    });
    chart.render();
}
