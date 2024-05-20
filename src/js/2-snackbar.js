import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const submitBtn = document.querySelector('.button-notification');

function displayMessage(event) {
    event.preventDefault();

    const delay = document.querySelector('input[name=delay]').value;
    const radioButtons = document.querySelector('input[name="state"]:checked').value;

    let promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            if (radioButtons === 'fulfilled') {
                iziToast.success({
                    title: 'Success',
                    message: `Fulfilled promise in ${delay}ms`,
                    position: "topRight",
                    backgroundColor: '#59A10D',
                });
            }
            else {
                iziToast.error({
                    title: 'Error',
                    message: `Rejected promise in ${delay}ms`,
                    position: "topRight",
                    backgroundColor: '#EF4040',
                })
            }

        }, delay);

    });
}

submitBtn.addEventListener('click', displayMessage);