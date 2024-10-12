const ButtonWithProps = ({ name, handler }) => {
  return (
    <>
      <button onClick={handler}>{name}</button>
    </>
  );
};

export default ButtonWithProps;
