import { Header } from "../../components/Header/Header";
import background from "../../assets/git_logo.svg";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import "./styles.css";

function App() {
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
          <SearchBar />
          <div className="profile__box">
            <img
              src="https://avatars.githubusercontent.com/u/86578873?v=4"
              className="profile"
              alt="user's profile"
            />
            <div>
              <h3>Francisco Silva</h3>
              <span>@Burntroll</span>
              <p>I'm a Front End Developer and a DevOps Engineer from Brazil, and currently living abroad.</p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default App;
