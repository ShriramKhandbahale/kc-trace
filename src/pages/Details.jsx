import { Box, Flex, Text, Grid } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";


const Details = () => {
  const { step } = useParams()
  const navigate = useNavigate();

  return (
    <Box mx='1.5rem' w='100vw' p={0} m={0} h={'calc(100svh - 11.5rem)'}>
      <Flex mx={'1.2rem'} mt='1.5rem' justifyContent="space-between" alignItems={'center'}  >
        <Box onClick={() => { navigate('/') }}>
          <ChevronLeftIcon boxSize={'2rem'}color={'primary'} />
        </Box>
        <Box>
          <Text fontWeight={700} fontSize="1.25rem" color={'primary'} textTransform={'capitalize'}>{step}</Text>
        </Box>
        <Box></Box>
      </Flex>
      <Box h={''}></Box>
    </Box>
  )
}

export default Details