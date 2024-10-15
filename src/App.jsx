import { Route, Routes } from "react-router-dom";

import HomePage from "./Pages/Home/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import Footer from "./Component/Footer";
import AuthScreen from "./Pages/Home/AuthScreen";
// import HomeScreen from "./Pages/Home/HomeScreen"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/authscreen" element={<AuthScreen />}></Route>
      </Routes>
      {/* <HomeScreen/> */}
      <Footer />
    </>
  );
}

export default App;
