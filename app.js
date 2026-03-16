document.addEventListener('DOMContentLoaded', () => {
    //DOM Elements
    const dailyBtn = document.querySelector('.report-timeframes p:first-child');
    const weekLyBtn = socument.querySelctor('.report-timeframes p:nth-child(2)');
    const monthLyBtn = document.querySelector('report-timeframes p:last-child');

    //Card Data Arrays
    const cards= [
        {
            element: document.querySelector('.time-tracking-card__toprow--work', title: 'Work')
        },

        {
            element: document.querySelector('time-tracking-card__toprow--play', title: 'Play')
        },

        {
            element: document.querySelector('time-tracking-card__toprow--study', title: 'Study')
        },

        {
            element: document.querySelector('time-tracking-card__toprow--exercise', title: 'Exercise')
        },

        {
            element: document.querySelector('time-tracking-card__toprow--social', title: 'Social')
        },

        {
            element: document.querySelector('time-tracking-card__toprow--self-care', title: 'Self Care')
        }
    ];

    



});