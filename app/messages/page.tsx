import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { Search, Send, Pencil } from "lucide-react"

const conversations = [
  {
    name: "Elena Cruz",
    lastMessage: "That sounds amazing! I'd love to see...",
    time: "2h",
    avatar: "/placeholder.svg?width=40&height=40",
    fallback: "EC",
    active: true,
  },
  {
    name: "Akira Tanaka",
    lastMessage: "Thank you for sharing your story.",
    time: "1d",
    avatar: "/placeholder.svg?width=40&height=40",
    fallback: "AT",
    active: false,
  },
  {
    name: "Lars Eriksen",
    lastMessage: "Great question about fieldwork ethics.",
    time: "3d",
    avatar: "/placeholder.svg?width=40&height=40",
    fallback: "LE",
    active: false,
  },
  {
    name: "Dr. Anya Sharma",
    lastMessage: "The participant observation paper was insightful.",
    time: "5d",
    avatar: "/placeholder.svg?width=40&height=40",
    fallback: "AS",
    active: false,
  },
]

const chatHistory = [
  { from: "other", message: "Hi! I just saw your post about the Oaxacan family recipe. It looks incredible!" },
  { from: "self", message: "Thank you so much! It's been in my family for generations. I'm glad you liked it." },
  { from: "other", message: "That sounds amazing! I'd love to see more if you're willing to share." },
  { from: "self", message: "I'm planning to post about the mole preparation next week. Stay tuned!" },
]

export default function MessagesPage() {
  return (
    // The h-full class allows this component to fill the space provided by the main layout, preventing overlap.
    <div className="container mx-auto h-full p-0">
      <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] h-full border-x">
        {/* Conversation Sidebar */}
        <div className="flex flex-col border-r bg-secondary/50">
          <div className="p-4 border-b">
            <div className="flex justify-between items-center">
              <h2 className="font-serif text-2xl font-bold">Messages</h2>
              <Button variant="ghost" size="icon">
                <Pencil className="h-5 w-5" />
                <span className="sr-only">New Message</span>
              </Button>
            </div>
            <div className="relative mt-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-10 bg-background" />
            </div>
          </div>
          <ScrollArea className="flex-grow">
            <div className="flex flex-col">
              {conversations.map((convo) => (
                <div
                  key={convo.name}
                  className={cn(
                    "flex items-center gap-4 p-4 hover:bg-background cursor-pointer transition-colors",
                    convo.active && "bg-background",
                  )}
                >
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={convo.avatar || "/placeholder.svg"} alt={convo.name} />
                    <AvatarFallback>{convo.fallback}</AvatarFallback>
                  </Avatar>
                  <div className="flex-grow overflow-hidden">
                    <p className="font-semibold truncate">{convo.name}</p>
                    <p className="text-sm text-muted-foreground truncate">{convo.lastMessage}</p>
                  </div>
                  <span className="text-xs text-muted-foreground self-start">{convo.time}</span>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Chat Window */}
        <div className="flex flex-col h-full bg-background">
          <div className="flex items-center gap-4 p-4 border-b">
            <Avatar>
              <AvatarImage src="/placeholder.svg?width=40&height=40" alt="Elena Cruz" />
              <AvatarFallback>EC</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg">Elena Cruz</h3>
              <p className="text-sm text-muted-foreground">Active 2 hours ago</p>
            </div>
          </div>
          <ScrollArea className="flex-grow">
            <div className="p-6 space-y-4">
              {chatHistory.map((chat, index) => (
                <div
                  key={index}
                  className={cn("flex items-end gap-2", chat.from === "self" ? "justify-end" : "justify-start")}
                >
                  {chat.from === "other" && (
                    <Avatar className="h-8 w-8 self-end">
                      <AvatarImage src="/placeholder.svg?width=32&height=32" alt="Elena Cruz" />
                      <AvatarFallback>EC</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      "rounded-2xl p-3 max-w-lg", // Increased max-width
                      chat.from === "self"
                        ? "bg-primary text-primary-foreground rounded-br-none"
                        : "bg-secondary text-secondary-foreground rounded-bl-none",
                    )}
                  >
                    <p className="text-sm leading-relaxed">{chat.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="p-4 border-t bg-background">
            <div className="relative">
              <Input placeholder="Type a message..." className="pr-12 h-12 text-base" />
              <Button size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9">
                <Send className="h-5 w-5" />
                <span className="sr-only">Send Message</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
