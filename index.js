const gridContainer = document.getElementById("grid-container");

window.addEventListener("load", async () => {
  const data = await fetchDataFromBackend();

  console.log("data:", data);

  data.forEach((element, index) => {
    console.log(element);

    for (key in element) {
      createGridElement("div", `${key}: ${element[key]}`, index);
    }
  });
});

async function fetchDataFromBackend() {
  // define url and header at the very top of the code
  const url = "http://localhost:5502/api";
  const header = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, header);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    } else {
      const json = await response.json();
      return json;
    }
  } catch (error) {
    console.error(error.message);
  }
}

function createGridElement(HTMLtag, innerText, id) {
  const newElement = document.createElement(HTMLtag);
  newElement.innerText = innerText;
  newElement.classList.add("grid-item");
  newElement.setAttribute("id", id);
  gridContainer.appendChild(newElement);
}
