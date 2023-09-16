import React from "react";
import useGenres from "../hooks/useGenre";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingY={2}>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
