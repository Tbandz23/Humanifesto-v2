import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageSquare, Eye } from "lucide-react"

const forums = [
  {
    category: "Cultural Anthropology",
    threads: [
      { title: "Rituals and ceremonies around the world", author: "Akira T.", replies: 67, views: 1542 },
      { title: "Discussion: The concept of 'gift economies'", author: "Isabella Q.", replies: 42, views: 876 },
      { title: "How globalization is affecting local traditions", author: "Priya S.", replies: 19, views: 543 },
    ],
  },
  {
    category: "Fieldwork & Ethnography",
    threads: [
      { title: "Share your most unexpected fieldwork discovery!", author: "Mateo R.", replies: 56, views: 1203 },
      { title: "Ethical dilemmas in participant observation", author: "Dr. Anya S.", replies: 34, views: 452 },
      { title: "Best practices for digital note-taking in the field?", author: "Lars E.", replies: 12, views: 145 },
    ],
  },
  {
    category: "Biological Anthropology",
    threads: [
      {
        title: "Primatology: Similarities in chimp and human social structures",
        author: "Sofia C.",
        replies: 21,
        views: 312,
      },
      { title: "Recent findings in human evolution", author: "Admin", replies: 8, views: 233 },
    ],
  },
  {
    category: "Medical Anthropology",
    threads: [
      { title: "Cultural approaches to healing and medicine", author: "Dr. Chen", replies: 38, views: 998 },
      { title: "The social determinants of health", author: "Elena C.", replies: 25, views: 765 },
      { title: "Case Study: Placebo effect across different cultures", author: "User123", replies: 15, views: 432 },
    ],
  },
]

export default function ForumsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tighter">Community Forums</h1>
        <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-lg">
          Engage in discussions, ask questions, and share knowledge with fellow members.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Accordion type="multiple" className="w-full">
          {forums.map((forum, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-xl font-serif hover:no-underline">{forum.category}</AccordionTrigger>
              <AccordionContent>
                <div className="divide-y">
                  {forum.threads.map((thread) => (
                    <div key={thread.title} className="flex items-center justify-between p-4 hover:bg-secondary">
                      <div>
                        <h4 className="font-semibold text-base hover:text-primary cursor-pointer">{thread.title}</h4>
                        <p className="text-sm text-muted-foreground">by {thread.author}</p>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MessageSquare className="h-4 w-4" />
                          <span>{thread.replies}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye className="h-4 w-4" />
                          <span>{thread.views}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
