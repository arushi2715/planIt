import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.component";
import Footer from "./components/Footer/Footer.component";
import HomePage from "./pages/HomePage/HomePage.component";
import SignUp from "./pages/SignUp/SignUp.component";
import Login from "./pages/Login/Login.component";
import NotesPage from "./pages/NotesPage/NotesPage.component";
import TodoPage from "./pages/TodoPage/TodoPage.component";
// import Blogs from "./components/Blogs/Blogs.component";
import ProfilePage from "./pages/ProfilePage/ProfilePage.component";



function App() {
  return (
  
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/* </Route> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
