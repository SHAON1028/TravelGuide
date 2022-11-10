import './App.css';
import ScrollToTop from "react-scroll-to-top";
import { RouterProvider } from 'react-router-dom';
import router from './Route/Route';
import { useEffect } from 'react';
import ScrollTop from './components/ScrollTOp/ScrollTop';

function App() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className="">

    
    <RouterProvider router={router}>
    <ScrollToTop smooth />
     </RouterProvider>
   

    </div>
  );
}

export default App;
