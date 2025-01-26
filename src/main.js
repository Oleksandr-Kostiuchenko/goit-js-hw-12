//TODO: Інтерактивна галерея

//* Import libraries
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from "axios";

//* Import modules
import { fetchImg, loadMore } from "./js/pixabay-api";
import { renderGallery } from "./js/render-functions";

//* Find elements
const queryForm = document.querySelector('.user-query-form'); 
const queryInput = document.querySelector('.user-query-input'); 
const queryBtn = document.querySelector('.user-query-btn');
const gallery = document.querySelector('.gallery-list');
const loadMoreBtn = document.querySelector('.load-more-btn');
const pageLoader = document.querySelector('.loader');

//* Function variables 
let userQuery;
let page = 1;
let totalPages;

//* Initializate gallery 
const lightbox = new SimpleLightbox('.gallery-list a', {
    captionSelector: 'img',
    captionsData: 'alt',
    captionDelay: 250,
});

//* On form submit function
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
    pageLoader.classList.remove('is-hidden');
    page = 1;

    const { data } = await fetchImg(userQuery, gallery, queryInput, page);

    pageLoader.classList.add('is-hidden');

    lightbox.refresh();

    totalPages = Math.floor(data.totalHits / 15);
    if (totalPages <= 1) {
        return;
    }
    else if (page <= totalPages) {
        if (page === totalPages) {
                loadMoreBtn.classList.add('is-hidden');
                return;
            }

        loadMoreBtn.classList.remove('is-hidden');
        loadMoreBtn.removeEventListener('click', onLoadMoreClick);
        loadMoreBtn.addEventListener('click', onLoadMoreClick);
    }    
}

//* On load-more-button click function
const onLoadMoreClick = async event => {
    try {
        page++;
        pageLoader.classList.remove('is-hidden');

        const { data } = await loadMore(userQuery, page);

        pageLoader.classList.add('is-hidden');

        if (page > totalPages) {
            iziToast.info({
                title: '',
                titleSize: '25',
                message: "We're sorry, but you've reached the end of search results.",
                messageSize: '20',
                position: 'bottomRight'
            });

            loadMoreBtn.classList.add('is-hidden');
            loadMoreBtn.removeEventListener('click', onLoadMoreClick);
        }

        const galleryTemplate = data.hits.map(el => renderGallery(el)).join('');

        gallery.insertAdjacentHTML('beforeend', galleryTemplate);
        lightbox.refresh();

        const galleryItem = document.querySelector('.gallery-item');
        const rect = galleryItem.getBoundingClientRect()

        window.scrollBy({
            top: rect.height*2,
            left: 0,
            behavior: "smooth",
        });
    } catch (err) {
        iziToast.error({
            title: 'Error',
            titleSize: '25',
            message: 'Something went wrong',
            messageSize: '20',
            position: 'bottomRight'
        });

        console.log(err);
    }
}

queryForm.addEventListener('submit', onFormSubmit);