import "./App.css";
import LoginButton from "./Components/LoginButton";
import LogoutButton from "./Components/LogoutButton";
import Profile from "./Components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated, isLoading, error, } = useAuth0();

  if (error) {
    return (
      <div className="App">
        <div id="error-wrapper">
          <p>Please verify your email to login</p>
          <LogoutButton />
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div id="app-wrapper">
        {isAuthenticated ? (
          <div id="profile-wrapper">
            <Profile user={user} isLoading={isLoading} />
          </div>
        ) : (
          <>
            <h1>Welcome abroad,fellow adventurer!</h1>
            <h2>
              Enter to log in and start planning your dream cruise.
            </h2>
            <div id="login-wrapper">
              <LoginButton />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;