import { Alert, Box, Slide } from "@mui/material";
import React from "react";
import WebSocketService from "../services/WebSocketService";

const WS = WebSocketService.instance.socket;

const Status = () => {
  const [status, setStatus] = React.useState<boolean>(true);

  React.useEffect(() => {
    WS.on("connect", () => setStatus(true));
    WS.on("disconnect", () => setStatus(false));
  }, []);

  return (
    <Box sx={{ position: "absolute", top: 10, right: 10}}>
      <Slide in={!status} direction="left" mountOnEnter unmountOnExit>
        <Alert severity="error">Connection lost with the server.</Alert>
      </Slide>
      <Slide in={status} direction="left" mountOnEnter unmountOnExit>
        <Alert severity="success">Connection established.</Alert>
      </Slide>
    </Box>
  );
};

export default Status;
