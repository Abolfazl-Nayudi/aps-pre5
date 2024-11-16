const fetchData = fetch("/user/courses", {
  headers: {
    "content-type": "appication/json",
    Authorization: "token",
  },
});
