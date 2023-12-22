$(document).ready(function () {
  $("#customer-carousel").owlCarousel({
    items: 1,
    loop: true,
  });
});

// LOADING

const loading = document.getElementById("loading");

const loadingDuration = 2600; // 2s

setTimeout(() => {
  loading.classList.add("loading-none");
}, loadingDuration);
