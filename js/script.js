
$(document).ready(function () {
    $('#fullpage').fullpage({
        sectionsColor: ['lightcoral', 'lightcoral', 'lightcoral'],
        navigation: true,
        navigationPosition: 'right',
        afterLoad: function (origin, destination, direction) {

            if (destination.index == 0) {
                anime({
                    targets: '.section1 *',
                    translateY: [20, 0],
                    opacity: [0, 1],
                    easing: 'easeInOutQuad',
                    duration: 800,
                    delay: anime.stagger(100),
                });
            }

            if (destination.index == 1) {
                anime({
                    targets: '.section2 *',
                    translateY: [20, 0],
                    opacity: [0, 1],
                    easing: 'easeInOutQuad',
                    duration: 800,
                    delay: anime.stagger(100),
                });
            }

            if (destination.index == 2) {
                anime({
                    targets: '.section3 *',
                    translateY: [20, 0],
                    opacity: [0, 1],
                    easing: 'easeInOutQuad',
                    duration: 800,
                    delay: anime.stagger(100),
                });
            }
        },
    });

    anime({
        targets: '.cases-count',
        innerHTML: [0, 257510],
        easing: 'linear',
        round: 1,
        duration: 10000
    });

    anime({
        targets: '.new-count',
        innerHTML: [0, 2030],
        easing: 'linear',
        round: 1,
        duration: 10000
    });

    anime({
        targets: '.discharged-count',
        innerHTML: [0, 2275],
        easing: 'linear',
        round: 1,
        duration: 10000
    })

});


$('#polyTable').DataTable({
    pageLength: 5,
});

const labels = [
    'Dec 1',
    'Dec 2',
    'Dec 3',
    'Dec 4',
    'Dec 5',
    'Dec 6',
    'Dec 7',
    'Dec 8',
    'Dec 9',
    'Dec 10',
    'Dec 11',
    'Dec 12',
    'Dec 13',
    'Dec 14',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Daily Cases (past 2 weeks)',
        backgroundColor: '#ffffff',
        borderColor: '#000000',
        data: [1134, 1056, 986, 771, 756, 721, 654,
            742, 689, 512, 455, 376, 244, 103],
        color: '#ffffff'
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            x: {
                ticks: {
                    color: '#000000'
                }
            },
            y: {
                ticks: {
                    color: '#000000'
                }
            }
        }
    }
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

tippy('.hotspot', {
    content: function (reference) {
    },
});

tippy('.hotspot', {
    placement: 'right',
    trigger: 'click',
    interactive: true,
    content: '<strong>Bolded <span style="color: aqua;">content</span></strong>',
    allowHTML: true,
    delay: 500,
    followCursor: true
});
