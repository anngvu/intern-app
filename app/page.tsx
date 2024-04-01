'use client'
import TeamCard from "@/components/ui/teamcard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
 

export default function TeamCarousel() {

  // hard-code some teams here, though there can be another endpoint to fetch relevant teams
  let TEAMS = [ 3416772, ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {TEAMS.map((teamId) => (
          <CarouselItem key={teamId}>
            <div className="p-1">
              <TeamCard teamId={teamId} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </main>
  )
}
