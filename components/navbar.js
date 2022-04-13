import Image from 'next/image'
import Logo from "./logo";
import NextLink from 'next/link'
import {
    Heading,
    Text,
    Container,
    Box,
    Link,
    Stack,
    MenuButton,
    IconButton,
    Flex,
    Menu,
    Button,
    MenuItem,
    MenuList,
    useColorModeValue
} from '@chakra-ui/react'
import Hamburger from 'hamburger-react'
import ThemeToggleButton from './themebutton'
import {useState} from "react";
import styled from "@emotion/styled"
import {HamburgerIcon} from "@chakra-ui/icons";



const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (

        <NextLink href={href} passHref scroll={false}>
            <Button p={2}
                    bg={active ? useColorModeValue('#B794F4','pink') : undefined}
                    color={active ? '#202023' : inactiveColor}
                    variant="ghost"
                    target={target}
                    {...props}

            >

                {children}


            </Button>
        </NextLink>
    )
}


const Navbar = props => {
    const { path } = props
    const [isOpen, setOpen] = useState(false)

    return (
        <Box
            position="fixed"
            as = "nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            css={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mb={2}  mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href="/about" path={path}>
                        About Me
                    </LinkItem>
                    <LinkItem href="/projects" path={path}>
                        Projects
                    </LinkItem>

                    <LinkItem href="/contact" path={path}>
                        Contact Me
                    </LinkItem>
                    <LinkItem href="/AlexZamolotskikhResume.pdf" path={path}>
                        Resume
                    </LinkItem>


                </Stack>

                <Box flex={1} align="right">
                    <ThemeToggleButton />

                    <Box ml={2} mr={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu isLazy id="navbar-menu">
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon/>}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>
                                <NextLink href="/about" passHref>
                                    <MenuItem as={Link}>About</MenuItem>

                                </NextLink>
                                <NextLink href="/projects" passHref>
                                    <MenuItem as={Link}>Projects</MenuItem>
                                </NextLink>
                                <NextLink href="/contact" passHref>
                                    <MenuItem as={Link}>Contact Me</MenuItem>
                                </NextLink>
                                <NextLink href="/AlexZamolotskikhResume.pdf" path={path}>
                                    <MenuItem as={Link}>Resume</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar