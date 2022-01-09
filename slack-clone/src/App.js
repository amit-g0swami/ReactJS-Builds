import React  from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Chat from "./Chat";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import { useStateValue } from "./StateProvider";

function App() {

const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
      {!user ? (
        <Login />
      ):( <>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Routes>
          <Route path="/" element={(<h1 className="app__header">⚠️ IMPORTANT ⚠️<br />1) Be kind and keep channel names appropriate<br />2) Think before you speak<br />3) Don’t abuse in channels<br />4) Be humble and considerate</h1>)} />
          <Route path="/room/:roomId"  element={<Chat />} />
        </Routes>
        </div>
        </>
    )} 
      </Router>
    </div>
  );
}

export default App;
