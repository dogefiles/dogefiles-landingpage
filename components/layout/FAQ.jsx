import {
    Box,
    Heading,
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
       <Heading as="h2" size="3xl" isTruncated>FAQ</Heading>
       </Box>
        <Accordion allowToggle paddingTop="70px" paddingLeft="10%" paddingBottom="120px" width="90%">
  <AccordionItem >
    <Heading as="h5" size="sm">
      <AccordionButton>
        <Box flex="1" textAlign="left">
        What is the maximum file upload size?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </Heading>
    <AccordionPanel pb={4}>
    The maximum file upload size is 100MB. 
      
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <Heading as="h5" size="sm">
      <AccordionButton>
        <Box flex="1" textAlign="left">
        How much storage a free user get?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </Heading>
    <AccordionPanel pb={4}>
      The free user can get upto 20GB.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <Heading as="h5" size="sm">
      <AccordionButton>
        <Box flex="1" textAlign="left">
        How can I contact dogefiles support
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </Heading>
    <AccordionPanel pb={4}>
    You can connect Either with Contact Form or Discord https://discord.gg/YnFyaMQY9D

    </AccordionPanel>
  </AccordionItem>
</Accordion>
</Box>
    )
}
export default Faq;