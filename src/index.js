import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchForm = document.getElementById('search-form');
const input = searchForm.querySelector('input');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '35608601-7cda014b012f6d1bf4756c5e4';
const options = {
  params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page: 1,
    q: '',
  },
};
let totalHits = 0;
let isLoadingMore = false;
let reachedEnd = false;

searchForm.addEventListener('submit', onSearch);
window.addEventListener('scroll', onScroll);
document.addEventListener('DOMContentLoaded', hideLoader);

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}

function renderGallery(hits) {
  const markup = hits
    .map(item => {
      return `
            <a href="${item.largeImageURL}" class="lightbox">
                <div class="photo-card">
                    <img src="${item.webformatURL}" alt="${item.tags}" loading="lazy" />
                    <div class="info">
                        <p class="info-item">
                            <b>Likes</b>
                            ${item.likes}
                        </p>
                        <p class="info-item">
                            <b>Views</b>
                            ${item.views}
                        </p>
                        <p class="info-item">
                            <b>Comments</b>
                            ${item.comments}
                        </p>
                        <p class="info-item">
                            <b>Downloads</b>
                            ${item.downloads}
                        </p>
                    </div>
                </div>
            </a>
            `;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  if (options.params.page * options.params.per_page >= totalHits) {
    if (!reachedEnd) {
      Notify.info("We're sorry, but you've reached the end of search results.");
      reachedEnd = true;
    }
  }
  const lightbox = new SimpleLightbox('.lightbox', {
    captionsData: 'alt',
    captionDelay: 250,
    enableKeyboard: true,
    showCounter: false,
    scrollZoom: false,
    close: false,
  });
  lightbox.refresh();
}

async function loadMore() {
  isLoadingMore = true;
  options.params.page += 1;
  try {
    showLoader();
    const response = await axios.get(BASE_URL, options);
    const hits = response.data.hits;
    renderGallery(hits);
  } catch (error) {
    Notify.failure(error);
    hideLoader();
  } finally {
    hideLoader();
    isLoadingMore = false;
  }
}

function onScroll() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  const scrollThreshold = 300;
  if (
    scrollTop + clientHeight >= scrollHeight - scrollThreshold &&
    gallery.innerHTML !== '' &&
    !isLoadingMore &&
    !reachedEnd
  ) {
    loadMore();
  }
}

async function onSearch(event) {
  event.preventDefault();
  options.params.q = input.value;
  if (options.params.q === '') {
    return;
  }
  options.params.page = 1;
  gallery.innerHTML = '';
  reachedEnd = false;
  try {
    showLoader();
    const response = await axios.get(BASE_URL, options);
    totalHits = response.data.totalHits;
    const hits = response.data.hits;
    Notify.success(`Hooray! We found ${totalHits} images.`);
    if (hits.length === 0) {
      Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.',
      );
    } else {
      renderGallery(hits);
    }
    input.value = '';
    hideLoader();
  } catch (error) {
    Notify.failure(error);
    hideLoader();
  }
}
