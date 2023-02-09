import ToggleFormBtn from './components/Accounts/ToggleFormBtn'
import DashboardContent from './components/Dashboard/DashboardContent'
import UserContext from './context/user-context'

function App() {

  let loggedUser = document.getElementById('username').value

  let content = <DashboardContent />
  if (loggedUser === "AnonymousUser"){
    content = <ToggleFormBtn />
  }
  return (
    <div className="App">
      <UserContext.Provider value={loggedUser}>
        
        <h2>Soberize</h2>
        {content}
      </UserContext.Provider>
        </div>
  );
}

export default App;
