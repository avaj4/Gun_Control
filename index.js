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
