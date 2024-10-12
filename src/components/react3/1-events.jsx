const handleClick = (e) => {
  console.log(e);
  console.log("clicked");
};

const Button = () => {
  return (
    <>
      <button onClick={handleClick}>click me</button>
      {/* <button onClick={(e) => console.log("you clicked me")}>click me</button> */}
    </>
  );
};

const Input = () => {
  const handleChange = () => {
    console.log("your entered somthing");
  };

  return (
    <>
      {/* <input type="text" placeholder="write somthing" onChange={handleChange} /> */}
      <input
        type="text"
        placeholder="write somthing"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
    </>
  );
};

function Form() {
  const handleSubmit = (e) => {
    console.log("form submitted");
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button>submit</button>
    </form>
  );
}

function Paragraph() {
  const handleCopyEvent = () => {
    alert("این متن خوردن نداره");
  };

  return (
    <p onCopy={handleCopyEvent} style={{ backgroundColor: "red" }}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
      nesciunt.
    </p>
  );
}

export { Button, Input, Form, Paragraph };
