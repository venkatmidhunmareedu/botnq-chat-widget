import { useChat } from '@ai-sdk/react';
import { Input } from '../ui/input'; // Assuming shadcn Input component
import { Button } from '../ui/button'; // Assuming shadcn Button component
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'; // Assuming shadcn Card components
import { ScrollArea } from '../ui/scroll-area'; // Assuming shadcn ScrollArea component
import MarkdownPreview from '@uiw/react-markdown-preview';
import { useEffect } from 'react';

type Props = {
    apiKey: string;
    appId: string;
    apiUrl?: string;
};

const Chat = ({ apiUrl, apiKey, appId }: Props) => {
    const { messages, isLoading,input, handleSubmit, handleInputChange } = useChat({
        body: {
            apiKey,
            appId,
        },
        api: apiUrl || "http://localhost:8080/api/chat",
        maxSteps: 10,
    });

    // Scroll to the bottom for new messages
    useEffect(() => {
        const scrollArea = document.querySelector('.scroll-area') as HTMLElement;
        if (scrollArea) {
            scrollArea.scrollTop = scrollArea.scrollHeight;
        }
    }, [messages]);

    return (
        <Card className="w-full mx-auto flex flex-col h-full">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Chat</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-hidden p-0">
                <ScrollArea className="h-full px-2 py-1">
                    {messages.length === 0 ? (
                        <div className="flex items-center justify-center h-full text-muted-foreground">
                            Start a conversation...
                        </div>
                    ) : (
                        messages.map((message, index) => (
                            <div
                                key={index}
                                className={`mb-3 p-2 rounded-lg max-w-[80%] ${message.role === 'user'
                                    ? 'ml-auto'
                                    : 'bg-gray-200 text-gray-800 mr-auto'
                                    }`}
                            >
                                <p className={`break-words text-xs ${message.role === 'user' ? ' text-end ' : ' text-start '}`}>
                                    <MarkdownPreview key={index} 
                                    style={{
                                        background: 'transparent',
                                        padding: '0',
                                        margin: '0',
                                        color: 'inherit',
                                        transition: "all 0.3s ease-in-out"
                                    }}
                                        className='text-xs'
                                        source={message.content || ""} />
                                </p>
                            </div>
                        ))
                    )}
                </ScrollArea>
            </CardContent>
            <CardFooter className="border-t">
                <form onSubmit={handleSubmit} className="flex w-full space-x-2">
                    <Input
                        className="flex-1"
                        placeholder="Type your message here..."
                        value={input}
                        onChange={handleInputChange}
                    />
                    <Button type="submit" disabled={isLoading}>Send</Button>
                </form>
            </CardFooter>
        </Card>
    );
};

export default Chat;