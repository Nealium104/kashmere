import Nav from './components/Nav'
import Footer from './components/Footer'
import Image from 'next/image'
import TextCard from './components/TextCard'

export default function Home() {
  return (
    <>
    <Nav />
      <main className='font-mono bg-gradient-to-b from-purple-900/50 px-10'>
        <div className='sm:flex items-center'>
          <div className='flex flex-col items-center sm:w-full py-10 h-screen'>
            <h1 className='z-10 text-5xl text-center'>Kelly Caldwell and <span className='block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500'>Kashmere</span></h1>
            <div className=''>
              <Image
                className='rounded-full my-4' 
                src="/image/direct.jpg"
                layout="fill"
                objectFit='contain'
              />
            </div>
          </div>
        </div>
        <div className='md:flex justify-between items-center'>
          <Image
            className=''
            src="/image/family.jpg"
            width={600}
            height={600}
          />
          <div className="max-w-screen-md my-10 mx-8">
            <TextCard
              text="Kashmere, an electrifying 8-11 piece show band, has been captivating audiences for nearly five years with their exceptional renditions of 80's rock classics. Drawing standing-room-only crowds at Lexington hotspots like Banners, Proud Mary, and more, as well as enthralling festival-goers throughout Kentucky, Kashmere is truly a force to be reckoned with."
              bgColor="purple"
            />
          </div>
        </div>
        <div className='md:flex flex-row-reverse justify-between items-center my-32'>
          <Image 
            className=''
            src="/image/sideways.jpg"
            width={500}
            height={500}  
          />
          <div className="max-w-screen-sm my-10">
            <TextCard
            text="Distinctly set apart by their phenomenal female lead, Kelly Caldwell, the band delivers album-quality music that leaves listeners spellbound. Kelly's powerful, pitch-perfect vocals are just the tip of the iceberg, as she's also a versatile multi-instrumentalist. Seamlessly transitioning from rhythm and bass guitar to trumpet, sax, and occasionally keys, Kelly brings an extraordinary level of talent to the stage. Complementing her prowess is a superb lineup of musicians, featuring a dazzling five-piece horn section."
            bgColor="pink"
            />
          </div>
        </div>
        <div className='md:flex flex-row justify-between items-center my-32'>
          <Image 
            className=''
            src="https://res.cloudinary.com/dwbwyzsyp/image/upload/v1686584019/Kashmere/IMG_0758_sqcfha.jpg"
            width={500}
            height={500}  
          />
          <div className="max-w-screen-sm my-10">
            <TextCard
            text="Kelly's remarkable accomplishments include opening for stars like Lee Ann Womack and Exile. In 2007, she graced New York's prestigious Carnegie Hall, playing fiddle in the Broadway-inspired production, Appalachian Christmas. Summer 2022 saw Kelly complete a memorable tour of Denmark, even performing for the Queen herself. Collaborating with an array of exceptional artists and songwriters, Kelly has also lent her talents as a studio musician to numerous projects in Nashville and Kentucky."
            bgColor="purple"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}