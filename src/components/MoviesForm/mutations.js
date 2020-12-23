import { gql } from "apollo-boost";

export const addMovieMutation = gql`
  mutation addMovie(
    $name: String!
    $genre: String!
    $watched: Boolean!
    $raiting: Int
    $directorId: ID
  ) {
    addMovie(
      name: $name
      genre: $genre
      watched: $watched
      raiting: $raiting
      directorId: $directorId
    ) {
      name
    }
  }
`;
