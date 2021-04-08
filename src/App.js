import AOS from 'aos';
import Main from './components/Main'
import './App.css';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

function App() {
  return (
    <div className="App">
    <Main />
    </div>
  );
}

export default App;
