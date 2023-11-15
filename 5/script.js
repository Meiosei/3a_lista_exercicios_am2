async function listImages(url) {
    const response = await fetch(url);
    const json = await response.json();

    if (!Array.isArray(json)) return null;

    return json.slice(0, 10); // Limita para 100 fotos
  }

  function createCard(image, gallery) {
    const card = document.createElement('div');
    card.classList.add('card');

    const thumbnail = document.createElement('img');
    thumbnail.classList.add('thumbnail');
    thumbnail.src = image.thumbnailUrl;
    thumbnail.alt = image.title;

    thumbnail.addEventListener('click', () => {
      showLightbox(image.url, image.title);
    });

    card.appendChild(thumbnail);
    gallery.appendChild(card);
  }

  function showLightbox(imageUrl, title) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');

    lightboxImage.src = imageUrl;
    lightboxImage.alt = title;
    lightbox.style.display = 'flex';

    lightbox.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
  }

  async function initializeGallery() {
    const images = await listImages('https://jsonplaceholder.typicode.com/photos');
    const gallery = document.getElementById('gallery');

    images.forEach(image => {
      createCard(image, gallery);
    });
  }

  initializeGallery();