// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
//імпорт іконок
import errorIcon from '../img/error.svg'
import doneIcon from '../img/done.svg'

//відловлюю кнопки 
const input = document.querySelector('input[type="number"]');
const btnSubmit = document.querySelector('button[type="submit"]');
const ratioFulFilled = document.querySelector('input[value="fulfilled"]');
const ratioRejected = document.querySelector('input[value="rejected"]')
console.log(input, btnSubmit, ratioFulFilled, ratioRejected)

//навішую подію
//btnSubmit.addEventListener('click', createNotification);

/* function createNotification(event) {
    event.preventDefault();
    const promise = new Promise((res, rej) => {
        const delay=input.value;
        if (ratioFulFilled.cheked) {
            res(`✅ Fulfilled promise in ${delay}ms`)
        }
        if (ratioRejected.cheked) {
            rej(`❌ Rejected promise in ${delay}ms`)
        }
    })
    promise.then((done) => {
        console.log(done);
    }).catch((erorr) => {
        console.log(erorr)
    })
} */