import { Flex, Grid, GridItem, Text } from "@chakra-ui/react"
import { ProcessCard } from "./"

const ScrollableSection = (props) => {
  return (
    <Grid
      gridTemplateAreas={
        `"title date"
         "card card"`
      }
      gridTemplateColumns="1fr auto"
      gridTemplateRows="auto 1fr"
      p='0'
    >
      <GridItem gridArea='title' bg={'white'} pb='1rem'>
        <Text mx="2rem" color="primary" fontWeight={700} fontSize="1.5rem">{props.section}</Text>
      </GridItem>

      <GridItem gridArea='date' bg={'white'} pb='1rem'>
        <Text mx="2rem" color='gray'>{props.date}</Text>
      </GridItem>

      <GridItem gridArea='card'>
        <Flex overflowX='auto' scrollSnapType={'x mandatory'} bg="white">
          {props.steps.map((e, index) => (
            <ProcessCard mr={index == props.steps.length - 1 ? '1rem' : 0} ml={'1rem'} key={index} {...e} />
          ))}
        </Flex>
      </GridItem>
    </Grid>
  )
}

export default ScrollableSection;