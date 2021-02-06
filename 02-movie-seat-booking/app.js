const currentMovie = document.getElementById('movieName');
let currentMovieValue = currentMovie.value;
const seats = document.querySelectorAll('.seat');
const selectedSeats = [];
const selectedSeat = document.getElementById('selected-seat');
const totalPrice = document.getElementById('total-price');
let totalMovieValue = 0;

function countPrice() {
    selectedSeat.textContent = selectedSeats.length;
    totalMovieValue = currentMovieValue * selectedSeats.length;
    totalPrice.textContent = totalMovieValue;
}

currentMovie.addEventListener('change', function () {
    currentMovieValue = parseInt(currentMovie.value);
    countPrice();
});

seats.forEach((seat) => {
    seat.addEventListener('click', function () {
        if (seat.classList.contains('occupied')) {
            return false;
        }
        if (seat.classList.contains('selected')) {
            seat.classList.remove('selected');
            selectedSeats.pop(seat);
        } else {
            seat.classList.add('selected');
            selectedSeats.push(seat);
            localStorage.setItem('selectedSeats', seat);
            console.log(localStorage);
        }
        countPrice();
    });
});
