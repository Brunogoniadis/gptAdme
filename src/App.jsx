import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header/Header";
function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Login />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
