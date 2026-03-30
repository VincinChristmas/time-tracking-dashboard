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
            const currentHours = item.timeframes[timeframe].current;
            const previousHours = item.timeframes[timeframe].previous;

            // Set the text for "Yesterday", "Last Week", or "Last Month"
            let periodText = '';
            if (timeframe === 'daily') {
                periodText = 'Yesterday';
            }
            else if (timeframe === 'weekly') {
                periodText = 'Last Week';     
            }
            else if (timeframe === 'monthly') {
                periodText = 'Last Month';
            }

          // Update each card based on its title
          if (item.title === 'Work') {
            const workCard = document.querySelector('.time-tracking-card__toprow--work');
            const hoursElement = workCard.querySelector('.time-tracking-card__toprow--work--data--hours');
            const previousElement = workCard.querySelector('.time-tracking-card__toprow--work--data--title--previoushours');

            hoursElement.textContent = `${currentHours}hrs`;
            previousElement.textContent = `${periodText} - ${previousHours}hrs`;
          }
          else if (item.title === 'Play') {
            const playCard = document.querySelector('.time-tracking-card__toprow--play');
            const hoursElement = playCard.querySelector('.time-tracking-card__toprow--play--data--hours');
            const previousElement = playCard.querySelector('.time-tracking-card__toprow--play--data--title--previoushours');

            hoursElement.textContent = `${currentHours}hrs`;
            previousElement.textContent = `${periodText} - ${previousHours}hrs`;
          }
          else if (item.title === 'Study') {
            const studyCard = document.querySelector('.time-tracking-card__toprow--study');
            const hoursElement = studyCard.querySelector('.time-tracking-card__toprow--study--data--hours');
            const previousElement = studyCard.querySelector('.time-tracking-card__toprow--study--data--title--previoushours');

            hoursElement.textContent = `${currentHours}hrs`;
            previousElement.textContent = `${periodText} - ${previousHours}hrs`;
          }
          else if (item.title === 'Exercise') {
            const exerciseCard = document.querySelector('.time-tracking-card__bottomrow--exercise');
            const hoursElement = exerciseCard.querySelector('.time-tracking-card__bottomrow--exercise--data--hours');
            const previousElement = exerciseCard.querySelector('.time-tracking-card__bottomrow--exercise--data--title--previoushours');

            hoursElement.textContent = `${currentHours}hrs`;
            previousElement.textContent = `${periodText} - ${previousHours}hrs`;
          }
          else if (item.title === 'Social') {
            const socialCard = document.querySelector('.time-tracking-card__bottomrow--social');
            const hoursElement = socialCard.querySelector('.time-tracking-card__bottomrow--social--data--hours');
            const previousElement = socialCard.querySelector('.time-tracking-card__bottomrow--social--data--title--previoushours');

            hoursElement.textContent = `${currentHours}hrs`;
            previousElement.textContent = `${periodText} - ${previousHours}hrs`;
          }
          else if (item.title === 'Self Care') {
            const selfCareCard = document.querySelector('.time-tracking-card__bottomrow--selfcare');
            const hoursElement = selfCareCard.querySelector('.time-tracking-card__bottomrow--selfcare--data--hours');
            const previousElement = selfCareCard.querySelector('.time-tracking-card__bottomrow--selfcare--data--title--previoushours');

            hoursElement.textContent = `${currentHours}hrs`;
            previousElement.textContent = `${periodText} - ${previousHours}hrs`;
          }

          });

          // Update button active states
        // Reset all buttons to default color
        dailyBtn.computedStyleMap.color = '';
        weekLyBtn.style.color = '';
        monthLyBtn.style.color = '';

        // Highlight the active button
     if (timeframe === 'daily') {
        dailyBtn.style.color = 'white'; 
     }
     else if (timefrrame === 'weekly') {
        weekLyBtn.style.color = 'white';
     }
     else if (timeframe === 'monthly') {
        monthLyBtn.style.color = 'white';
     }
     }

     // Add click event listeners to buttons
     dailyBtn.addEventListener('click', () => updateDisplay('daily'));
     weekLyBtn.addEventListener('click', () => updateDisplay('weekly'));
     monthLyBtn.addEventListener('click', () => updateDisplay('monthly'));

     


});