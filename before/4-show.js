// http://api.tvmaze.com/search/shows

// search form and make request to tvmaze and render the images

const formElement = document.querySelector("#searchForm");

formElement.addEventListener("submit", async (e) => {
  e.preventDefault();
  const queryInput = e.target.jasem;
  const res = await fetch(
    `http://api.tvmaze.com/search/shows?q=${queryInput.value}`
  );
  const data = await res.json();
  renderImages(data);

  queryInput.value = "";
});

const renderImages = (tvData) => {
  tvData.forEach((item) => {
    if (item.show.image) {
      console.log(item.show.image.medium);

      const imgEl = document.createElement("img");
      imgEl.src = item.show.image.medium;
      document.body.append(imgEl);
    }
  });
};

// -----------------------------------------
// using axios

const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  const res = await axios.get(`http://api.tvmaze.com/search/shows`, {
    params: { q: searchTerm },
  });
  makeImages(res.data);
  form.elements.query.value = "";
});

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
