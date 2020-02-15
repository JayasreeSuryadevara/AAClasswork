
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

    dogLi.className = `dog-link dog-link-hidden`;
    dogLi.appendChild(dogLink);

    dogLinks.push(dogLi);
  }
  return dogLinks;
}

function attachDogLinks(){
    const dogLinks = dogLinkCreator();

    const dogsUl = Array.from(document.getElementsByClassName("drop-down-dog-list"));

    dogLinks.forEach( el => {
      dogsUl[0].appendChild(el);
    });
    
    const hoverList = Array.from(document.getElementsByClassName("drop-down-dog-nav"));
    hoverList.forEach( el => {
      el.addEventListener("mouseover", () => {console.log("Hover");});
    });

}

attachDogLinks();
