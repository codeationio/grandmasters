import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 IELTS Speaking Tips for Band 8+',
      excerpt: 'Master the IELTS speaking section with these proven strategies that have helped thousands of students achieve their target scores.',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      category: 'IELTS',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Benefits of Abacus Learning for Children',
      excerpt: 'Discover how abacus training enhances mathematical abilities, concentration, and overall cognitive development in children.',
      author: 'Prof. Rajesh Kumar',
      date: '2024-01-12',
      category: 'Junior Courses',
      image: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: 'PTE vs IELTS: Which Test Should You Choose?',
      excerpt: 'A comprehensive comparison of PTE and IELTS exams to help you make the right choice for your study abroad goals.',
      author: 'Ms. Priya Sharma',
      date: '2024-01-10',
      category: 'Study Abroad',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Building Confidence in Public Speaking',
      excerpt: 'Learn effective techniques to overcome stage fright and become a confident public speaker at any age.',
      author: 'Mr. Amit Patel',
      date: '2024-01-08',
      category: 'Personality Development',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'French Language Learning: A Gateway to Global Opportunities',
      excerpt: 'Explore the career and personal benefits of learning French in today\'s interconnected world.',
      author: 'Mme. Catherine Dubois',
      date: '2024-01-05',
      category: 'Languages',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '5 min read'
    },
    {
      id: 6,
      title: 'Vedic Mathematics: Ancient Wisdom for Modern Learning',
      excerpt: 'Discover how ancient Indian mathematical techniques can revolutionize your child\'s approach to numbers and calculations.',
      author: 'Dr. Vikram Singh',
      date: '2024-01-03',
      category: 'Junior Courses',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '6 min read'
    }
  ];

  const categories = ['All', 'IELTS', 'Junior Courses', 'Study Abroad', 'Personality Development', 'Languages'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog & News
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Insights, tips, and updates from the world of education and training
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <div className="mb-12">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium ml-2">
                      {filteredPosts[0].category}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      <span className="mr-4">{filteredPosts[0].author}</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{new Date(filteredPosts[0].date).toLocaleDateString()}</span>
                    </div>
                    <button className="text-red-600 font-semibold hover:text-red-700 transition-colors inline-flex items-center">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-sm ml-auto">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-3">{post.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <button className="mt-4 text-red-600 font-semibold hover:text-red-700 transition-colors inline-flex items-center">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-red-100 mb-6">
            Subscribe to our newsletter for the latest educational insights and course updates
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;