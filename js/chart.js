var ctx = document.getElementById('myChart').getContext('2d');
var ctx2 = document.getElementById('myChartFull').getContext('2d');
var pie = document.getElementById('pie-chart').getContext('2d');

var stackedBar = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['січ', 'лют', 'бер', 'кві', 'тра', 'чер', 'лип', 'сер', 'вер', 'жов', 'лис', 'гру'],
        datasets: [{
            label: 'Доступні години',
            backgroundColor: 'rgba(76,104,143,1)',
            borderColor: '#FFFFFF',
            data: [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
        }, {
            label: 'Використано годин',
            backgroundColor: 'rgba(235,54,39,1)',
            borderColor: '#FFFFFF',
            data: [43, 75, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        }]
    },



    options: {

        scales: {
            xAxes: [{
                offset: true,
                stacked: false,
                ticks: {
                    beginAtZero: true,
                }
            }],
            yAxes: [{
                offset: true,
                stacked: false,
                ticks: {
                    beginAtZero: true,
                }
            }]
        }
    }
});

stackedBar.data.datasets[0].data


var pieChart = new Chart(pie, {
    type: 'doughnut',
    data: {
        labels: ['Використано', 'Залишилось'],
        datasets: [{
            label: 'Доступні години',
            backgroundColor: ['rgba(235,54,39,1)', 'rgba(76,104,143,1)'],
            borderColor: 'white',
            data: [45, 15],
        }, ]
    },

    options: {
        legend: {
            display: false,
        }
    }
});


var fullBar = new Chart(ctx2, {
    type: 'horizontalBar',
    data: {
        labels: ['2020'],
        datasets: [{
            label: 'Доступні години',
            backgroundColor: 'rgba(76,104,143,1)',
            borderColor: 'rgb(255, 99, 132)',
            data: [700],
        }, {
            label: 'Використано годин',
            backgroundColor: 'rgba(235,54,39,1)',
            borderColor: 'rgb(255, 99, 132)',
            data: [138],
        }]
    },



    options: {
        legend: {
            display: false,
        },

        scales: {
            xAxes: [{
                offset: true,
                stacked: false,
                ticks: {
                    beginAtZero: true,
                }
            }],
            yAxes: [{
                offset: true,
                stacked: false,
                ticks: {
                    beginAtZero: true,
                }
            }]
        }

    }
});




var counter = function (howMuchHoursUsed) {
    pieChart.data.datasets[0].data[0] += howMuchHoursUsed;
    pieChart.data.datasets[0].data[1] -= howMuchHoursUsed;
}


counter(4);