
document.querySelector('.open-chat')?.addEventListener('click', function(e) {
  e.preventDefault();
  if (window.zE) {
    zE('webWidget', 'open');
  }
});
