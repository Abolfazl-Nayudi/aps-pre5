const BASE_URL = "https://66bf9e3242533c403146ab14.mockapi.io";

const getData = async () => {
  const res = await axios.get(`${BASE_URL}/users`);
  console.log(res.data);
};

// getData();

const userData = {
  username: "hantoosh",
  job: "senior game developer",
};

const postData = async () => {
  const res = await axios.post(`${BASE_URL}/users`, userData, {
    headers: {
      "content-type": "application/json",
    },
  });
  console.log(res);
  console.log(res.data);
};

postData();
