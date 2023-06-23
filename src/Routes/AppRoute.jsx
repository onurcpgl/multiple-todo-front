import { Routes, Route } from "react-router-dom";
import Home from "../Pages/MyTeamTodo/Home/Home";
import RootLayout from "../Layouts/RootLayout";
import Profile from "../Pages/Profile/Profile";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Team from "../Pages/Team/Team";
import ProtectedRoute from "./ProtectedRoute";
import EditProfile from "../Pages/Profile/EditProfile";
import MyTeam from "../Pages/MyTeamTodo/MyTeam";
import TeamEdit from "../Components/Team/TeamEdit";
import TeamDetail from "../Pages/Team/TeamDetail";

function AppRoute() {
  return (
    <Routes>
      <Route>
        <Route path="" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Route>
      <Route path="/Login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="" element={<ProtectedRoute />}>
        <Route path="" element={<RootLayout />}>
          <Route path="/teams" element={<Team />} />
          <Route path="/teams-detail/:slug" element={<TeamDetail />} />
          <Route path="/team-edit/:slug" element={<TeamEdit />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile-edit/:slug" element={<EditProfile />} />
          <Route path="/team-todo" element={<Team />} />
          <Route path="/my-team-todo" element={<MyTeam />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoute;
