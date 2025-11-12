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
import "bootstrap/dist/css/bootstrap.css";
import MenuList from "./components/MenuList";

function App() {
  return (
    <Router>
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
          <Routes>
            <Route path="/" element={<Navigate to="/employees" replace />} />
            <Route path="/employees" element={<EmployeeGrid />} />
            <Route path="/employees/new" element={<EmployeeForm />} />
            <Route path="/employee/edit" element={<EmployeeForm />} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </GridItem>
      </Grid>
    </Router>
  );
}

export default App;
