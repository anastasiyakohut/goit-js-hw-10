import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

function displayMessage(event) {
    event.preventDefault();

    const delay = document.querySelector('input[name=delay]').value;
    const radioButtons = document.querySelector('input[name="state"]:checked').value;

    let promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            if (radioButtons === 'fulfilled') {
                resolve(delay);
            }
            else {
                reject(delay);
            }
        }, delay)
    });

    promise
        .then(delay => {
            iziToast.success({
                title: 'Success',
                message: `Fulfilled promise in ${delay}ms`,
                position: "topRight",
                color: "#fff",
                backgroundColor: '#59A10D',
            });
        })
        .catch(delay => {
            iziToast.error({
                title: 'Error',
                message: `Rejected promise in ${delay}ms`,
                position: "topRight",
                color: "#fff",
                backgroundColor: '#EF4040',
            });
        })
}

form.addEventListener('submit', displayMessage);