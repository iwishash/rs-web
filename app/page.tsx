import Container from "./components/container";
import HomeHero from "./components/sections/hero/homeHero";

export default function Home() {
  return (
    <>
    <div className="pb-[16.4rem] md:pb-[25.6rem]">
      <Container className='pt-[6.4rem]'>
        <HomeHero />
      </Container>
    </div>
    </>
  )
}
