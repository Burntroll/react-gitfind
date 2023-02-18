import { Header } from "../../components/Header/Header";
import { useState } from "react";
import background from "../../assets/git_logo.svg";
import { RepList } from "../../components/RepList/RepList";
import "./styles.css";

function App() {

  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`)
    const newUser = await userData.json();

    if(newUser.name) {
      const {avatar_url, name, bio, login} = newUser;
      setCurrentUser({avatar_url, name, bio, login})

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();

      if (newRepos.length) {
        setRepos(newRepos);
      }
    }

  }
  return (
    <div>
      <Header />
      <div className="content">
        <img
          src={background}
          alt="github logo on background"
          className="background"
        />
        <div className="info">
          {/* SEARCH BAR */}
          <div className="searchBar">
          <input 
            name="usuario" 
            placeholder="@username"
            value={user}
            onChange={event => setUser(event.target.value)}
          />
          <button onClick={handleGetData}>Search</button>
          </div>
          {/* PROFILE SECTION */}
          {currentUser?.name ?
            (<> 
              <div className="profile__box">
                <img
                  src={currentUser.avatar_url}
                  className="profile"
                  alt="user's profile"
                />
                <div>
                  <h3>{currentUser.name}</h3>
                  <span>@{currentUser.login}</span>
                  <p>{currentUser.bio}</p>
                </div>
              </div>
              <hr />
            </>)
          : null }
          {/* REPOSITORY SECTION */}
          {repos?.length ? (
          <div>
            <h3 className="repository">Repositories</h3>
            {repos.map((repo) => (
              <RepList 
                title={repo.name} 
                description={repo.description}
              />
              ))}
          </div>
          )
          : null}
        </div>
      </div>
    </div>
  );
}

export default App;
