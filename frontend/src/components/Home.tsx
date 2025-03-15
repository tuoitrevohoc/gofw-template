import {
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import QueryData from "./QueryData";
import MutateData from "./MutateData";
import SubscribeData from "./SubscribeData";

export default function Home() {
  return (
    <Stack
      sx={{ maxWidth: "600px", margin: "auto" }}
      spacing={2}
      direction="column"
      alignItems="stretch"
    >
      <Card>
        <CardContent>
          <Typography variant="h5">Welcome to GoFW</Typography>
          <Typography variant="body1" sx={{ marginBottom: 5 }}>
            GoFW is an operational ready web application framework for Go.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 5 }}>
            See examples below.
          </Typography>
        </CardContent>
        <CardActions>
          <a href="/graphql/playground">
            <Button color="primary" size="small">
              GraphQL Playground
            </Button>
          </a>
          <a href="https://github.com/tuoitrevohoc/gofw">
            <Button color="primary" size="small">
              Github
            </Button>
          </a>
        </CardActions>
      </Card>
      <QueryData />
      <MutateData />
      <SubscribeData />
    </Stack>
  );
}
