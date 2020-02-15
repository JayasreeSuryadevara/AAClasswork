const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  const paragraph = document.createElement("p");
  paragraph.innerHTML = string;
  htmlElement.appendChild(paragraph);
};

htmlGenerator('Party Time.', partyHeader);
htmlGenerator('I <3 Vanilla DOM manipulation!', partyHeader);