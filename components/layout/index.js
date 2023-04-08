import { Box, Flex } from "@chakra-ui/layout";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Box margin="0 auto" maxWidth="1400" transition="0.5s ease-out">
      <Box marginX={[2, 4, 6, 48]}>
        <Navbar />
        {/* <Flex>
          <Flex
            display={["none", "block", "block", "block"]}
            alignItems={"center"}
            mt="200px"
            height="50%"
          >
            <Flex>
              <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                  __html: `atOptions = {
                    'key' : '4079cfaf752610083839798206411ce8',
                    'format' : 'iframe',
                    'height' : 600,
                    'width' : 160,
                    'params' : {}
                  };
                  document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.topdisplayformat.com/4079cfaf752610083839798206411ce8/invoke.js"></scr' + 'ipt>');`,
                }}
              />

              <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                  __html: `atOptions = {
                    'key' : '4079cfaf752610083839798206411ce8',
                    'format' : 'iframe',
                    'height' : 600,
                    'width' : 160,
                    'params' : {}
                  };
                  document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.topdisplayformat.com/4079cfaf752610083839798206411ce8/invoke.js"></scr' + 'ipt>');`,
                }}
              ></script>
            </Flex>
          </Flex>
          <Box
            as="main"
            // marginY={22} old value
            marginY="4rem"
          >
            {children}
          </Box>
          <Flex
            display={["none", "block", "block", "block"]}
            ml="50px"
            mt="200px"
            alignItems={"center"}
            height="50%"
          >
            <Flex>
              <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                  __html: `atOptions = {
                    'key' : '4079cfaf752610083839798206411ce8',
                    'format' : 'iframe',
                    'height' : 600,
                    'width' : 160,
                    'params' : {}
                  };
                  document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.topdisplayformat.com/4079cfaf752610083839798206411ce8/invoke.js"></scr' + 'ipt>');`,
                }}
              />

              <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                  __html: `atOptions = {
                    'key' : '4079cfaf752610083839798206411ce8',
                    'format' : 'iframe',
                    'height' : 600,
                    'width' : 160,
                    'params' : {}
                  };
                  document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.topdisplayformat.com/4079cfaf752610083839798206411ce8/invoke.js"></scr' + 'ipt>');`,
                }}
              ></script>
            </Flex>
          </Flex>
        </Flex> */}
        <Box
          as="main"
          // marginY={22} old value
          marginY="4rem"
        >
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
