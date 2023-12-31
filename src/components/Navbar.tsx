import { HStack, Image, Text } from "@chakra-ui/react";
import imgSrc from "../assets/logo.png";

export default function Navbar() {
  return (
    <HStack>
      <Image src={imgSrc} boxSize="60px" />
      <Text>Navbar</Text>
    </HStack>
  );
}
