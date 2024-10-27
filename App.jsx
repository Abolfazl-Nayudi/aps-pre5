import { useState } from "react";
import DeletePasswordBtn from "./components/DeletePasswordBtn";
import EditPasswordForm from "./components/EditPasswordForm";
import GeneratePasswordBtn from "./components/GeneratePasswordBtn";
import MatchPasswordForm from "./components/MatchPasswordForm";
import PasswordList from "./components/PasswordList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section style={{ display: "flex", justifyContent: "space-around" }}>
        <GeneratePasswordBtn />
        <MatchPasswordForm />
      </section>
      <section
        style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}
      >
        <PasswordList />
        <DeletePasswordBtn />
      </section>

      <section>
        <EditPasswordForm />
      </section>
    </>
  );
}

export default App;
