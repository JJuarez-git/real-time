import { Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import React from "react";
import WebSocketService from './services/WebSocketService';

const WSS = WebSocketService.instance

function App() {
  const theme = useTheme();
  return <div className="App">
    <Button variant="contained" color="success">Boton</Button>
  </div>;
}

export default App;
