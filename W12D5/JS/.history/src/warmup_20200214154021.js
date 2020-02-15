const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  const paragraph = document.createElement("p");
  paragraph.textContent(string);
  htmlElement.appendChild(paragraph);
};

htmlGenerator('Party Time.', partyHeader);