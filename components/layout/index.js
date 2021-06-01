import { Box } from "@chakra-ui/layout";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Box margin="0 auto" maxWidth="1600" transition="0.5s ease-out">
      <Box margin="8">
        <Navbar />
        <Box as="main" marginY={22}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
