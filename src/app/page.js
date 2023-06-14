import Nav from './components/Nav'
import Image from 'next/image'
import TextCard from './components/TextCard'

export default function Home() {
  return (
    <>
    <Nav />
      <main className='font-mono bg-gradient-to-b from-purple-900/50 px-10'>
        <div className='sm:flex items-center'>
          <div className='flex flex-col items-center sm:w-full py-10'>
            <h1 className='text-5xl text-center'>Kelly Caldwell and <span className='block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500'>Kashmere</span></h1>
            <Image
              className='rounded-full my-4 shadow-xl' 
              src="/image/direct.jpg"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className='md:flex justify-between'>
          <Image
            className='aspect-video'
            src="/image/family.jpg"
            width={500}
            height={500}
          />
          <div className="max-w-screen-md my-10">
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
      </main>
    </>
  )
}

        // <div className=''>
        //   <div className="flex flex-col items-center">
        //     <h1 className="text-center text-5xl my-8 font-anton py-4">Kelly Caldwell and <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Kashmere</span></h1>
        //     <span className="inline-block text-3xl text-center">Igniting the stage with 80's rock anthems</span>
        //   </div>
        //   <div className='md:flex justify-between items-center my-10'>
        //     <div className="max-w-screen-sm my-10 mx-8 bg-purple-800/50 rounded-xl">
        //       <TextCard
        //         text="Kashmere, an electrifying 8-11 piece show band, has been captivating audiences for nearly five years with their exceptional renditions of 80's rock classics. Drawing standing-room-only crowds at Lexington hotspots like Banners, Proud Mary, and more, as well as enthralling festival-goers throughout Kentucky, Kashmere is truly a force to be reckoned with."
        //         bgColor="purple"
        //         />
        //     </div>
        //   </div>
        // </div>
        // <iframe className='md:w-1/2 h-fit aspect-video mx-auto md:mr-8' src="https://www.youtube.com/embed/22cGg0g_6Sk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        // <div className='md:flex flex-row-reverse justify-between items-center my-32'>
        //   <div className="max-w-screen-sm my-10 mx-8 md:ml-auto bg-pink-800/50 rounded-xl">
        //     <TextCard
        //     text="Distinctly set apart by their phenomenal female lead, Kelly Caldwell, the band delivers album-quality music that leaves listeners spellbound. Kelly's powerful, pitch-perfect vocals are just the tip of the iceberg, as she's also a versatile multi-instrumentalist. Seamlessly transitioning from rhythm and bass guitar to trumpet, sax, and occasionally keys, Kelly brings an extraordinary level of talent to the stage. Complementing her prowess is a superb lineup of musicians, featuring a dazzling five-piece horn section." 
        //     bgColor="pink"
        //     />
        //   </div>
        //   <iframe className='md:w-1/2 h-fit aspect-video mx-auto md:mr-8' src="https://www.youtube.com/embed/uZb5bMUh8ng" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        // </div>
        
        // <div className="md:flex justify-between items-center my-32">
        //   <div className="max-w-screen-sm my-10 mx-8 md:ml-auto bg-purple-800/50 rounded-xl">
        //     <TextCard
        //     text="Kelly's remarkable accomplishments include opening for stars like Lee Ann Womack and Exile. In 2007, she graced New York's prestigious Carnegie Hall, playing fiddle in the Broadway-inspired production, Appalachian Christmas. Summer 2022 saw Kelly complete a memorable tour of Denmark, even performing for the Queen herself. Collaborating with an array of exceptional artists and songwriters, Kelly has also lent her talents as a studio musician to numerous projects in Nashville and Kentucky."
        //     bgColor="purple"
        //     />
        //   </div>
        //   <iframe className='md:w-1/2 h-fit aspect-video mx-auto md:mr-8' src="https://www.youtube.com/embed/NT6M6YVth74" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        // </div>
        // <div>
        //   <iframe className='md:w-1/2 h-fit aspect-video mx-auto' src="https://www.youtube.com/embed/8BnmP8wRUfQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        // </div>