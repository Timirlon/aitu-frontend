document.getElementById("searchButton").addEventListener("click", function() {
  const artistName = document.getElementById("search-bar").value.trim();
  
  if (artistName) {
      fetchArtistInfo(artistName);
  } else {
      alert("Please enter an artist name.");
  }
});

function fetchArtistInfo(artistName) {
  const apiKey = '2'; // Replace with your actual API key
  const apiUrl = `https://www.theaudiodb.com/api/v1/json/${apiKey}/search.php?i=${artistName}`;

  fetch(apiUrl)
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
          if (data.artists && data.artists.length > 0) {
              const artist = data.artists[0];
              displayArtistInfo(artist);
          } else {
              alert("Artist not found.");
          }
      })
      .catch(error => {
          console.error("Error fetching data:", error);
          alert("An error occurred while fetching artist data.");
      });
}

function displayArtistInfo(artist) {
  document.getElementById("artistName").textContent = artist.strArtist;
  
  // Display the artist's image
  const artistImage = artist.strArtistThumb || 'default-image.jpg'; // Default image if not available
  document.getElementById("artistImage").src = artistImage;
  
  // Display the artist's biography if available
  document.getElementById("artistBio").textContent = artist.strBiographyEN || "No biography available.";
  
  // Display the artist's label and style
  document.getElementById("artistLabel").textContent = `Label: ${artist.strLabel || 'N/A'}`;
  document.getElementById("artistStyle").textContent = `Style: ${artist.strStyle || 'N/A'}`;
  
  // Display social media links
  const facebookLink = artist.strFacebook ? `<a href="https://${artist.strFacebook}" target="_blank">Facebook</a>` : 'Facebook not available';
  const twitterLink = artist.strTwitter ? `<a href="https://twitter.com/${artist.strTwitter}" target="_blank">Twitter</a>` : 'Twitter not available';
  document.getElementById("socialMedia").innerHTML = `${facebookLink} | ${twitterLink}`;
}
