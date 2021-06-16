import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const Faq = () => {
  return (
    <Box id="faq" my={8}>
      {/* <Box textAlign="center" fontSize="60px"></Box> */}
      <Heading as={"h2"} size="3xl" mb={[4, 4, 6, 8]} textAlign="center">
        FAQ
      </Heading>
      <Accordion
        allowToggle
        paddingTop="70px"
        paddingLeft="10%"
        paddingBottom="120px"
        width="90%"
      >
        <AccordionItem>
          <Heading as="h5" size="sm">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What does LOREM mean?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            ‘Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete
            text) is dummy text that is not meant to mean anything. It is used
            as a placeholder in magazine layouts, for example, in order to give
            an impression of the finished document. The text is intentionally
            unintelligible so that the viewer is not distracted by the content.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Heading as="h5" size="sm">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Where can I subscribe to your newsletter?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <Heading as="h5" size="sm">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Do you accept orders via Phone or E-mail?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <Heading as="h5" size="sm">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What are your opening hours?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <Heading as="h5" size="sm">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                General Terms & Conditions (GTC)
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};
export default Faq;
