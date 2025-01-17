import React, { useState } from "react";
import {
  Box,
  Flex,
  Image,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Divider,
  useMediaQuery,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [openDropdown, setOpenDropdown] = useState({});
  const [isMobileView] = useMediaQuery("(max-width: 1024px)");

  const handleToggleDropdown = (label) => {
    setOpenDropdown((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const dropdownItems = {
    Solutions: [
      { label: "ENGINEERED SKID SYSTEM", href: "/engineered-skid-system" },
      { label: "PROCESS EQUIPMENT", href: "/process-system" },
      { label: "RENEWABLES", href: "/renewables" },
    ],
  };

  const menuOrder = [
    { label: "HOME", href: "/", isActive: true },
    { label: "ABOUT US", href: "/about-us" },
    { label: "SOLUTIONS", dropdown: dropdownItems.Solutions },
    { label: "INFRASTRUCTURE", href: "/infrastructure" },
    { label: "ENPRO SAUDI ARABIA", href: "/enpro-saudi-arabia" },
    { label: "CAREERS", href: "/career" },
    { label: "CONTACT US", href: "/contact" },
  ];

  return (
    <Box
      as="header"
      bg="white"
      boxShadow="sm"
      h={{ base: "70px", md: "80px" }}
      w="100%"
      overflowX="hidden"
      zIndex="sticky"
    >
      <Flex
        h="100%"
        align="center"
        justify="space-between"
        px={{ base: 4, md: 8 }}
        w="100%"
        wrap="wrap"
      >
        {/* Logo */}
        <Image src={logo} alt="logo" h={{ base: "40px", md: "50px" }} />

        {/* Desktop Navigation */}
        {!isMobileView && (
          <Flex as="nav" align="center" display="flex">
            {menuOrder.map((menuItem, index) =>
              menuItem.dropdown ? (
                <Menu key={index} isLazy>
                  <MenuButton
                    mx={2}
                    fontSize="16px"
                    as={Text}
                    color="black"
                    cursor="pointer"
                    _hover={{ color: "#d00000" }}
                    onClick={() => handleToggleDropdown(menuItem.label)}
                  >
                    {menuItem.label}{" "}
                    <ChevronDownIcon
                      transform={
                        openDropdown[menuItem.label] ? "rotate(180deg)" : ""
                      }
                      transition="transform 0.3s"
                    />
                  </MenuButton>
                  {openDropdown[menuItem.label] && (
                    <MenuList
                      bg="#d00000"
                      color="white"
                      placement="bottom-start"
                      border="none"
                      mt="0"
                      zIndex="dropdown"
                    >
                      {menuItem.dropdown.map((item, idx) => (
                        <React.Fragment key={idx}>
                          <Link to={item.href}>
                            <MenuItem
                              _hover={{ bg: "#d00000", color: "white" }}
                            >
                              {item.label}
                            </MenuItem>
                          </Link>
                          {idx < menuItem.dropdown.length - 1 && (
                            <Divider
                              borderColor="gray.500"
                              borderWidth="1px"
                            />
                          )}
                        </React.Fragment>
                      ))}
                    </MenuList>
                  )}
                </Menu>
              ) : (
                <Link
                  to={menuItem.href}
                  key={index}
                  style={{
                    marginLeft: "15px",
                    fontSize: "16px",
                    color: menuItem.isActive ? "white" : "black",
                    background: menuItem.isActive ? "#d00000" : "transparent",
                    padding: "5px 10px",
                    borderRadius: "5px",
                  }}
                  className={menuItem.isActive ? "active" : ""}
                  onMouseEnter={(e) => {
                    if (!menuItem.isActive) {
                      e.target.style.color = "#d00000";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!menuItem.isActive) {
                      e.target.style.color = "black";
                    }
                  }}
                >
                  {menuItem.label}
                </Link>
              )
            )}
          </Flex>
        )}

        {/* Mobile Navigation Drawer Button */}
        {isMobileView && (
          <IconButton
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            variant="ghost"
            onClick={onOpen}
          />
        )}

        {/* Drawer for Mobile Screens */}
        <Drawer
          isOpen={isOpen}
          placement="bottom"
          size="full"
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent bg="#d00000">
            <DrawerCloseButton color="white" />
            <DrawerHeader color="white" textAlign="center" fontSize="20px">
              Menu
            </DrawerHeader>
            <DrawerBody
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
            >
              <VStack spacing={4} w="100%">
                {menuOrder.map((menuItem, index) =>
                  menuItem.dropdown ? (
                    <Box key={index} w="100%">
                      <Text
                        fontWeight="bold"
                        fontSize="18px"
                        color="white"
                        mb={2}
                        textAlign="center"
                      >
                        {menuItem.label}
                      </Text>
                      <VStack align="center" spacing={2}>
                        {menuItem.dropdown.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.href}
                            style={{
                              color: "white",
                              fontSize: "16px",
                              textAlign: "center",
                            }}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </VStack>
                    </Box>
                  ) : (
                    <Link
                      key={index}
                      to={menuItem.href}
                      style={{
                        color: "white",
                        fontSize: "18px",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      {menuItem.label}
                    </Link>
                  )
                )}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Header;
