import "./card.css";
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
    <Box className="card-container morph-bg">
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box className="card-container--padding">
        <Center>
          <Box
            className="card-title"
          >
            {property.title}
          </Box>
        </Center>

        <Flex className="card-content--my">
          <Text>Technologies:</Text>
          <Spacer/>
          {property.technologies
            .map((text, i) => (
              <Badge key={i} className="card-technologies--badge" colorScheme="teal">{text}</Badge>
            ))}
        </Flex>

        <Divider/>

        <Flex className="card-content--my">
          <Link className="card-link" href="https://github.com/enbattle/pathfinding-visualizer" isExternal>
            <Button colorScheme="purple">
              Go to source code
            </Button>
          </Link>

          <Spacer/>

          <Link className="card-link" href="https://enbattle.github.io/pathfinding-visualizer/" isExternal>
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