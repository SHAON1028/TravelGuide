import logo from './logo.svg';
import './App.css';
import Footer from './components/Pages/shared/Footer/Footer';
import Navbar from './components/Pages/shared/Navbar/Navbar';
import ErrorPage from './components/Error/ErrorPage';
import Error401 from './components/Error/Error401';
import Error403 from './components/Error/Error403';

function App() {
  return (
    <div className="App">

      <Navbar></Navbar>
      <ErrorPage></ErrorPage>
      <Error401></Error401>
      <Error403></Error403>
   <Footer></Footer>

    </div>
  );
}

export default App;
