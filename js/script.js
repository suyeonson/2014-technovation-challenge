$(document).ready(function() {
    $("input[name='participants']").TouchSpin({
        min: 1,
        max: 200,
        step: 1,
        decimals: 0,
        boostat: 10,
        maxboostedstep: 10
    });

    $("input[name='set-time-hrs']").TouchSpin({
        min: 1,
        max: 48,
        step: 1,
        decimals: 0,
        boostat: 10,
        maxboostedstep: 10,
        postfix: 'hrs'
    });

    $("input[name='set-time-min']").TouchSpin({
        min: 1,
        max: 59,
        step: 5,
        decimals: 0,
        boostat: 10,
        maxboostedstep: 10,
        postfix: 'min'
    });
});