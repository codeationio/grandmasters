import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, BookOpen, Star, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Excellence in Training & Development
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Since 2008 • Over 14,000 Students Trained Successfully
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/senior-courses"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Senior Courses (16-40 years)
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/junior-courses"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors inline-flex items-center justify-center"
              >
                Junior Courses (5-15 years)
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">14,000+</h3>
              <p className="text-gray-600">Students Trained</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">16+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <BookOpen className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">13+</h3>
              <p className="text-gray-600">Courses Offered</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Star className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">98%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive courses designed for different age groups and learning objectives
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Senior Courses */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Senior Courses</h3>
              <p className="text-gray-700 mb-6">For students aged 16-40 years</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-red-600">IELTS Preparation</h4>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-red-600">PTE Training</h4>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-red-600">Spoken English</h4>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-red-600">French Classes</h4>
                </div>
              </div>
              <Link
                to="/senior-courses"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center"
              >
                Explore Senior Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Junior Courses */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Junior Courses</h3>
              <p className="text-gray-700 mb-6">For children aged 5-15 years</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-blue-600">Abacus</h4>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-blue-600">Public Speaking</h4>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-blue-600">Vedic Maths</h4>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-blue-600">French for Kids</h4>
                </div>
              </div>
              <Link
                to="/junior-courses"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                Explore Junior Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Grandmasters helped me achieve my IELTS target score of 8.5. The teaching methodology is excellent!"
              </p>
              <div className="font-semibold text-gray-900">- Priya Sharma</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "My daughter's confidence in public speaking has improved tremendously. Highly recommended!"
              </p>
              <div className="font-semibold text-gray-900">- Rajesh Kumar</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "The French classes are amazing! I can now communicate confidently in French."
              </p>
              <div className="font-semibold text-gray-900">- Anita Patel</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;