//* Import modules
import { renderGallery } from "./render-functions";

//* Import libraries
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

//* Export fecth function
export const fetchImg = (userQuery, gallery, queryInput) => {
    const mainEl = document.querySelector('main');
    mainEl.insertAdjacentHTML('beforeend', `<span class="loader"></span>`)

    const pageLoader = document.querySelector('.loader');

    fetch(`https://pixabay.com/api/?q=${userQuery}&key=39635982-91d856b8fc78635a8aaf79b21&image_type=photo&orientation=horizontal&safesearch=true`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }

            pageLoader.remove();
            gallery.innerHTML = '';
            queryInput.value = '';
            return response.json();
        })
        .then(imagesArr => {
            if (imagesArr.total === 0) {
                iziToast.error({
                    title: 'Error',
                    titleSize: '25',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    messageSize: '15',
                    position: 'bottomRight'
                });
            }

            let galleryHTML = [];
            imagesArr.hits.map(imageEl => {
                galleryHTML.push(renderGallery(imageEl));
            })

            gallery.insertAdjacentHTML('beforeend', galleryHTML.join(' '));
            
            const lightbox = new SimpleLightbox('.gallery-list a', {
                captionSelector: 'img',
                captionsData: 'alt',
                captionDelay: 250,
            });
        })
}