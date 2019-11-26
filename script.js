const kuupaev = [
    "Dec 24, 2019 00:00:00",
    "Nov 29, 2019 18:00:00",
    "Dec 23, 2019 00:00:00",
    "Dec 24, 2019 00:00:00",
    "Dec 25, 2019 00:00:00",
    "Dec 26, 2019 00:00:00",
    "Dec 31, 2019 00:00:00",
    "Jan 01, 2020 00:00:00"
]
const idElement = [
    "aeg1",
    "aeg2",
    "nupp1",
    "nupp2",
    "nupp3",
    "nupp4",
    "nupp5",
    "nupp6"
]
const spinner = document.createElement('div');
spinner.className = 'spinner-border';

function taimer(kuupaev, asukoht) {
    const x = setInterval(function () {
        let praegu = new Date().getTime();
        let kaugus = kuupaev - praegu;
        let days = Math.floor(kaugus / (1000 * 60 * 60 * 24));
        let hours = Math.floor((kaugus % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((kaugus % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((kaugus % (1000 * 60)) / 1000);
        document.getElementById(asukoht).innerHTML = days + " päeva " + hours + " tundi " + minutes + " minutit " + seconds + " sekundit ";
        if (kaugus < 0) {
            clearInterval(x);
            document.getElementById(asukoht).innerHTML = "...";
        };
    }, 1000);
};


function kutsuTimer(x, y) {
    const kuupaev = new Date(x).getTime();
    const asukoht = y;
    document.getElementById(asukoht).innerHTML = "";
    document.getElementById(asukoht).appendChild(spinner);
    taimer(kuupaev, asukoht)
}

kutsuTimer(kuupaev[0], idElement[0]);
kutsuTimer(kuupaev[1], idElement[1]);
