import { useLazyLoadQuery, graphql } from "react-relay";
import { QueryDataQuery } from "./__generated__/QueryDataQuery.graphql";
import { Card, CardContent, Typography } from "@mui/material";

export default function QueryData() {
  const data = useLazyLoadQuery<QueryDataQuery>(
    graphql`
      query QueryDataQuery {
        count
      }
    `,
    {}
  );

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Count</Typography>
        <Typography variant="body1">
          Data Fetched From Query: {data.count}
        </Typography>
      </CardContent>
    </Card>
  );
}
