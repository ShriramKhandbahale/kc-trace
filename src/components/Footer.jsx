import { Flex, Box, Text, Image, Divider } from "@chakra-ui/react"
import EmertechLogo from "../assets/images/Emertech_Logo.png"

const Footer = () => {
  return (
    <Flex h='10rem' bg="gray.200" justifyContent='center' alignItems='center' w='100%'>
      <Text fontSize='.8rem' color='gray.400'>Powered by</Text>
      <Divider mx='.5rem' orientation="vertical" w='2px' bg='gray.300' h='2rem' borderRadius='50px'/>
      <Image src={EmertechLogo} alt="Emertech" width='2.5rem' />
      <Text fontSize='.8rem' color='gray.400'>Emertech Innovations</Text>
    </Flex>
  )
}

export default Footer