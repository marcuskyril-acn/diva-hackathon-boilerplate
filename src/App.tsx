import {
  CagAdminHeader,
  CagCard,
  Typography,
} from "@diva_changi/changi-diva-dls";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <CagAdminHeader
        avatarUrl="/static/profile.jpg"
        email="pbe_admin1@changiairport.com"
        navButtonList={[
          {
            label: "Home",
            onClick: () => {
              navigate("/");
            },
            isActive: location.pathname === "/",
          },
          {
            label: "About",
            onClick: () => {
              navigate("/about");
            },
            isActive: location.pathname === "/about",
          },
        ]}
        navDropdownList={[
          {
            isActive: true,
            label: "PBE Admin",
            onClick: () => {},
          },
          {
            label: "BDOP Admin",
            onClick: () => {},
          },
        ]}
        username="pbe_admin1"
      />
      <Outlet />
    </>
  );
}

function Home() {
  return (
    <main className="homepage">
      <CagCard className="generic-card" borderRadius="8">
        <Typography>Home Page</Typography>
      </CagCard>
    </main>
  );
}

function About() {
  return (
    <main className="aboutpage">
      <CagCard className="generic-card" borderRadius="8">
        <Typography>About Page</Typography>
      </CagCard>
    </main>
  );
}

export default App;