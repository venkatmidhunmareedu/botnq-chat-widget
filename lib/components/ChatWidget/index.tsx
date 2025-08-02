import { Bot } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { cn } from "../../utils"
import Chat from "./Chat"



type ChatWidgetProps = {
    apiKey: string,
    appId: string,
    apiUrl?: string,
    className?: string,
    icon?: React.ReactNode
}

/**
 * ChatWidget
 * 
 * @param apiKey - The API key for the chat widget
 * @param appId - The app ID for the chat widget
 * @param apiUrl - The API URL for the chat widget (optional)
 * @param className - The class name for the chat widget (optional)
 * @param icon - The icon for the chat widget (optional)
 */

const ChatWidget = ({ apiKey, appId, apiUrl, className, icon }: ChatWidgetProps) => {
    return (
        <Popover>
            {/* TODO: Add icon */}
            <PopoverTrigger className={cn("", className)}>
                {icon || <Bot className="w-6 h-6" />}
            </PopoverTrigger>
            <PopoverContent className="w-[500px] h-[500px] mr-5 p-0">
                <Chat apiKey={apiKey} appId={appId} apiUrl={ apiUrl || import.meta.env.VITE_API_URL} />
            </PopoverContent>
        </Popover>
    )
}

export default ChatWidget