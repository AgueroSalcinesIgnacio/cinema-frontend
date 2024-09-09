import { Alert, Stack } from "@mui/material";

const PageNotFound = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error">Page not found</Alert>
    </Stack>
  );
};

export default PageNotFound;
