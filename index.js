var data = new Date;
var hour = data.getHours();
var month = data.getMonth();
var day = data.getDate();
var week = data.getDay();
var greet = new Vue({
    el: '#greet',
    data: {
        message: 'Nice To Meet You'
    }
});

var seed = Math.round(Math.random()*10);

if(hour === 23||hour <= 4) {
    var morningword = new Array(4);
    morningword[0] = 'xxxxxxxx';
    morningword[1] = 'xxxxxxxx';
    morningword[2] = 'xxxxxxxx';
    morningword[3] = 'xxxxxxxx';
    seed = Math.floor(Math.random()*4);
    greet.message = morningword[seed];
}
else if(hour <= 9) {
    var daybreak = new Array(5);
    daybreak[0] = 'xxxxxxxx';
    daybreak[1] = 'xxxxxxxx';
    daybreak[2] = 'xxxxxxxx';
    daybreak[3] = 'xxxxxxxx';
    daybreak[4] = 'xxxxxxxx';
    seed = Math.floor(Math.random()*5);
    greet.message = daybreak[seed];
}
else if(hour <= 12) {
    greet.message = 'xxxxxxxx';
}
else if(hour <= 19) {
    greet.message = 'xxxxxxxx';
}
else {
    var night = new Array(3);
    night[0] = 'xxxxxxxx';
    night[1] = 'xxxxxxxx';
    night[2] = 'xxxxxxxx';
    seed = Math.floor(Math.random()*3);
    greet.message = night[seed];
}
if(month === 12) {
    seed = Math.floor(Math.random()*2);
    if(seed) {
        greet.message = 'xxxxxxxx';
    }
}

