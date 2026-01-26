import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, MessageSquare, PenTool, Globe, Brain, Lightbulb } from 'lucide-react';

const JuniorCourses = () => {
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
      id: 'abacus',
      title: 'Abacus',
      icon: Calculator,
      description: 'Mental math training using the ancient abacus technique for faster calculations.',
      ageGroup: '5-15 years',
      duration: '6-12 months',
      features: ['Mental Calculation', 'Concentration Building', 'Speed & Accuracy', 'Brain Development']
    },
    {
      id: 'public-speaking',
      title: 'Public Speaking',
      icon: MessageSquare,
      description: 'Build confidence and communication skills through structured speaking programs.',
      ageGroup: '8-15 years',
      duration: '3-6 months',
      features: ['Confidence Building', 'Stage Presence', 'Voice Modulation', 'Presentation Skills']
    },
    {
      id: 'handwriting',
      title: 'Handwriting Improvement',
      icon: PenTool,
      description: 'Develop beautiful, legible handwriting with proper techniques and practice.',
      ageGroup: '5-12 years',
      duration: '3-4 months',
      features: ['Proper Grip', 'Letter Formation', 'Speed Writing', 'Cursive & Print']
    },
    {
      id: 'french-kids',
      title: 'French for Kids',
      icon: Globe,
      description: 'Fun and interactive French language learning designed specifically for children.',
      ageGroup: '6-15 years',
      duration: '6-12 months',
      features: ['Interactive Games', 'Cultural Learning', 'Basic Conversation', 'Fun Activities']
    },
    {
      id: 'vedic-maths',
      title: 'Vedic Mathematics',
      icon: Brain,
      description: 'Ancient Indian mathematical techniques for faster and easier calculations.',
      ageGroup: '8-15 years',
      duration: '4-6 months',
      features: ['Quick Calculations', 'Mental Math', 'Pattern Recognition', 'Problem Solving']
    },
    {
      id: 'reasoning',
      title: 'Reasoning & Logic',
      icon: Lightbulb,
      description: 'Develop logical thinking and reasoning abilities through structured exercises.',
      ageGroup: '8-15 years',
      duration: '4-6 months',
      features: ['Logical Thinking', 'Pattern Analysis', 'Problem Solving', 'Critical Thinking']
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Junior Courses
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Skill development programs for children aged 5-15 years
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-4 text-blue-800">
              <Brain className="h-6 w-6" />
              <span className="font-semibold">Building strong foundations for lifelong learning</span>
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
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 ml-3">{course.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Age Group:</span>
                      <span className="font-semibold">{course.ageGroup}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Duration:</span>
                      <span className="font-semibold">{course.duration}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {course.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={`/course/${course.id}`}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                  >
                    Learn More
                  </Link>
                  <button
                    onClick={() => handleQuickEnroll(course.title)}
                    className="w-full mt-2 bg-white border-2 border-blue-600 text-blue-600 py-2 px-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  >
                    Quick Enroll
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Benefits of Junior Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Brain Development</h3>
              <p className="text-gray-600 text-sm">Enhance cognitive abilities and mental agility</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Confidence Building</h3>
              <p className="text-gray-600 text-sm">Develop self-confidence and communication skills</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Creative Thinking</h3>
              <p className="text-gray-600 text-sm">Foster creativity and innovative problem-solving</p>
            </div>
          </div>
        </div>

        {/* Age-wise Recommendations */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Age-wise Course Recommendations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ages 5-8</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Abacus (Basic Level)</li>
                <li>• Handwriting Improvement</li>
                <li>• French for Kids (Beginner)</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ages 9-12</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Public Speaking</li>
                <li>• Vedic Mathematics</li>
                <li>• Reasoning & Logic</li>
                <li>• Abacus (Advanced)</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ages 13-15</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Advanced Public Speaking</li>
                <li>• French (Intermediate)</li>
                <li>• Advanced Reasoning</li>
                <li>• Competition Prep</li>
              </ul>
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
              
              <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-blue-800 font-medium">Course: {selectedCourse}</p>
              </div>
              
              <form onSubmit={handleEnrollSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Student Name *"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Parent/Guardian Name *"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="number"
                  placeholder="Student Age *"
                  required
                  min="5"
                  max="15"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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

export default JuniorCourses;