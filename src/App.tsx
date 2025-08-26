import ChatWidget from "@/../lib/main";
import "./App.css";
import { MessageCircle } from "lucide-react";

function App() {
  return (
    <>
      <div className="w-screen h-screen bg-black">
        <ChatWidget
          apiKey="Hello"
          appId="aeb16236-45ee-4d53-9770-90baa27cfda8"
          className="fixed bottom-10 right-10 z-50 rounded-full bg-accent p-2"
          icon={<MessageCircle className="w-6 h-6" />}
        />
      </div>
    </>
  );
}

export default App;
