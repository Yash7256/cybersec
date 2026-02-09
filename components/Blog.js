const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with AI Content Generation",
      excerpt: "Learn the basics of generating high-quality content with AI tools and best practices for implementation.",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "AI Basics"
    },
    {
      id: 2,
      title: "Advanced Techniques for Image Generation",
      excerpt: "Explore advanced prompt engineering techniques to create stunning visuals with AI image generators.",
      date: "December 10, 2024",
      readTime: "8 min read",
      category: "Image Generation"
    },
    {
      id: 3,
      title: "The Future of AI in Cybersecurity",
      excerpt: "How artificial intelligence is revolutionizing threat detection and response in modern cybersecurity.",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Cybersecurity"
    }
  ];

  return (
    <section id="blog" className="py-16" aria-labelledby="blog-title">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 id="blog-title" className="text-3xl font-bold">Latest from our blog</h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
            Insights, tutorials, and industry news from our team of experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-[#0b1220] border border-[#374151] rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-r from-[#0f172a] to-[#1e293b] flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="inline-block p-3 rounded-full bg-[#071026] mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#8B5CF6] to-[#3B82F6] rounded-full" />
                  </div>
                  <h3 className="text-lg font-bold">{post.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs px-2 py-1 bg-[#071026] rounded">{post.category}</span>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>
                <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{post.date}</span>
                  <a 
                    href="#" 
                    className="text-sm text-[#8B5CF6] hover:text-[#3B82F6] transition-colors"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block px-6 py-3 rounded-lg border border-gray-700 hover:bg-[#071026] transition-colors"
          >
            View all articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;