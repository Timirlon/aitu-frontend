document.querySelectorAll('.music').forEach(question => {
  question.addEventListener('click', function () {
      let content = this.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});