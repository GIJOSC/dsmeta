import Header from "./components/Header";
import SalesCard from "./components/SalesCard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer />
      <Header />
      <main>
        <section className="sales">
          <div className="dsmeta-container"></div>
          <SalesCard />
        </section>
      </main>
    </>
  );
}

export default App;
