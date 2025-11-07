import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import EmployeeGrid from "./components/EmployeeGrid";

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
          Aside
        </GridItem>

        <GridItem area="main" bg="white">
          <Routes>
            {/* TODO - potentially remove */}
            <Route path="/" element={<Navigate to="/employees" replace />} />

            <Route path="/employees" element={<EmployeeGrid />} />

            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </GridItem>
      </Grid>
    </Router>
  );
}

export default App;
