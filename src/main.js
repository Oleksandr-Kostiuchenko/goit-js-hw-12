//TODO: Інтерактивна галерея

//* Import libraries
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

//* Import modules
import { fetchImg } from "./js/pixabay-api";

//* Find elements
const queryForm = document.querySelector('.user-query-form'); 
const queryInput = document.querySelector('.user-query-input'); 
const queryBtn = document.querySelector('.user-query-btn');
const gallery = document.querySelector('.gallery-list');

//* Add event listener & apply modules
const onFormSubmit = event => {
    event.preventDefault();
    const userQuery = queryInput.value.trim();

    if (userQuery === '') {
        iziToast.error({
            title: 'Error',
            titleSize: '25',
            message: 'Please fill the gap!',
            messageSize: '20',
            position: 'bottomRight'
        });

        return;
    }

    fetchImg(userQuery, gallery, queryInput);
}

queryForm.addEventListener('submit', onFormSubmit);