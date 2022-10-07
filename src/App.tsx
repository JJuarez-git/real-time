import React from "react";
import { Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Status from "./components/status";
import WebSocketService from './services/WebSocketService';

const WSS = WebSocketService.instance

function App() {
  const theme = useTheme();
  return <div className="App">
    <Button variant="contained" color="success">Boton</Button>
    <Status />
  </div>;
}

export default App;
