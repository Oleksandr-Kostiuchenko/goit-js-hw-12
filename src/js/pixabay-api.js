//* Import modules
import { renderGallery } from "./render-functions";

//* Import libraries
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from "axios";

//* Export fetch function
export const fetchImg = async (userQuery, gallery, queryInput, page) => {
    const pageLoader = document.querySelector('.loader');
    pageLoader.classList.remove('is-hidden');

    const galleryData = await axios.get(`https://pixabay.com/api/?q=${userQuery}&key=39635982-91d856b8fc78635a8aaf79b21&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${page}`);

    pageLoader.classList.add('is-hidden');
    gallery.innerHTML = '';
    queryInput.value = '';

    if (galleryData.data.total === 0) {
        iziToast.error({
            title: 'Error',
            titleSize: '25',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            messageSize: '15',
            position: 'bottomRight'
        });
        return;
    }

    let galleryHTML = [];
    galleryData.data.hits.map(imageEl => {
        galleryHTML.push(renderGallery(imageEl));
    });

    gallery.insertAdjacentHTML('beforeend', galleryHTML.join(' '));

    const lightbox = new SimpleLightbox('.gallery-list a', {
        captionSelector: 'img',
        captionsData: 'alt',
        captionDelay: 250,
    });

    return galleryData;
}

//* Export Load more function
export const loadMore = async (userQuery, page) => {
    const pageLoader = document.querySelector('.loader');
    pageLoader.classList.remove('is-hidden');

    const galleryData = await axios.get(`https://pixabay.com/api/?q=${userQuery}&key=39635982-91d856b8fc78635a8aaf79b21&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${page}`);

    pageLoader.classList.add('is-hidden');

    return galleryData;
}