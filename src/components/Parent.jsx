import Child from "./Child";

const users = [
  {
    firstName: "jafar",
    email: "jafar@gmail.com",
    password: "jafar",
  },
  {
    firstName: "jasem",
    email: "jasem@gmail.com",
    password: "jasem",
  },
  {
    firstName: "hantoosh",
    email: "hantoosh@gmail.com",
    password: "hantoosh",
  },
  {
    firstName: "john",
    email: "john@gmail.com",
    password: "john",
  },
];

const Parent = () => {
  return (
    <>
      {users.map((user) => {
        return (
          <Child
            key={user.firstName}
            firstName={user.firstName}
            email={user.email}
            password={user.password}
          />
        );
      })}
    </>
  );
};
