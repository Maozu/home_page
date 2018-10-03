var data = new Date;
var hour = data.getHours();
var month = data.getMonth();
var day = data.getDate();
var week = data.getDay();
var greet = new Vue({
    el: '#greet',
    data: {
        message: 'Nice To Meet You, Maozu!'
    }
});

var seed = Math.round(Math.random()*10);

if(hour === 23||hour <= 4) {
    var morningword = new Array(4);
    morningword[0] = 'Sleep Well, Maozu';
    morningword[1] = 'Take Care Of Yourself';
    morningword[2] = 'Sweetie!!';
    morningword[3] = 'Watch out, Maozu';
    seed = Math.floor(Math.random()*4);
    greet.message = morningword[seed];
}
else if(hour <= 9) {
    var daybreak = new Array(5);
    daybreak[0] = 'Good Morning, Maozu';
    daybreak[1] = 'Morning, Sunshine~';
    daybreak[2] = 'Good Day';
    daybreak[3] = 'Take Care Of Yourself';
    daybreak[4] = 'I Love You, Maozu';
    seed = Math.floor(Math.random()*5);
    greet.message = daybreak[seed];
}
else if(hour <= 12) {
    greet.message = 'Rise And Shine, Sleepyhead';
}
else if(hour <= 19) {
    greet.message = 'Good Afternoon, Maozu';
}
else {
    var night = new Array(3);
    night[0] = 'Good Evening, Maozu';
    night[1] = 'Nighty, night';
    night[2] = 'すすすす、すき、だあいすき';
    seed = Math.floor(Math.random()*3);
    greet.message = night[seed];
}
if(month === 12) {
    seed = Math.floor(Math.random()*2);
    if(seed) {
        greet.message = 'Stay Warm, Darling';
    }
}

