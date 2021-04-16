var ctx = document.getElementById('chart-year').getContext('2d');
var ctx2 = document.getElementById('chart-month').getContext('2d');
var ctx3 = document.getElementById('chart-fullyear').getContext('2d');

Chart.defaults.font.family = 'Montserrat'
Chart.defaults.font.size = 10

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['січ', 'лют', 'бер', 'кві', 'тра', 'чер', 'лип', 'сер', 'вер', 'жов', 'лис', 'гру'],
        datasets: [{
            label: 'Кількість годин по договору',
            data: [12, 19, 3, 5, 2, 3, 8],
            backgroundColor: [
                'rgba(20, 118, 242, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderRadius: Number.MAX_VALUE
        }, 
        {
            label: 'Використано годин',
            data: [12, 19, 3, 5, 2, 3, 6],
            backgroundColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderColor: 'rgba(255, 99, 132, 1)',
            borderRadius: Number.MAX_VALUE
        }]
    },
    
    options: {
        
        plugins: {
            legend: {
                labels: {
                    font: {
                        family: 'Montserrat'
                    }
                }
            }
        },
        scales: {
            
            y: {
                beginAtZero: true
            }
            
        },

        layout: {
            padding: 40
        }
        
    }

});

var fullYear = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['Замовлено', 'Використано'],
        datasets: [{
            label: 'Кількість годин по договору',
            data: [500, 120],
            backgroundColor: [
                'rgba(20, 118, 242, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderRadius: Number.MAX_VALUE
        }
       ]
    },
    
    options: {
        
        plugins: {
            legend: {
                display: false,
                labels: {
                    font: {
                        family: 'Montserrat'
                    }
                }
            }
        },
        scales: {
            
            y: {
                beginAtZero: true
            }
            
        },

        layout: {
            padding: 30
        }
        
    }

});

var month = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Використано', 'Залишилось'],
        datasets: [{
            label: 'Доступні години',
            backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(20, 118, 242, 1)'],
            borderColor: 'white',
            data: [20, 40],
            borderWidth: 0,
            cutout: 40
        }, ]
    },

    options: {

        plugins: {
            tooltip: {
                displayColors: false
            },

            legend: {
            
                display: true,
    
                labels: {
                    font: {
                        family: 'Montserrat',
                        size: 10
                    }
                }
            },
        },

        

        layout: {
            padding: 10
        }
    }
});
