
var chartOptions = {};
var charDefaulttData = {
    labels: ["Sleep", "Free Time"],
    datasets: [{
        label: "My Day",
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(132, 99, 255)'],
        borderColor: 'rgb(255, 99, 132)',
        hoverBackgroundColor: 'rgb(250, 148, 255)',
        data: [8, (24-8)]
    }]
};
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    // data: {
    //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //     datasets: [{
    //         label: 'My First dataset',
    //         backgroundColor: 'rgb(255, 99, 132)',
    //         borderColor: 'rgb(255, 99, 132)',
    //         hoverBackgroundColor: 'rgb(101, 0, 255)',
    //         data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]
    //     }]
    // },

    data: charDefaulttData,

    // Configuration options go here
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});
chart.defaults.global = {
    animationSteps : 50,
    tooltipYPadding : 16,
    tooltipCornerRadius : 0,
    tooltipTitleFontStyle : 'normal',
    tooltipFillColor : 'rgba(0,160,0,0.8)',
    animationEasing : 'easeOutBounce',
    scaleLineColor : 'black',
    scaleFontSize : 50
  }