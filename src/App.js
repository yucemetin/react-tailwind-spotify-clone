import Footer from "components/Footer";
import Content from "components/Content";
import Sidebar from "components/Sidebar";
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
