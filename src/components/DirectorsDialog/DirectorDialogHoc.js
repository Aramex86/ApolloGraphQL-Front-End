import { compose } from "recompose";

import { graphql } from "react-apollo";
import { directorsQuery } from "../DirectorsTable/query";
import {deleteDirectorMutation} from './mutations';


const withGraphqlDelete = graphql(deleteDirectorMutation,{
    props:({mutate})=>
    ({deleteDirector:id=>mutate({
        variables:id,
        refetchQueries:[{query:directorsQuery}],
    })})
})

export default compose(withGraphqlDelete);
