// LOADING

const loading = document.getElementById("loading");

const loadingDuration = 2600; // 2s

setTimeout(() => {
  loading.classList.add("loading-none");
}, loadingDuration);
