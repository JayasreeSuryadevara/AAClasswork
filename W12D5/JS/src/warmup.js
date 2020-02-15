const partyHeader = document.getElementById('party');

const htmlGenerator = (string, htmlElement) => {
  const paragraph = document.createElement("p");

  if (htmlElement.children.length !== 0) {
    Array.from(htmlElement.children).forEach((chl) => {
      htmlElement.removeChild(chl);
    })
  }

  paragraph.innerHTML = string;
  htmlElement.appendChild(paragraph);
};

htmlGenerator('Party Time.', partyHeader);
htmlGenerator('I <3 Vanilla DOM manipulation!', partyHeader);

export default htmlGenerator;