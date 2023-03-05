let currentBannerImageIndex = 0;
const bannerImages = document.querySelectorAll('.banner-image');
setInterval(() => {
  bannerImages.forEach((image, index) => {
    if (index === currentBannerImageIndex) {
      image.classList.remove('banner-image-hidden');
    } else {
      image.classList.add('banner-image-hidden');
    }
  });

  currentBannerImageIndex = (currentBannerImageIndex + 1) % 3;
}, 4000);
