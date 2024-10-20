import DeletePasswordBtn from "./components/DeletePasswordBtn";
import GeneratePasswordBtn from "./components/GeneratePasswordBtn";
import MatchPasswordForm from "./components/MatchPasswordForm";
import PasswordList from "./components/PasswordList";

function App() {
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
    </>
  );
}

export default App;
