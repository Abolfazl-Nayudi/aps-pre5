function fakeRequest(url) {
  return new Promise((resolve, reject) => {
    const randomNum = Math.floor(Math.random() * 4500 + 500);
    console.log(randomNum);
    setTimeout(() => {
      if (randomNum < 3000) {
        resolve(`resolved data for url ${url}`);
      } else {
        reject(`faild to get the data from ${url}`);
      }
    }, 2000);
  });
}

fakeRequest("yelp.com/api/coffee/page1")
  .then((data) => {
    console.log(data);

    // fakeRequest().then().catch()
    return fakeRequest("yelp.com/api/coffee/page2");
  })
  .then((data) => {
    console.log(data);

    return fakeRequest("yelp.com/api/coffee/page3");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

fakeRequest("yelp.com/api/coffee/page1")
  .then((data) => fakeRequest("yelp.com/api/coffee/page2"))
  .then((data) => fakeRequest("yelp.com/api/coffee/page3"))
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
