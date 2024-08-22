// https://mockapi.io/
const BASE_URL = "https://66bf9e3242533c403146ab14.mockapi.io";

// GET method
// fetch(`${BASE_URL}/users`)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// --------------------------------------------------
// POST request using fetch()

// fetch(`${BASE_URL}/users`, {
//   method: "POST",
//   body: JSON.stringify({
//     username: "jasem",
//     job: "web developer",
//   }),
//   headers: {
//     "content-type": "application/json" ,
//   },
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// ----------------------------------------------
// PUT request using fetch()

const updateData = async () => {
  const res = await fetch(`${BASE_URL}/users/1`, {
    method: "PUT",
    body: JSON.stringify({
      username: "abod",
    }),
    headers: {
      "content-type": "application/json",
    },
  });

  const data = await res.json();
  console.log(data);
};

// updateData();

// DELETE request using fetch()

const deleteData = async () => {
  try {
    const res = await fetch(`${BASE_URL}/users/5`, {
      method: "DELETE",
    });
    console.log(res);

    if (!res.ok) {
      throw new Error("data not found ");
    }

    // if(res.status < 200 || res.status > 299){
    //     throw new Error('')
    // }

    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

deleteData();
