const kuupaev1 = new Date("Dec 24, 2019 00:00:00").getTime();
const asukoht1 = "aeg1";

const kuupaev2 = new Date("Nov 29, 2019 18:00:00").getTime();
const asukoht2 = "aeg2";

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
        }
    }, 1000);
}

taimer(kuupaev1, asukoht1)
taimer(kuupaev2, asukoht2)

function nupp1() {
    var kuupaev = new Date("Dec 23, 2019 00:00:00").getTime();
    var asukoht = "nupp1"
    taimer(kuupaev, asukoht)
}

function nupp2() {
    let kuupaev = new Date("Dec 24, 2019 00:00:00").getTime();
    var asukoht = "nupp2"
    taimer(kuupaev, asukoht)
}

function nupp3() {
    let kuupaev = new Date("Dec 25, 2019 00:00:00").getTime();
    var asukoht = "nupp3"
    taimer(kuupaev, asukoht)
}
