import ChatWidget from "@/../lib/main";
import "./App.css";
import { MessageCircle } from "lucide-react";

function App() {
  return (
    <>
      <div className="w-screen h-screen bg-black">
        <ChatWidget
          apiKey="Hello"
          appId="fb2637d8-cc62-4ce1-a497-d0f1bbe22b2f"
          className="fixed bottom-10 right-10 z-50 rounded-full bg-accent p-2"
          icon={<MessageCircle className="w-6 h-6" />}
        />
      </div>
    </>
  );
}

export default App;
