import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const trendingPosts = [
  {
    title: "Morning Rituals in Kyoto",
    author: "Akira Tanaka",
    location: "Kyoto, Japan",
    imageQuery: "A serene Japanese tea ceremony with soft morning light",
    imageSrc: "/placeholder.svg?width=400&height=300",
  },
  {
    title: "The Colors of a Marrakesh Souk",
    author: "Fatima Al-Fassi",
    location: "Marrakesh, Morocco",
    imageQuery: "Vibrant spices and textiles in a bustling Moroccan market",
    imageSrc: "/placeholder.svg?width=400&height=300",
  },
  {
    title: "A Family Recipe from Oaxaca",
    author: "Elena Cruz",
    location: "Oaxaca, Mexico",
    imageQuery: "Close-up of hands preparing traditional mole ingredients",
    imageSrc: "/placeholder.svg?width=400&height=300",
  },
]

export default function HomePage() {
  return (
    <>
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="/placeholder.svg?width=1920&height=1080"
          alt="A joyful candid moment between two people from different cultures"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container px-4 md:px-6">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <h1 className="font-serif text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none">
                We are all human.
              </h1>
              <p className="max-w-[600px] mx-auto md:text-xl text-balance">
                The Humanifesto is a global canvas for sharing and discovering the anthropological moments that connect
                us. See the world through others' eyes.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Button size="lg" asChild>
                <Link href="/join">Join the Movement</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/explore">Explore Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-24 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-5xl">Trending Today</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover stories from around the world that are capturing our community's imagination.
              </p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
            {trendingPosts.map((post) => (
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
      </section>
    </>
  )
}
