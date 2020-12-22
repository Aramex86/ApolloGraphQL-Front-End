import { withStyles } from "@material-ui/core/styles";
import { compose } from "recompose";

import { styles } from "./styles";
import { graphql } from "react-apollo";
import { moviesQuery } from "../MoviesTable/query";
import { addMovieMutation } from "./mutations";
import {directorsQuery} from './query';


const withGraphqlAdd = graphql(addMovieMutation,{
    props:({mutate})=>
    ({addMovie:movie=>mutate({
        variables:movie,
        refetchQueries:[{query:moviesQuery}],
    })})
})

export default compose(withStyles(styles),withGraphqlAdd,graphql(directorsQuery));
