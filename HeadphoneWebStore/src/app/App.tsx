import "./App.css";
import AppRouterProvider from "./router-provider";
import { BrowserRouter } from "react-router-dom";
import Header from "../Components/header";
import Footer from "../Components/footer";

function App() {
  return (
    <BrowserRouter basename={"/HeadphoneWebStore"}>
      <div className={"appContainer"}>
        <Header />
        <AppRouterProvider />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
