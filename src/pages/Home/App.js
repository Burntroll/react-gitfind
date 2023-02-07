import { Header } from "../../components/Header/Header";
import background from "../../assets/git_logo.svg";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { ProfileBox } from "../../components/ProfileBox/ProfileBox";
import { RepList } from "../../components/RepList/RepList";
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
          <ProfileBox />
          <hr />
          <div>
            <h3 className="repository">Repositories</h3>
            <RepList 
              title="Repository Name" 
              description="Tudo descrito"
            />
            <RepList 
              title="Repository Name" 
              description="Tudo descrito"
            />
            <RepList 
              title="Repository Name" 
              description="Tudo descrito"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
