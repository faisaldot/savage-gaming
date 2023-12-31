import { HStack, Image } from "@chakra-ui/react";
import imgSrc from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

export default function Navbar() {
  return (
    <HStack justifyContent="space-between" px="20px" py="10px">
      <Image src={imgSrc} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
}
