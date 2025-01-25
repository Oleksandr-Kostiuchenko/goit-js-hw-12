//TODO: Інтерактивна галерея

//* Import libraries
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import axios from "axios";

//* Import modules
import { fetchImg } from "./js/pixabay-api";
import { renderGallery } from "./js/render-functions";
import { loadMore } from "./js/pixabay-api";

//* Find elements
const queryForm = document.querySelector('.user-query-form'); 
const queryInput = document.querySelector('.user-query-input'); 
const queryBtn = document.querySelector('.user-query-btn');
const gallery = document.querySelector('.gallery-list');
const loadMoreBtn = document.querySelector('.load-more-btn');

let userQuery;
let page = 1;


//* Add event listener & apply modules
const onFormSubmit = async event => {
    event.preventDefault();
    userQuery = queryInput.value.trim();

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

    loadMoreBtn.classList.add('is-hidden');
    page = 1;
    const { data } = await fetchImg(userQuery, gallery, queryInput, page);
    console.log(data);

    if (data.totalHits > 1) {
        loadMoreBtn.classList.remove('is-hidden');
        
        loadMoreBtn.addEventListener('click', onLoadMoreClick)
    }
}

const onLoadMoreClick = async event => {
    page++;
    
    const { data } = await loadMore(userQuery, gallery, queryInput, page);

    const galleryTemplate = data.hits.map(el => renderGallery(el)).join('');

    gallery.insertAdjacentHTML('beforeend', galleryTemplate);

    const lightbox = new SimpleLightbox('.gallery-list a', {
        captionSelector: 'img',
        captionsData: 'alt',
        captionDelay: 250,
    });

    if (data.hits.length === 0) {
        loadMoreBtn.classList.add('is-hidden')
        loadMoreBtn.removeEventListener('click', onLoadMoreClick)
    }
}

queryForm.addEventListener('submit', onFormSubmit);
