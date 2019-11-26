// Set the date we're counting down to
const taimer1 = new Date("Dec 24, 2019 00:00:00").getTime();
const taimer2 = new Date("Nov 29, 2019 18:00:00").getTime();


const x = setInterval(function() {
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance1 = taimer1 - now;
  let distance2 = taimer2 - now;

  // Time calculations for days, hours, minutes and seconds
  let days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
  let hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
  let seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);

  let days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  let hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  let seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

  // Display the result in the element
  document.getElementById("aeg1").innerHTML = days1 + " päeva " + hours1 + " tundi " + minutes1 + " minutit " + seconds1 + " sekundit ";
  document.getElementById("aeg2").innerHTML = days2 + " päeva " + hours2 + " tundi " + minutes2 + " minutit " + seconds2 + " sekundit ";

  // If the count down is finished, write some text
  if (distance1 < 0) {
    clearInterval(x);
    document.getElementById("aeg1").innerHTML = "...";
  }
  if (distance2 < 0) {
    clearInterval(x);
    document.getElementById("aeg2").innerHTML = "...";
  }
}, 1000);

