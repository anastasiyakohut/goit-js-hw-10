import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const submitBtn = document.querySelector('.button-notification');

function displayMessage(event) {
    event.preventDefault();

    const delay = document.querySelector('input[name=delay]').value;
    const radioButtons = document.querySelector('input[name="state"]:checked').value;

    let promise = new Promise((resolve, reject) => {

        if (radioButtons === 'fulfilled') {
            setTimeout(() => {
                resolve(delay);
                iziToast.success({
                    title: 'Success',
                    message: `Fulfilled promise in ${delay}ms`,
                    position: "topRight",
                    color: "#fff",
                    backgroundColor: '#59A10D',
                });
            }, delay);
        }
        else {
            setTimeout(() => {
                reject(delay);
                iziToast.error({
                    title: 'Error',
                    message: `Rejected promise in ${delay}ms`,
                    position: "topRight",
                    color: "#fff",
                    backgroundColor: '#EF4040',
                });
            });
        }
    });
}

submitBtn.addEventListener('click', displayMessage);