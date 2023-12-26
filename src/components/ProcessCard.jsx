import { Grid, Box, GridItem, Text } from "@chakra-ui/react"
import HeroBanner from '../assets/images/banner.avif';
import { useNavigate } from "react-router-dom";

const ProcessCard = (props) => {
  const navigate = useNavigate();

  return (
    <Box onClick={() => {navigate(`/${props.title}`)}} bg={`linear-gradient(to right, transparent, #8B5A2B), url(${props.thumbnail || HeroBanner}) center/cover`} width={'90%'}  borderRadius={'15px'} scrollSnapAlign='center' mr={props.mr} ml={props.ml} py='.2rem'>
      <Box pl={'1rem'}>
        <Grid minW={60} w="100%" h="100%" justifyContent={'end'} alignItems='center' p={'1rem'} textAlign={'right'} gap='.5rem'>
          <GridItem>
            <Text color={'white'} fontSize={'1.5rem'} fontWeight={700}>{props.title}</Text>
            <Text color={'white'}>{props.date}</Text>
          </GridItem>
          <GridItem>
            {props.location.map((e, index) => (
              <Text key={index} fontSize='.8rem' color="white">{e}</Text>
            ))}
          </GridItem>
        </Grid>
      </Box>
    </Box>
  )
}

export default ProcessCard