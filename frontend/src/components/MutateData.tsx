import { graphql, useMutation } from "react-relay";
import { Button, Card, CardContent, Typography, Alert } from "@mui/material";
import { useCallback, useState } from "react";
import { MutateDataMutation } from "./__generated__/MutateDataMutation.graphql";

export default function MutateData() {
  const [commit, isInFlight] = useMutation<MutateDataMutation>(graphql`
    mutation MutateDataMutation {
      increaseCount(increase: 1)
    }
  `);

  const [message, setMessage] = useState<string | null>(null);

  const handleClick = useCallback(() => {
    commit({
      variables: {},
      onCompleted: (data) => {
        setMessage(`Count increased to ${data.increaseCount}`);
      },
      onError: (error) => {
        setMessage(error.message);
      },
    });
  }, [commit]);

  return (
    <Card>
      <CardContent sx={{ gap: 2 }}>
        <Typography variant="h5">Count</Typography>
        {message && <Alert severity="info">{message}</Alert>}
        <Typography variant="body1">Click to increase count</Typography>
        <Button variant="contained" onClick={handleClick} loading={isInFlight}>
          Increase
        </Button>
      </CardContent>
    </Card>
  );
}
