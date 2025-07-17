import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      image: "/assets/images/blogimg1.jpg",
      title: "Understanding React Components",
      alt: "React Atom Icon",
      gradient: "from-purple-500 to-blue-500",
    },
    {
      id: 2,
      image: "/assets/images/blogimg2.jpg",
      title: "A Guide to Modern Web Development",
      alt: "Web Development Illustration",
      gradient: "from-blue-600 to-purple-600",
    },
    {
      id: 3,
      image: "/assets/images/blogimg3.jpeg",
      title: "The Importance of UI/UX Design",
      alt: "UI/UX Design Illustration",
      gradient: "from-blue-700 to-cyan-500",
    },
  ]
  return (
    <>

      <section className="py-16 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className={`relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group`}>
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient}`} />


                <div className="relative w-full h-64 md:h-72 lg:h-80 flex items-center justify-center p-4">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    width={300} 
                    height={300}
                    className="object-contain z-10 transition-transform duration-300 group-hover:scale-105 opacity-60"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white z-20">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight">{post.title}</h3>
                  <Link
                    href="/blog-detail"
                    className="inline-block bg-white text-gray-800 hover:bg-gray-100 px-6 py-2 rounded-full font-medium transition-colors duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
       
        </div>
      </section>

    </>

  )
}

export default BlogSection
