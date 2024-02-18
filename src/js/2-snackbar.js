// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
//імпорт іконок
import errorIcon from '../img/error.svg';
import alertIcon from '../img/alert.svg'
import doneIcon from '../img/done.svg';

//відловлюю кнопки 
const input = document.querySelector('input[type="number"]');
const btnSubmit = document.querySelector('button[type="submit"]');
const ratioFulFilled = document.querySelector('input[value="fulfilled"]');
const ratioRejected = document.querySelector('input[value="rejected"]')

//навішую подію
btnSubmit.addEventListener('click', createNotification);

//обробка
function createNotification(event) {
     //скидання дефолту
    event.preventDefault();
    //перевірка інпута
    if (input.value.trim() === "") {
    iziToast.show({
        backgroundColor: '#FFA000',
        message: 'Please enter a value',
        messageColor:'#FFFFFF',
        position: 'topRight',
        close: false,
        iconUrl: alertIcon,
    });
    return;
    }
    //перевірка чекнутих кнопок
    else if (!ratioFulFilled.checked && !ratioRejected.checked) {
    iziToast.show({
        backgroundColor: '#FFA000',
        message: 'Please select one option',
        messageColor:'#FFFFFF',
        position: 'topRight',
        close: false,
        iconUrl: alertIcon,
    });
    return;
    }
    //присвоєння затримки
    const delay = input.value;
    //присвоєння статуса
    const status = ratioFulFilled.checked || false;
    //обробка кожного промісу окремо
    handlePromise(status, delay);
    
} 

//створення промісу
const makePromise = (status, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status) {
                resolve(`Fulfilled promise in ${delay}ms`);
            } else {
                reject(`Rejected promise in ${delay}ms`);
            }
        }, delay);
    });
};

//обробка промісу
const handlePromise = (status, delay) => {
    makePromise(status, delay)
        .then((result) => {
            iziToast.show({
                backgroundColor: '#59A10D',
                message: result,
                messageColor: '#FFFFFF',
                position: 'topRight',
                close: false,
                iconUrl: doneIcon,
            });
        })
        .catch((error) => {
            iziToast.show({
                backgroundColor: '#EF4040',
                message: error,
                messageColor: '#FFFFFF',
                position: 'topRight',
                close: false,
                iconUrl: errorIcon,
            });
        });
};











//створення проміса
/* 
     let promise = new Promise((resolve, reject) => {
         setTimeout(() => {
             if (ratioFulFilled.checked) {
                 resolve(`Fulfilled promise in ${delay}ms`)
             }
             if (ratioRejected.checked) {
                 reject(`Rejected promise in ${delay}ms`)
             }
             
         }, delay)
     });
     promise.then((result) => {
         iziToast.show({
      backgroundColor: '#59A10D',
      message: `Fulfilled promise in ${delay}ms`,
      messageColor:'#FFFFFF',
      position: 'topRight',
      close: false,
      iconUrl: doneIcon,
});
     }).catch((error) => {
        iziToast.show({
      backgroundColor: '#EF4040',
      message: `Rejected promise in ${delay}ms`,
      messageColor:'#FFFFFF',
      position: 'topRight',
      close: false,
      iconUrl: errorIcon,
});
})
 */
