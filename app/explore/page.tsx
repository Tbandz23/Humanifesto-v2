import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const explorePosts = [
  {
    title: "Midnight Sun in Norway",
    author: "Lars Eriksen",
    location: "Lofoten, Norway",
    imageQuery: "Dramatic landscape of Norwegian fjords under the midnight sun",
    imageSrc: "/placeholder.svg?width=400&height=300",
  },
  {
    title: "Street Food of Bangkok",
    author: "Priya Sharma",
    location: "Bangkok, Thailand",
    imageQuery: "A vibrant, steaming street food stall in Bangkok at night",
    imageSrc: "/placeholder.svg?width=400&height=300",
  },
  {
    title: "The Art of Fado in Lisbon",
    author: "Sofia Costa",
    location: "Lisbon, Portugal",
    imageQuery: "A soulful Fado singer performing in a dimly lit tavern in Lisbon",
    imageSrc: "/placeholder.svg?width=400&height=300",
  },
  {
    title: "Gaucho Culture in Argentina",
    author: "Mateo Rossi",
    location: "Pampas, Argentina",
    imageQuery: "An Argentinian gaucho on horseback against a vast, open landscape",
    imageSrc: "/placeholder.svg?width=400&height=300",
  },
  {
    title: "Weaving Traditions in Peru",
    author: "Isabella Quispe",
    location: "Cusco, Peru",
    imageQuery: "Close-up of skilled hands weaving colorful traditional Peruvian textiles",
    imageSrc: "/placeholder.svg?width=400&height=300",
  },
  {
    title: "A Day in the Life of a Maasai Warrior",
    author: "Ole Saitoti",
    location: "Maasai Mara, Kenya",
    imageQuery: "A portrait of a Maasai warrior in traditional attire looking over the savanna",
    imageSrc: "/placeholder.svg?width=400&height=300",
  },
]

export default function ExplorePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tighter">Explore Stories</h1>
        <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-lg">
          A tapestry of human experience, shared from every corner of the globe.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {explorePosts.map((post) => (
          <Card
            key={post.title}
            className="overflow-hidden border-2 border-transparent hover:border-primary transition-all duration-300 hover:shadow-xl bg-background"
          >
            <CardHeader className="p-0">
              <img
                src={post.imageSrc || "/placeholder.svg"}
                alt={post.imageQuery}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
            </CardHeader>
            <CardContent className="p-6">
              <h3 className="font-serif text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-sm text-muted-foreground">
                By {post.author} in {post.location}
              </p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button variant="outline" className="w-full bg-transparent">
                See Post <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
