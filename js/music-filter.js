document.addEventListener('DOMContentLoaded', function() {
  const hipHopFilterButton = document.querySelector('.hip-hop-filter');
  const allArtists = document.querySelectorAll('.artist-list li');
  const nonHipHopArtists = document.querySelectorAll('.artist-list li:not(.hip-hop)');

  const activeColor = 'rgb(165, 190, 248)';

  
  if (localStorage.getItem('hipHopFilter') === 'active') {
      nonHipHopArtists.forEach(artist => artist.style.display = 'none');
      hipHopFilterButton.classList.add('filtered');
      hipHopFilterButton.style.backgroundColor = activeColor;
  }

  
  hipHopFilterButton.addEventListener('click', function() {
      if (hipHopFilterButton.classList.contains('filtered')) {
          nonHipHopArtists.forEach(artist => artist.style.display = '');
          hipHopFilterButton.classList.remove('filtered');
          hipHopFilterButton.style.backgroundColor = '';  //default color
          localStorage.removeItem('hipHopFilter');
      } else {
          nonHipHopArtists.forEach(artist => artist.style.display = 'none');
          hipHopFilterButton.classList.add('filtered');
          hipHopFilterButton.style.backgroundColor = activeColor;
          localStorage.setItem('hipHopFilter', 'active');
      }
  });
});

