import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import { Box, Flex, Text, Grid, GridItem, Image } from "@chakra-ui/react"
import { Home, Details } from "./pages"

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
      <Route index element={<Home />} />
      <Route path="/:step" element={<Details />} />
    </Route>
  )
);

const App = () => {
  return (
    <Flex justifyContent={'center'} alignItems={'center'} bg={'whitesmoke'}>
      <Box minH="100svh" maxW="480px"   >
        <RouterProvider router={route} />
      </Box >
    </Flex>
  )
}

export default App;