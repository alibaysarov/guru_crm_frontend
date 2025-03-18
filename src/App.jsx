import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/Login/index.jsx";
import RegisterPage from "./pages/Register/index.jsx";
import MainPage from "./pages/Main/index.jsx";
import Layout from "./components/Layout/index.jsx";
import { CssBaseline } from "@mui/material";
import Groups from "./pages/Groups/index.jsx";
import Users from "./pages/Users/index.jsx";
import Messages from "./pages/Messages/index.jsx";
import Tags from "./pages/Tags/index.jsx";
function App() {

  return (
    <BrowserRouter>
        <CssBaseline/>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<MainPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="groups" element={<Groups />} />
                <Route path="users" element={<Users />} />
                <Route path="messages" element={<Messages />} />
                <Route path="tags" element={<Tags />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
