import { Hero } from "../components"
import { Box, Flex, Text, Grid, Divider } from "@chakra-ui/react"
import { ProcessCard, ScrollableSection } from "../components"
import { traceData } from "../data/trace"

const Home = () => {
  return (
    <Box bg='white'>
      <Hero />

      {/* TRACE  */}
      <Box py="2rem" pos='relative'>
        <Text mb="2rem" mx="2rem" color="primary" fontWeight={700} fontSize="1.25rem">Trace ID: KCGE3JR32KR34</Text>
        {/* <Divider border={'2px gray dashed'} zIndex={0} pos='absolute' left='4rem' bg='primary' orientation="vertical" h='100%' /> */}
        {/* <Divider
          top={16}
          orientation="vertical"
          borderLeftWidth="5px"
          // borderStyle="dashed"
          // borderColor="gray.400"
          borderColor="primary"
          pos={'absolute'}
          // mx="10" // Adjust the margin as needed
          left='4rem'
          h='98%'
          borderRadius={'50px'}
        /> */}
        <Flex gap='2rem' flexDir={'column'} alignItems={'center'} pos={'relative'} >
          {traceData.map((e, index) => (
            (!e.section)
              ? <ProcessCard key={index} {...e} />
              : <ScrollableSection key={index} {...e} />
          ))}
        </Flex>
      </Box>
    </Box>
  )
}

export default Home