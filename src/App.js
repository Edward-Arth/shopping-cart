import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import ProductPage from "./components/ProductPage";

const App = () => {
  return (
    <div id="appCon">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/shop" element={<ProductPage />}/>
        {/*<Route path="/cart" element={<CartDisplay />} />*/}
      </Routes>
    </div>
  )
}

export default App;