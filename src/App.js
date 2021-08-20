import classes from "./App.module.css";
import UserInput from "./components/UserInput/UserInput";

function App() {
  return (
    <div className={classes.App}>
      <section>
        <UserInput></UserInput>
      </section>
    </div>
  );
}

export default App;
