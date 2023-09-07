const imagesContainer = document.getElementById('dog-image-container')


const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

const dogImageContainer = document.getElementById('dog-image-container')

document.addEventListener("DOMContentLoaded", function() {
    fetch(imgUrl)
      .then(function(response) {
        return response.json();
      })
      .then((data) => {
            data.forEach(function(imageUrl){
                const img = document.createElement('img')
                img.src = imgUrl;
                imagesContainer.appendChild(img)
            })
      })
      .catch(function(error) {
        console.log("Error fetching images:", error);
      });
  });






console.log('%c HI', 'color: firebrick')
