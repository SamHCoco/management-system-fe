import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import EmployeeGrid from "./components/EmployeeGrid";
import EmployeeForm from "./components/EmployeeForm";
import MenuList from "./components/MenuList";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import { AuthProvider, useAuth } from "./auth/AuthProvider";
import "bootstrap/dist/css/bootstrap.css";

// Redirects unauthenticated users to the Keycloak login page,
// passing the current URL so Keycloak redirects back here after login.
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading, login } = useAuth();
  if (isLoading) return null;
  if (!isAuthenticated) {
    login(window.location.href);
    return null;
  }
  return <>{children}</>;
};

// Layout shared by all protected pages
const AppLayout = ({ children }: { children: React.ReactNode }) => (
  <Grid
    templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`,
    }}
  >
    <GridItem area="nav" bg="white">
      <NavBar />
    </GridItem>
    <GridItem area="aside" bg="gold">
      <MenuList />
    </GridItem>
    <GridItem area="main" bg="white">
      {children}
    </GridItem>
  </Grid>
);

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public */}
          <Route path="/login" element={<LoginPage />} />

          {/* Protected — wrapped in shared layout */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <AppLayout>
                  <Navigate to="/employees" replace />
                </AppLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/employees"
            element={
              <PrivateRoute>
                <AppLayout>
                  <EmployeeGrid />
                </AppLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/employees/new"
            element={
              <PrivateRoute>
                <AppLayout>
                  <EmployeeForm />
                </AppLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/employee/edit"
            element={
              <PrivateRoute>
                <AppLayout>
                  <EmployeeForm />
                </AppLayout>
              </PrivateRoute>
            }
          />

          {/* User profile page — no app layout */}
          <Route
            path="/user"
            element={
              <PrivateRoute>
                <UserPage />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
