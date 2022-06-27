import React from 'react'
import {
    Text,
    Image,
    Flex,
    Button,
    SimpleGrid,
    Box,
    Center,
} from '@chakra-ui/react'

import { AiOutlineShoppingCart } from 'react-icons/ai'

function App() {
    return (
        <>
            <Box h={'100vh'} bg="#F0E9E3">
                <Center>
                    <Flex
                        direction={['column', 'row']}
                        borderRadius="10px"
                        bg="white"
                        w={'40em'}
                        mt={'10em'}
                    >
                        <Image
                            src="../images/image-product-desktop.jpg"
                            objectFit="cover"
                            boxSize={['10em', '30em']}
                            borderRadius={'10px 0 0 10px'}
                        />
                        <Flex direction="column" p="2em">
                            <Text
                                sx={{
                                    fontFamily: 'Montserrat',
                                    fontWeight: 300,
                                    fontSize: '12px',
                                    color: 'gray.700',
                                    mb: '1em',
                                }}
                            >
                                P E R F U M E
                            </Text>
                            <Text
                                sx={{
                                    fontFamily: 'Montserrat',
                                    fontWeight: 300,
                                    fontSize: '30px',
                                    color: 'black',
                                    mb: '1em',
                                }}
                            >
                                Gabrielle Essence Eau De Parfum
                            </Text>
                            <Text>
                                A floral, solar and voluptuous interpretation
                                composed by Olivier Polge, Perfumer-Creator for
                                the House of CHANEL.
                            </Text>
                            <SimpleGrid columns={2}>
                                <Text>$149.99</Text>
                                <Text>$169.99</Text>
                            </SimpleGrid>
                            <Button
                                leftIcon={<AiOutlineShoppingCart />}
                                colorScheme="green"
                            >
                                Add to Cart
                            </Button>
                        </Flex>
                    </Flex>
                </Center>
                <div class="attribution">
                    Challenge by{' '}
                    <a
                        href="https://www.frontendmentor.io?ref=challenge"
                        target="_blank"
                    >
                        Frontend Mentor
                    </a>
                    . Coded by <a href="#">Paul Valladares</a>.
                </div>
            </Box>
        </>
    )
}

export default App
