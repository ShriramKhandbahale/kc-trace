import { Box, Flex, Text, Grid, GridItem, Image, Button, Card, CardHeader, CardFooter, CardBody } from "@chakra-ui/react";
import HeroBanner from '../assets/images/banner.avif';
import Wave from '../assets/images/wave.svg';
import LidcomLogo from '../assets/images/lidcom_logo.jpg';
import GITag from '../assets/images/GI_Tag.png';
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  return (
    <Box
      bg={`rgba(0, 0, 0, 0.25) url(${HeroBanner}) center/cover`}
      // h="45vh"
      pos="relative"
      bgBlendMode="darken"
    >
      <Image src={Wave} pos="absolute" bottom="0" />

      <Box mx=".8rem" transform="translateY(3rem)" mb="3rem">
        <Box mx=".65rem">
          <Text color="white" fontSize="1rem" fontWeight="700">Howdy, Rohit</Text>
          <Text color="white" fontSize=".8rem">It's a fine Day</Text>
        </Box>

        <Box mt="2rem">
          <Grid
            gridTemplateAreas={`
              "verify GITag"
              "lidcom GITag"
            `}
            gridTemplateColumns="45% auto"
            gridTemplateRows="auto 2fr"
            gap=".8rem"
          >
            {/* Verify GridItem */}
            <GridItem
              boxShadow="1px 1px 5px rgba(0,0,0,0.15)"
              bg="white"
              gridArea="verify"
              p=".8rem"
              borderRadius="15px"
            >
              <Flex flexDir="column" justifyContent="space-evenly" h="100%" gap=".5rem">
                <Button borderRadius={'8px'} fontSize=".7rem" bg="transparent" color="primary" border="2px solid #8B5A2B" fontWeight="400">
                  View Details
                </Button>
                <Button borderRadius={'8px'} fontSize=".7rem" bg="primary" color="white" fontWeight="400">
                  Verify On Blockchain
                </Button>
              </Flex>
            </GridItem>

            {/* Lidcom GridItem */}
            <GridItem
              boxShadow="1px 1px 25px rgba(0,0,0,0.15)"
              borderRadius="15px"
              bg="white"
              gridArea="lidcom"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image src={LidcomLogo} alt="Lidcom" width="80%" p=".5rem" />
            </GridItem>

            {/* GITag GridItem */}
            <GridItem
              boxShadow="1px 1px 25px rgba(0,0,0,0.15)"
              borderRadius="15px"
              bg="white"
              gridArea="GITag"
            >
              <Card height="100%" boxShadow="none" borderRadius="15px">
                <CardHeader py='0' mt="1rem" fontSize="1.2rem" color="primary" fontWeight="700">
                  GI Tag
                </CardHeader>
                <CardBody py=".25rem" color="gray">
                  <Image src={GITag} alt="Lidcom" width="4rem" float="right" />
                  <Text fontSize=".8rem">
                    Uniqueness: These sturdy leather chappals are hand-crafted and tanned using vegetable dyes, and the art of making them is passed down from one generation to another.
                  </Text>
                </CardBody>
                <CardFooter py='0' mb="1rem">
                  <Text fontSize='0.8rem' textDecor="underline" color="#0A1B30">
                    View Certificate
                  </Text>
                </CardFooter>
              </Card>
            </GridItem>

          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
