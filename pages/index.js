import Head from "next/head"
import { Flex, Box, Text } from "@chakra-ui/react"
import MintCards from "../components/mintComp/MintCards"

export default function HomePage() {
    return(
      <Box bgGradient="linear(to-br, teal.400,purple.300)">
        <Head>
          <title>Login | Dashboard</title>
          <meta name='description' content='Welcome to TaurosDAO, a community of artists and collectors by Labyrinthine Unreal' />
        </Head>
        
        <Flex direction="column" alignItems="center" width="100%" pt={70} p={20}>
            <Text 
              pl={40} pr={40} pb={5} fontWeight="semibold" fontSize="2xl" alignSelf="flex-start">
              Lorem ipsum dolor sit amet
            </Text>
            <Text pl={40} pr={40} pb={20}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit nisi eu erat luctus, non scelerisque magna commodo. Donec ullamcorper, neque convallis lacinia volutpat, lacus felis rutrum ligula, lacinia rhoncus arcu dui eu leo. Pellentesque eu aliquam nisl. Integer vestibulum lorem vitae porta maximus. Nullam venenatis sem arcu, efficitur interdum urna dapibus vel. Aliquam aliquam eu nibh vel ultricies. Sed vulputate, purus eu porta vulputate, ligula arcu gravida neque, ut dapibus nulla enim a lorem. Donec laoreet, lectus in cursus rutrum, purus ipsum interdum mauris, eu blandit neque nisl ut ligula.</Text>
            <MintCards />
            <Text 
              pl={40} pr={40} pb={5} pt={20} fontWeight="semibold" fontSize="2xl" alignSelf="flex-start">
              Lorem ipsum dolor sit amet
            </Text>
            <Text pl={40} pr={40}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit nisi eu erat luctus, non scelerisque magna commodo. Donec ullamcorper, neque convallis lacinia volutpat, lacus felis rutrum ligula, lacinia rhoncus arcu dui eu leo. Pellentesque eu aliquam nisl. Integer vestibulum lorem vitae porta maximus. Nullam venenatis sem arcu, efficitur interdum urna dapibus vel. Aliquam aliquam eu nibh vel ultricies. Sed vulputate, purus eu porta vulputate, ligula arcu gravida neque, ut dapibus nulla enim a lorem. Donec laoreet, lectus in cursus rutrum, purus ipsum interdum mauris, eu blandit neque nisl ut ligula.</Text>
        </Flex>
      </Box>
    )
  }
