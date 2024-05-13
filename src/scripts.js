document.addEventListener('DOMContentLoaded', function () {
  const popupLinks = document.querySelectorAll('.popup-link');
  popupLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const popup = this.parentElement.querySelector('.popup')
      popup.style.display = 'block';
      document.querySelector('.img-overlay').style.display = 'block'
    });
  });

  const closePopupBtns = document.querySelectorAll('.close-popup');
  closePopupBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const popup = this.parentElement.parentElement.querySelector('.popup')
      popup.style.display = 'none';
      document.querySelector('.img-overlay').style.display = 'none'
    });
  });

  document.querySelector('.img-overlay').addEventListener('click', function () {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(function (popup) {
      popup.style.display = 'none';
    });
    this.style.display = 'none'
  });
});
