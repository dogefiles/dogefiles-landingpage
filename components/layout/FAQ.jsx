import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from "@chakra-ui/react"

const Faq =()=>{
    return(
        <Box>
       <Box textAlign="center" fontSize="60px">
       <h1>FAQ</h1>
       </Box>
        <Accordion allowToggle paddingTop="70px" paddingLeft="10%" paddingBottom="120px" width="90%">
  <AccordionItem >
    <h1>
      <AccordionButton>
        <Box flex="1" textAlign="left">
        What does LOREM mean?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h1>
    <AccordionPanel pb={4}>
    ‘Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is 
    dummy text that is not meant to mean anything. It is used as a placeholder in
     magazine layouts, for example, in order to give an impression of the finished document.
      The text is intentionally unintelligible so that the viewer is not distracted by the content. 
      
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h1>
      <AccordionButton>
        <Box flex="1" textAlign="left">
        Where can I subscribe to your newsletter?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h1>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h1>
      <AccordionButton>
        <Box flex="1" textAlign="left">
        Do you accept orders via Phone or E-mail?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h1>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h1>
      <AccordionButton>
        <Box flex="1" textAlign="left">
        What are your opening hours?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h1>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h1>
      <AccordionButton>
        <Box flex="1" textAlign="left">
        General Terms & Conditions (GTC)
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h1>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
</Box>
    )
}
export default Faq;