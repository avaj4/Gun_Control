$("path, circle").hover(function(e) {
  $('#info-box').css('display','block');
  $('#info-box').html($(this).data('info'));
});

$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});

$(document).mousemove(function(e) {
  $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
  $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
}).mouseover();

var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if(ios) {
  $('a').on('click touchend', function() {
    var link = $(this).attr('href');
    window.open(link,'_blank');
    return false;
  });
}
var ctx = document.getElementById('canvas').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['West Coast','West In General','Middle America','East In General','East Coast'],
        datasets: [{
            label: 'The Areas Of Where The Mass Shootings are',
            data: [30,10,34,26,29],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
// The type of chart we want to create
type: 'line',

// The data for our dataset
data: {
    labels: ['OH',
      'TX',
      'CA',
      'VA',
      'IL',
      'MD',
      'TN',
      'CO',
      'NV',
      'WA',
      'LA',
      'KS',
      'MI',
      'OR',
      'WI',
      'NY',
      'CT',
      'MN',
      'GA',
      'AZ',
      'UT',
      'MA',
      'AR',
      'SC',
      'IA',
      'NC',
      'KY'],
    datasets: [{
        label: 'Mass Shooting since 1991 to 2019',
        // backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [5,
          11,
          19,
          3,
          16,
          3,
          2,
          6,
          2,
          8,
          1,
          2,
          2,
          2,
          4,
          4,
          3,
          2,
          2,
          1,
          1,
          1,
          1,
          2,
          1,
          2,
          2]
    }]
},

// Configuration options go here
options: {}
});

var ctx = document.getElementById('canvas').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['West Coast','West In General','Middle America','East In General','East Coast'],
        datasets: [{
            label: 'The Areas Of Where The Mass Shootings are',
            data: [30,10,34,26,29],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
