document.addEventListener("DOMContentLoaded", function() {
  const imagesContainer = document.getElementById('dog-image-container');

  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

  fetch(imgUrl)
    .then(function(response) {
      return response.json();
    })
    .then((data) => {
      data.message.forEach(function(imageUrl) {
        const img = document.createElement('img');
        img.src = imageUrl;
        imagesContainer.appendChild(img);
      });
    })
    .catch(function(error) {
      console.log("Error fetching images:", error);
    });

    // Challenge 2

    const dogBreedsContainer = document.getElementById('dog-breeds');

    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    let breeds = [];
  fetch(breedUrl)
    .then(function(response) {
      return response.json();
    })
    .then((data) => {
      breeds = data.message;
      for (let breed in breeds) {
        const breedItem = document.createElement('li');
        breedItem.innerText = breed;
        dogBreedsContainer.appendChild(breedItem);
    
        breedItem.addEventListener("click", function() {
          breedItem.style.color = "red"; // You can choose any color of your liking here
        });
      }
    })
    .catch(function(error) {
      console.log("Error fetching images:", error);
    });




    const dropdown = document.getElementById('breed-dropdown');
      dropdown.addEventListener('change', function() {
      const selectedLetter = dropdown.value;
      // Call a function to update the breeds based on the selected letter
      updateBreeds(selectedLetter);
   });

    function updateBreeds(selectedLetter){
      dogBreedsContainer.innerHTML = ''
      for (let breed in breeds){
        if (breed.startsWith(selectedLetter)){
          const breedItem = document.createElement('li');
          breedItem.innerText = breed;
          dogBreedsContainer.appendChild(breedItem);
    
          breedItem.addEventListener("click", function() {
          breedItem.style.color = "red"; // You can choose any color of your liking here
        })
      }
    }
  }
});

console.log('%c HI', 'color: firebrick');