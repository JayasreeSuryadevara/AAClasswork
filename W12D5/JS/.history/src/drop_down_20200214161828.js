
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator(){
  const dogLinks = [];

  for (let dog in dogs) {

    const dogLi = document.createElement("li");
    const dogLink = document.createElement("a");
    
    dogLink.innerHTML = dog;
    dogLink.href = dogs[dog];

    dogLi.className = `dog-link`;
    dogLi.appendChild(dogLink);

    dogLinks.push(dogLi);

  }

}