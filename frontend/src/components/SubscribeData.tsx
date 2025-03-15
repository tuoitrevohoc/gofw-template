import { Card, CardContent, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { useSubscription } from "react-relay";
import { graphql } from "react-relay";
import { SubscribeDataSubscription } from "./__generated__/SubscribeDataSubscription.graphql";

export default function SubscribeData() {
  const [count, setCount] = useState(0);

  useSubscription<SubscribeDataSubscription>(
    useMemo(
      () => ({
        variables: {},
        subscription: graphql`
          subscription SubscribeDataSubscription {
            countUpdated
          }
        `,
        onNext: (data) => {
          console.log(data);
          setCount(data?.countUpdated ?? 0);
        },
      }),
      []
    )
  );

  return (
    <Card>
      <CardContent sx={{ gap: 2 }}>
        <Typography variant="h5">Subscribe Data</Typography>
        <Typography variant="body1">
          Subscribe to count from server. Any change would reflect
        </Typography>
        <Typography variant="body1">Current count: {count}</Typography>
      </CardContent>
    </Card>
  );
}
