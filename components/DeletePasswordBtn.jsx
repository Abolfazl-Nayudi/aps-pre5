import { deletePassword } from "../redux/passwordSlice";
import { useDispatch } from "react-redux";

export default function DeletePasswordBtn() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deletePassword());
  };

  return (
    <div>
      <button onClick={handleClick}>delete password</button>
    </div>
  );
}
