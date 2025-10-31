import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import EmployeeGrid from "./components/EmployeeGrid";

function App() {
  return (
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
        <EmployeeGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
