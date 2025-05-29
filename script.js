function openImage(element) {
  document.getElementById('fullscreen').style.display = 'flex';
  document.getElementById('fullscreen-img').src = element.src;
}

function closeImage() {
  document.getElementById('fullscreen').style.display = 'none';
}
