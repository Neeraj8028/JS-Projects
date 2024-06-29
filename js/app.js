const end_Date = "01 July 2024 14:11"

document.getElementById('end_Date').innerHTML = end_Date;
const inputs = document.querySelectorAll('input')
function timer() {
    const end = new Date(end_Date);
    const now = new Date();

    const diff = (end - now) / 1000;

    // console.log(days)
    const days = Math.floor(diff / (3600 * 24));
    const hours = Math.floor((diff % (3600 * 24)) / 3600);
    const minutes = Math.floor((diff % 3600) / 60);
    const seconds = Math.floor(diff % 60);

    inputs[0].value = days;
    inputs[1].value = hours;
    inputs[2].value = minutes;
    inputs[3].value = seconds;
}
timer()

setInterval(() => {
    timer()

}, 1000);