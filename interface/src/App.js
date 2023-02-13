import ToggleFormBtn from './components/Accounts/ToggleFormBtn'
import DashboardContent from './components/Dashboard/DashboardContent'
import ShopContent from './components/Shop/ShopContent'
import UserContext from './context/user-context'

function App() {

  let loggedUser = document.getElementById('username').value
  let content = <DashboardContent />
  if (loggedUser === "AnonymousUser"){
    content = <ToggleFormBtn />
  }
  return (
    <div className="App">
      <UserContext.Provider value={{user:loggedUser}}>
        {content}
      <ShopContent />
      </UserContext.Provider>
        </div>
  );
}

export default App;
