import { Alert, Stack } from "@mui/material";

const DataNotFound = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error">Data not found</Alert>
    </Stack>
  );
};

export default DataNotFound;
