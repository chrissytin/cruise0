import './App.css';
import LoginButton from './Components/LoginButton';
import Profile from './Components/Profile';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div className="App">
      <div id="app-wrapper">
        {
          isAuthenticated ?
          <div id="profile-wrapper">
            <Profile user={user} isLoading={isLoading} />
          </div> : 
          <>
            <h1>Welcome to our cruise0!</h1>
            <h2>Start your unforgettable journey by logging in and unlocking exclusive deals and breathtaking destinations.</h2>
            <div id="login-wrapper">
              <LoginButton />
            </div>
          </> 
        }
      </div>
    </div>
  );
}

export default App;
