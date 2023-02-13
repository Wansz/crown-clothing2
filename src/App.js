import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.components";
import Navbar from "./routes/navbar/Navbar.components";
import Authentication from "./routes/authetication/authentication.components";




const Shop = () => {
  return <h1>I am the shop page</h1>
}

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>

    </Routes>

  )
};


export default App;
