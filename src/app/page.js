import Image from 'next/image'

export default function Home() {
  return (
<main>
		<div class="flex flex-col items-center">
			<h1 class="text-center text-5xl my-8 font-anton border-b border-black py-4">Kelly Caldwell and <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Kashmere</span></h1>
			<span class="inline-block text-3xl">Igniting the stage with 80's rock anthems</span>
		</div>
		<div>
			<img
			class="absolute"
			src="https://res.cloudinary.com/dwbwyzsyp/image/upload/v1686584345/Kashmere/IMG_0743-2-Resized_russny.jpg" />
			<p>Kashmere, an electrifying 8-11 piece show band, has been captivating audiences for nearly five years with their exceptional renditions of 80's rock classics. Drawing standing-room-only crowds at Lexington hotspots like Banners, Proud Mary, and more, as well as enthralling festival-goers throughout Kentucky, Kashmere is truly a force to be reckoned with.</p>
		</div>
		<div>
			Distinctly set apart by their phenomenal female lead, Kelly Caldwell, the band delivers album-quality music that leaves listeners spellbound. Kelly's powerful, pitch-perfect vocals are just the tip of the iceberg, as she's also a versatile multi-instrumentalist. Seamlessly transitioning from rhythm and bass guitar to trumpet, sax, and occasionally keys, Kelly brings an extraordinary level of talent to the stage. Complementing her prowess is a superb lineup of musicians, featuring a dazzling five-piece horn section.
		</div>
		<div>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/NT6M6YVth74" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

		</div>
		<div>
			<p>Kelly's remarkable accomplishments include opening for stars like Lee Ann Womack and Exile. In 2007, she graced New York's prestigious Carnegie Hall, playing fiddle in the Broadway-inspired production, Appalachian Christmas. Summer 2022 saw Kelly complete a memorable tour of Denmark, even performing for the Queen herself. Collaborating with an array of exceptional artists and songwriters, Kelly has also lent her talents as a studio musician to numerous projects in Nashville and Kentucky.</p>
		</div>
		<div>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/uZb5bMUh8ng" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
		</div>
		<div>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/8BnmP8wRUfQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
		</div>
	</main>
  )
}

