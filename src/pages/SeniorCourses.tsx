import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, MessageCircle, User, Briefcase, Plane, Users } from 'lucide-react';

const SeniorCourses = () => {
  const [showQuickEnroll, setShowQuickEnroll] = React.useState(false);
  const [selectedCourse, setSelectedCourse] = React.useState('');

  const handleQuickEnroll = (courseTitle: string) => {
    setSelectedCourse(courseTitle);
    setShowQuickEnroll(true);
  };

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for your interest in ${selectedCourse}! We will contact you soon with more details.`);
    setShowQuickEnroll(false);
  };

  const courses = [
    {
      id: 'ielts',
      title: 'IELTS Preparation',
      icon: Globe,
      description: 'Comprehensive IELTS training for all four modules - Reading, Writing, Listening, and Speaking.',
      duration: '3-6 months',
      mode: 'Online/Offline',
      features: ['Mock Tests', 'Individual Attention', 'Score Guarantee', 'Flexible Timings']
    },
    {
      id: 'pte',
      title: 'PTE Training',
      icon: MessageCircle,
      description: 'Expert PTE coaching with computer-based practice sessions and personalized feedback.',
      duration: '2-4 months',
      mode: 'Online/Offline',
      features: ['AI-Based Practice', 'Score Prediction', 'Speaking Practice', 'Writing Templates']
    },
    {
      id: 'spoken-english',
      title: 'Spoken English',
      icon: MessageCircle,
      description: 'Improve your English speaking skills with confidence-building exercises and practical sessions.',
      duration: '3-6 months',
      mode: 'Online/Offline',
      features: ['Pronunciation Training', 'Grammar Focus', 'Conversation Practice', 'Accent Neutralization']
    },
    {
      id: 'personality-development',
      title: 'Personality Development',
      icon: User,
      description: 'Enhance your overall personality, communication skills, and professional presence.',
      duration: '2-3 months',
      mode: 'Online/Offline',
      features: ['Body Language', 'Confidence Building', 'Leadership Skills', 'Grooming Tips']
    },
    {
      id: 'french-classes',
      title: 'French Classes',
      icon: Globe,
      description: 'Learn French from beginner to advanced levels with native speaker guidance.',
      duration: '6-12 months',
      mode: 'Online/Offline',
      features: ['A1 to C2 Levels', 'Cultural Context', 'Interactive Sessions', 'Certification Prep']
    },
    {
      id: 'student-visa',
      title: 'Student Visa Guidance',
      icon: Plane,
      description: 'Complete assistance for student visa applications and documentation.',
      duration: '1-2 months',
      mode: 'Online/Offline',
      features: ['Document Preparation', 'Interview Training', 'University Selection', 'Visa Processing']
    },
    {
      id: 'interview-preparation',
      title: 'Interview Preparation',
      icon: Briefcase,
      description: 'Comprehensive interview training for job placements and admissions.',
      duration: '1-2 months',
      mode: 'Online/Offline',
      features: ['Mock Interviews', 'HR Round Prep', 'Technical Questions', 'Confidence Building']
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Senior Courses
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional development courses for students aged 16-40 years
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-4 text-red-800">
              <Users className="h-6 w-6" />
              <span className="font-semibold">Over 14,000 students trained since 2008</span>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            const IconComponent = course.icon;
            return (
              <div key={course.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <IconComponent className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 ml-3">{course.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Duration:</span>
                      <span className="font-semibold">{course.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Mode:</span>
                      <span className="font-semibold">{course.mode}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {course.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={`/course/${course.id}`}
                    className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center block"
                  >
                    Learn More
                  </Link>
                  <button
                    onClick={() => handleQuickEnroll(course.title)}
                    className="w-full mt-2 bg-white border-2 border-red-600 text-red-600 py-2 px-4 rounded-lg font-semibold hover:bg-red-50 transition-colors"
                  >
                    Quick Enroll
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Why Choose Grandmasters for Senior Courses?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Faculty</h3>
              <p className="text-gray-600 text-sm">Experienced trainers with proven track records</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Global Standards</h3>
              <p className="text-gray-600 text-sm">International curriculum and teaching methods</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Career Focus</h3>
              <p className="text-gray-600 text-sm">Courses designed for professional growth</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Flexible Learning</h3>
              <p className="text-gray-600 text-sm">Online and offline options available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Enrollment Modal */}
      {showQuickEnroll && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Quick Enrollment</h2>
                <button
                  onClick={() => setShowQuickEnroll(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              
              <div className="mb-4 p-3 bg-red-50 rounded-lg">
                <p className="text-red-800 font-medium">Course: {selectedCourse}</p>
              </div>
              
              <form onSubmit={handleEnrollSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name *"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowQuickEnroll(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeniorCourses;