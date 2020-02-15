const partyHeader = document.getElementById('party');

const htmlGenerator = (string, htmlElement) => {
  const paragraph = document.createElement("p");
  paragraph.innerHTML = string;
  htmlElement.appendChild(paragraph);
};

htmlGenerator('Party Time.', partyHeader);
htmlGenerator('I <3 Vanilla DOM manipulation!', partyHeader);

export default htmlGenerator;