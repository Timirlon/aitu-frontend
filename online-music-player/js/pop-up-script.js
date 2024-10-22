document.getElementById('openPopup').addEventListener('click', function () {
  document.getElementById('popup').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
});

document.getElementById('closePopup').addEventListener('click', function () {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
});

document.getElementById('overlay').addEventListener('click', function () {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
});