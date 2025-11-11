const galleryImages = document.querySelectorAll('.gallery img');
    const lightbox = document.getElementById('lightbox');
    const previewImg = document.getElementById('previewImg');
    const closeBtn = document.getElementById('closeBtn');

    galleryImages.forEach(img => {
      img.addEventListener('click', () => {
        previewImg.src = img.src;
        lightbox.classList.add('active');
      });
    });

    closeBtn.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target !== previewImg) {
        lightbox.classList.remove('active');
      }
    });