import Image from 'next/image'

const Banner = ({title}) => {
  return (
    <section className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden flex items-center justify-start">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Using Next.js Image component with fill and priority */}
        <Image
          src="/assets/images/HeroBg.jpg"
          alt="Students in classroom"
          fill 
          priority 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">{title}</h1>
      </div>
    </section>
  )
}

export default Banner