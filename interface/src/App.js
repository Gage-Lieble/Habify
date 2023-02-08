import ToggleFormBtn from './components/Accounts/ToggleFormBtn'
import DashboardContent from './components/Dashboard/DashboardContent'
import DayLogger from './components/Dashboard/Logger/DayLogger'
function App() {

  let loggedUser = document.getElementById('username').value

  let content = <DashboardContent loggedUser={loggedUser} />
  if (loggedUser === "AnonymousUser"){
    content = <ToggleFormBtn />
  }
  return (
    <div className="App">
     <h2>Soberize</h2>
     <DayLogger user={loggedUser}/>
     {content}
    </div>
  );
}

export default App;
