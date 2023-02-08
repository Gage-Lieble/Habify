import SignUpForm from "./components/Accounts/SignUpForm";
import LoginForm from "./components/Accounts/LoginForm";
import ToggleFormBtn from './components/Accounts/ToggleFormBtn'

function App() {

  let loggedUser = document.getElementById('username').value

  let content = <a href="/api/logout/">Logout {loggedUser}</a>
  if (loggedUser === "AnonymousUser"){
    content = <ToggleFormBtn />
  }
  return (
    <div className="App">
     <h2>Soberize</h2>
     {content}
    </div>
  );
}

export default App;
