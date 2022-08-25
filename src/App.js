import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeadFoot from "./Nav";
import FacName from "./FacName";
import FacDetails from "./FacDetails";
import SingleFacName from "./SingleFacDetail";
import AddNewFac from "./AddNewFac";
import "./styles.css";
import HomeInfo from "./HomeInfo";
import Edit from "./Edit";
import Login from "./Login";

export default function App() {
  return (
    <>  
      <BrowserRouter basename="/faculty_react">
        <Routes>
          <Route path="/faculty_react" element={<Login />}></Route>
          <Route path="/faculty_react" element={<HeadFoot />}>
            <Route path="/HomeInfo" element={<HomeInfo />}></Route>
            <Route path="/FacName" element={<FacName />}></Route>
            <Route path="/FacDetails" element={<FacDetails />}></Route>
            <Route path="FacName/:id" element={<SingleFacName />}></Route>
            <Route path="/AddNewFac" element={<AddNewFac />}></Route>
            <Route path="/FacName/:id/Edit" element={<Edit />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
