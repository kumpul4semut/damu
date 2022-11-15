import React from 'react';
import {
  NativeBaseProvider,
  Text,
  Box,
  HStack,
  VStack,
  Image,
} from 'native-base';

const Home = () => {
  return (
    <>
      <NativeBaseProvider>
        <Box flex={1} bg="#D8D0D0" AlignItem="center">
          <Box
            bg="#457E6B"
            py="4"
            px="3"
            mx="5"
            mt="5"
            borderRadius="5"
            rounded="md"
            maxWidth="100%">
            <HStack justifyContent="space-between">
              <Box justifyContent="space-between">
                <VStack space="2">
                  <Text fontSize="sm" color="white">
                    Dzuhur
                  </Text>
                  <Text color="white" fontSize="xl">
                    1 Jam 30 menit
                  </Text>
                </VStack>
              </Box>
              <Image
                source={require('../assets/masjid.jpg')} 
                alt="Aang flying and surrounded by clouds"
                height="100"
                rounded="full"
                width="100"
              />
            </HStack>
          </Box>
          <Box
            bg="#ffffff"
            py="4"
            px="3"
            mx="5"
            mt="5"
            borderRadius="5"
            rounded="md"
            maxWidth="100%">
            <HStack justifyContent="space-between">
              <Box justifyContent="space-between">
                <VStack space="2">
                  <Text fontSize="sm" color="black">
                    Ashar
                  </Text>
                  <Text color="black" fontSize="xl">
                    15:00
                  </Text>
                </VStack>
              </Box>
            </HStack>
          </Box>
          <Box
            bg="#ffffff"
            py="4"
            px="3"
            mx="5"
            mt="5"
            borderRadius="5"
            rounded="md"
            maxWidth="100%">
            <HStack justifyContent="space-between">
              <Box justifyContent="space-between">
                <VStack space="2">
                  <Text fontSize="sm" color="black">
                    Ashar
                  </Text>
                  <Text color="black" fontSize="xl">
                    15:00
                  </Text>
                </VStack>
              </Box>
            </HStack>
          </Box>
          <Box
            bg="#ffffff"
            py="4"
            px="3"
            mx="5"
            mt="5"
            borderRadius="5"
            rounded="md"
            maxWidth="100%">
            <HStack justifyContent="space-between">
              <Box justifyContent="space-between">
                <VStack space="2">
                  <Text fontSize="sm" color="black">
                    Ashar
                  </Text>
                  <Text color="black" fontSize="xl">
                    15:00
                  </Text>
                </VStack>
              </Box>
            </HStack>
          </Box>
          <Box
            bg="#ffffff"
            py="4"
            px="3"
            mx="5"
            mt="5"
            borderRadius="5"
            rounded="md"
            maxWidth="100%">
            <HStack justifyContent="space-between">
              <Box justifyContent="space-between">
                <VStack space="2">
                  <Text fontSize="sm" color="black">
                    Ashar
                  </Text>
                  <Text color="black" fontSize="xl">
                    15:00
                  </Text>
                </VStack>
              </Box>
            </HStack>
          </Box>
        </Box>
      </NativeBaseProvider>
    </>
  );
};

export default Home;
