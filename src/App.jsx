import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";

function App() {
  return (
    <Box minH="100vh" bgImage='https://img.freepik.com/free-vector/blue-futuristic-waves-background-with-computer-code-technology_53876-119584.jpg?size=626&ext=jpg&ga=GA1.1.1870773219.1720349452&semt=ais_user' bgSize="cover"
    bgRepeat="no-repeat" color="gray.500" px={6} py={8}>
      <CodeEditor />
    </Box>
  );
}

export default App;
