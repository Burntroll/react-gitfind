import { Header } from "../../components/Header/Header";
import background from '../../assets/git_logo.svg';
import './styles.css';


function App() {
  return (
    <div>
      <Header />
      <div className="content">
        <img src={background} alt="github logo on background" className="background"/>
        <div className="info">
          <div>
            <input name="usuario" placeholder="@username"/>
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
