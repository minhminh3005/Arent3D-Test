import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layouts";
import RequireAuth from "./components/require-auth";
import TopPage from "./pages/top";
import MyRecord from "./pages/my-record";
import Column from "./pages/column";
import Login from "./pages/login";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route path="column" element={<Column/>} />
        <Route path="login" element={<Login/>} />
        <Route element={<RequireAuth />}>
          <Route path="top-page" element={<TopPage />} />
          <Route path="my-record" element={<MyRecord />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
