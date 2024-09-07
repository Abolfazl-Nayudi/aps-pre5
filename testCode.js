// create data
//    dataArray.push({ id, first_name, last_name, email });

// delete data
const selectedUser = dataArray.find((user) => user.id === id);

const filteredData = dataArray.filter((user) => user.id !== id);

dataArray = [...filteredData];

// update data

const specificUser = dataArray.find((user) => user.id === id);
const filteredData = dataArray.filter((user) => user.id !== id);

const updatedUser = { ...specificUser, ...req.body };

filteredData.push(updatedUser);

dataArray = [...filteredData];
