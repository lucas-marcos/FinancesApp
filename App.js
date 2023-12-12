import Home from './src/pages/Home'
import { NativeBaseProvider, Box } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
         <Home />
    </NativeBaseProvider>
  );
}

