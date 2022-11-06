import { Box, Image, Flex, Link, Divider, Text, Center, Spacer, Badge, Button } from "@chakra-ui/react";

interface ICardParameter {
  title: string,
  imageUrl: string,
  imageAlt: string,
  technologies: string[],
  sourceCodeHref: string,
  appSiteHref: string
}

const Card = ({
  title,
  imageUrl,
  imageAlt,
  technologies,
  sourceCodeHref,
  appSiteHref
}: ICardParameter) => {

  const property = {
    title: title,
    imageUrl: imageUrl,
    imageAlt: imageAlt,
    technologies: technologies,
    sourceCodeHref: sourceCodeHref,
    appSiteHref: appSiteHref
  }

  return (
    <Box maxW="sm" borderWidth="2px" borderRadius="lg" borderColor="gray.500" overflow="hidden">
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="4">
        <Center>
          <Box
            m="3"
            fontSize="1.5rem"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {property.title}
          </Box>
        </Center>

        <Flex my="3">
          <Text>Technologies:</Text>
          <Spacer/>
          {property.technologies
            .map((text, i) => (
              <Badge key={i} borderRadius="full" px="2" colorScheme="teal">{text}</Badge>
            ))}
        </Flex>

        <Divider/>

        <Flex my="3">
          <Link href="https://github.com/enbattle/pathfinding-visualizer" style={{ textDecoration: "none" }} isExternal>
            <Button colorScheme="purple">
              Go to source code
            </Button>
          </Link>

          <Spacer/>

          <Link href="https://enbattle.github.io/pathfinding-visualizer/" style={{ textDecoration: "none" }} isExternal>
          <Button colorScheme="cyan">
              Go to app site
            </Button>
          </Link>
        </Flex>

      </Box>
    </Box>
  );
}

export default Card;