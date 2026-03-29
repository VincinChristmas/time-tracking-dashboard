document.addEventListener('DOMContentLoaded', () => {
    // Get the timeframe buttons
    const dailyBtn = document.querySelector('.report-timeframes p:first-child');
    const weekLyBtn = socument.querySelctor('.report-timeframes p:nth-child(2)');
    const monthLyBtn = document.querySelector('report-timeframes p:last-child');

   
    let dashboardData = [];
    
    // Fetch the JSON data
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            dashboardData = data;
            updateDisplay('weekly'); // Start with weekly view
        })
        .catch(error => console.error('Error loading data:', error));
    
     // Function to update all cards based on selected timeframe
     function updateDisplay(timeframe) { 
         // Loop through each item in the JSON data
         dashboardData.forEach(item => {
            // Get the current and previous hours for this timeframe

         })

     }


});