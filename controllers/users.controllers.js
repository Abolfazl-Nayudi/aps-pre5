const { v4: uuid } = require("uuid");

let dataArray = [
  {
    id: "01HVG9RW7RA6HG187FWYE5PTA4",
    first_name: "Van",
    last_name: "Lambrechts",
    email: "vlambrechts1@about.com",
  },
  {
    id: "01HVG9RW7T9R0RASB1WX9NXKZS",
    first_name: "Gun",
    last_name: "Leverich",
    email: "gleverich3@mail.ru",
  },
  {
    id: "01HVG9RW7VYA9BCMPZZ81748N6",
    first_name: "Nolie",
    last_name: "Denty",
    email: "ndenty4@yahoo.com",
  },
  {
    id: "01HVG9RW7VJSBKY6DM5JE8RCVC",
    first_name: "Lolita",
    last_name: "Fenner",
    email: "lfenner5@cornell.edu",
  },
  {
    id: "01HVG9RW7WSVV0EQSSGSWGDZ99",
    first_name: "Nicky",
    last_name: "Coiley",
    email: "ncoiley6@oracle.com",
  },
  {
    id: "01HVG9RW7XJ7GJ08HG8ER0NE9D",
    first_name: "Clementine",
    last_name: "De Clairmont",
    email: "cdeclairmont7@gov.uk",
  },
  {
    id: "01HVG9RW7YVQ9QB2XGV56QBW68",
    first_name: "Aryn",
    last_name: "Dibbs",
    email: "adibbs8@clickbank.net",
  },
  {
    id: "01HVG9RW7ZB0TFF2J4SNSX2270",
    first_name: "Webb",
    last_name: "Jemmett",
    email: "wjemmett9@squidoo.com",
  },
  {
    id: "01HVG9RW7ZHVJVHKZXRNEM2HBJ",
    first_name: "Quinn",
    last_name: "Gavrieli",
    email: "qgavrielia@jugem.jp",
  },
  {
    id: "01HVG9RW80TSR6M7MFWBH8XBD4",
    first_name: "Melisande",
    last_name: "Godridge",
    email: "mgodridgeb@infoseek.co.jp",
  },
  {
    id: "01HVG9RW81E6Z3B1YD0PG6V0E8",
    first_name: "Padraic",
    last_name: "Cowitz",
    email: "pcowitzc@nps.gov",
  },
  {
    id: "01HVG9RW82JZ7QV71WXHCJ5WB8",
    first_name: "Gerhard",
    last_name: "Preuvost",
    email: "gpreuvostd@hugedomains.com",
  },
  {
    id: "01HVG9RW82098ZGGPXK4C1NM08",
    first_name: "Dennison",
    last_name: "O'Canavan",
    email: "docanavane@bravesites.com",
  },
  {
    id: "01HVG9RW83SJFC9C1XY82XNP4M",
    first_name: "Taddeo",
    last_name: "Kubyszek",
    email: "tkubyszekf@twitter.com",
  },
  {
    id: "01HVG9RW84M408SDCWR7AZAZDX",
    first_name: "Ev",
    last_name: "Clulow",
    email: "eclulowg@smh.com.au",
  },
  {
    id: "01HVG9RW855NX6N6TDN9YPZG7A",
    first_name: "Redford",
    last_name: "Concannon",
    email: "rconcannonh@wikimedia.org",
  },
  {
    id: "01HVG9RW86VJ91FECZSXTK3YYV",
    first_name: "Percy",
    last_name: "Plascott",
    email: "pplascotti@usnews.com",
  },
  {
    id: "e92fefa8-0080-42ea-86b7-bc9132588b93",
    first_name: "john",
    last_name: "sina",
    email: "jasem@gmail.com",
  },
];

const getAllUsers = (req, res) => {
  // res.send(data);
  console.log(req.query);
  const limit = parseInt(req.query.limit);

  if (limit) {
    res.status(200).json({
      success: true,
      message: "data found successfully",
      data: dataArray.slice(0, limit),
    });
  } else {
    res.status(200).json({
      success: true,
      message: "data found successfully",
      data: dataArray,
    });
  }
};

const postUser = (req, res) => {
  console.log(req.body);
  const id = uuid();

  const newData = { ...req.body, id };

  dataArray.push(newData);

  res.status(201).json({
    success: true,
    message: "data created successfully",
    data: newData,
  });
};

const getOneUser = (req, res) => {
  const findUser = dataArray.find((userData) => userData.id === req.params.id);
  console.log("searched user ", findUser);

  if (!findUser) {
    res
      .status(404)
      .json({ success: false, message: "user not found", data: "" });
    return;
  }

  res.status(200).json({
    success: true,
    message: "user found successfully",
    data: findUser,
  });
};

const deleteUser = (req, res) => {
  const findUser = dataArray.find((userData) => userData.id === req.params.id);

  if (!findUser) {
    res
      .status(404)
      .json({ success: false, message: "user not found", data: "" });
    return;
  }

  const filteredData = dataArray.filter(
    (userData) => userData.id !== req.params.id
  );

  dataArray = [...filteredData];

  res.status(200).json({
    success: true,
    message: "user deleted successfully",
    data: findUser,
  });
};

const patchUser = (req, res) => {
  const { id } = req.params;

  const specificUser = dataArray.find((userData) => userData.id === id);

  if (!specificUser) {
    res
      .status(404)
      .json({ success: false, message: "user not found", data: "" });
    return;
  }

  const filteredData = dataArray.filter((userData) => userData.id !== id);

  const updatedUser = { ...specificUser, ...req.body };

  filteredData.push(updatedUser);

  dataArray = [...filteredData];

  res.status(200).json({
    success: true,
    message: "user data updated successfully",
    data: updatedUser,
  });
};

module.exports = {
  deleteUser,
  getAllUsers,
  getOneUser,
  patchUser,
  postUser,
};
