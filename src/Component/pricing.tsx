import React from 'react';
import {
  chakra,
  VStack,
  HStack,
  Text,
  Container,
  Box,
  Icon,
  SimpleGrid,
  useColorModeValue,
  Heading,
  Button,
} from '@chakra-ui/react';
import { BiCheck } from 'react-icons/bi';
import { BsFillCloudCheckFill } from 'react-icons/bs';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { FaServer } from 'react-icons/fa';
import { IconType } from 'react-icons';

const plansList = [
  {
    title: 'Saturnus',
    price: 1500000,
    icon: BsFillCloudCheckFill,
    features: ['Massa Berlaku: 12 Bulan', 'Fitur: Deteksi Emosi dan Laporan Deteksi'],
  },
  {
    title: 'Jupiter',
    price: 750000,
    icon: BsFillCloudCheckFill,
    features: ['Massa Berlaku: 6 Bulan', 'Fitur: Deteksi Emosi dan Laporan Deteksi'],
  },
  {
    title: 'Mars',
    price: 10000,
    icon: AiOutlineCloudServer,
    features: ['Massa Berlaku: 30 Hari', 'Fitur: Deteksi Emosi'],
  },
  {
    title: 'Matahari',
    price: 0,
    icon: FaServer,
    features: ['Massa Berlaku: 20 Menit', 'Fitur: Deteksi Emosi'],
  },
];

const ThreeTiersPricing = () => {
  return (
    <Container maxW="7xl" py="8" px="0">
      <Heading bgGradient='linear(to-l, #800000, #84DCAE, #B284DC, #FF6347)' bgClip='text' fontSize='6xl' fontWeight='extrabold' textAlign="center">
        <h1>FACE MOTIONS PAKET</h1>
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={1} mt={4}>
        {plansList.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

interface PricingCardProps {
  title: string;
  price: number;
  features: string[];
  icon: IconType;
}

const PricingCard = ({ title, price, icon, features }: PricingCardProps) => {
  return (
    <Box
      minW={{ base: 'xs', sm: 'xs', lg: 'sm' }}
      rounded="md"
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow="md"
      marginInline="auto"
      borderRadius={40}
      my={3}
      p={6}
    >
      <Box textAlign="center">
        <Icon as={icon} h={10} w={10} color="teal.500" />
        <chakra.h2 fontSize="2xl" fontWeight="bold">
          {title}
        </chakra.h2>
        <Box fontSize="7xl" fontWeight="bold">
          <Text as="sup" fontSize="3xl" fontWeight="normal" top="-1em">
            Rp
          </Text>
          {price}
        </Box>
        <Text fontSize="md" color="gray.500">
          Keterangan
        </Text>
      </Box>
      <VStack spacing={2} alignItems="flex-start" my={6}>
        {features.map((feature, index) => (
          <HStack key={index} spacing={3}>
            <Icon as={BiCheck} h={4} w={4} color="green.500" />
            <Text fontSize="sm" color="gray.500">
              {feature}
            </Text>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default ThreeTiersPricing;
