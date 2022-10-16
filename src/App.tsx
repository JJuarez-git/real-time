import React from "react";
import { Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Status from "./components/status";
import WebSocketService from './services/WebSocketService';
import ProductCard from "./components/product-card";

const WSS = WebSocketService.instance

function App() {
  const theme = useTheme();
  return <div className="App">
    <Status />
  </div>;
}

export default App;
