import React from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Users, Award, CheckCircle, Star, Phone, Mail } from 'lucide-react';

const CourseDetail = () => {
  const { courseId } = useParams();
  const [showEnrollForm, setShowEnrollForm] = React.useState(false);
  const [enrollmentData, setEnrollmentData] = React.useState({
    name: '',
    email: '',
    phone: '',
    preferredMode: 'offline',
    message: ''
  });

  // Course data (in a real app, this would come from an API)
  const courseData: { [key: string]: any } = {
    'ielts': {
      title: 'IELTS Preparation',
      category: 'Senior Course',
      duration: '3-6 months',
      mode: 'Online/Offline',
      description: 'Comprehensive IELTS training program designed to help you achieve your target band score. Our expert trainers provide personalized attention and proven strategies for all four modules.',
      modules: [
        'Reading Comprehension',
        'Writing Task 1 & 2',
        'Listening Skills',
        'Speaking Practice'
      ],
      features: [
        'Mock Tests with detailed feedback',
        'Individual attention and doubt clearing',
        'Score guarantee program',
        'Flexible batch timings',
        'Study materials included',
        'Online practice portal access'
      ],
      testimonials: [
        {
          name: 'Priya Sharma',
          score: 'Band 8.5',
          text: 'Excellent coaching! The teachers are very supportive and the study material is comprehensive.'
        },
        {
          name: 'Rahul Gupta',
          score: 'Band 7.5',
          text: 'Got my desired score in the first attempt. Highly recommend Grandmasters for IELTS preparation.'
        }
      ],
      faqs: [
        {
          question: 'What is the minimum score guarantee?',
          answer: 'We provide a score guarantee based on your initial assessment. Typically, we guarantee a minimum improvement of 1-1.5 bands.'
        },
        {
          question: 'How many mock tests are included?',
          answer: 'The course includes 10+ full-length mock tests with detailed performance analysis and feedback.'
        },
        {
          question: 'Can I switch between online and offline classes?',
          answer: 'Yes, we offer flexible learning options. You can switch between online and offline modes based on your convenience.'
        }
      ]
    },
    'abacus': {
      title: 'Abacus',
      category: 'Junior Course',
      duration: '6-12 months',
      mode: 'Online/Offline',
      description: 'Mental math training using the ancient abacus technique. This course helps children develop faster calculation skills and improves concentration and memory.',
      modules: [
        'Basic Abacus Operations',
        'Mental Calculation Techniques',
        'Speed Building Exercises',
        'Advanced Problem Solving'
      ],
      features: [
        'Age-appropriate teaching methods',
        'Individual progress tracking',
        'Regular competitions and assessments',
        'Certificate upon completion',
        'Parent progress reports',
        'Fun learning activities'
      ],
      testimonials: [
        {
          name: 'Mrs. Patel (Parent)',
          score: 'Excellent Results',
          text: 'My son can now calculate faster than a calculator! His concentration has improved significantly.'
        },
        {
          name: 'Mr. Singh (Parent)',
          score: 'Highly Satisfied',
          text: 'The teachers are patient and understanding. My daughter loves attending the classes.'
        }
      ],
      faqs: [
        {
          question: 'What age is best to start abacus?',
          answer: 'Children between 5-12 years old benefit the most from abacus training as their brain is most receptive to new learning patterns.'
        },
        {
          question: 'Will my child need to carry an abacus everywhere?',
          answer: 'No, the goal is to develop mental calculation abilities. After training, children can perform calculations mentally without the physical abacus.'
        },
        {
          question: 'How long does it take to see results?',
          answer: 'Most children show noticeable improvement in calculation speed and accuracy within 2-3 months of regular practice.'
        }
      ]
    }
  };

  const course = courseData[courseId || ''] || courseData['ielts'];

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle enrollment submission
    alert(`Thank you ${enrollmentData.name}! Your enrollment request for ${course.title} has been submitted. We will contact you soon.`);
    setShowEnrollForm(false);
    setEnrollmentData({ name: '', email: '', phone: '', preferredMode: 'offline', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setEnrollmentData({
      ...enrollmentData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white rounded-2xl p-8 mb-12">
          <div className="max-w-4xl">
            <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
              {course.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
            <p className="text-xl text-red-100 mb-6">{course.description}</p>
            
            <div className="flex flex-wrap gap-6 text-red-100">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>{course.mode}</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                <span>Certificate Included</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Modules */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Modules</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.modules.map((module: string, index: number) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="font-medium text-gray-900">{module}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div className="space-y-3">
                {course.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Testimonials</h2>
              <div className="space-y-6">
                {course.testimonials.map((testimonial: any, index: number) => (
                  <div key={index} className="border-l-4 border-red-600 pl-6">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 font-semibold text-green-600">{testimonial.score}</span>
                    </div>
                    <p className="text-gray-700 mb-2">"{testimonial.text}"</p>
                    <p className="font-semibold text-gray-900">- {testimonial.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {course.faqs.map((faq: any, index: number) => (
                  <div key={index}>
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Enrollment Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enroll Now</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-semibold">{course.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Mode:</span>
                  <span className="font-semibold">{course.mode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Certificate:</span>
                  <span className="font-semibold">Yes</span>
                </div>
              </div>
              
              <button 
                onClick={() => setShowEnrollForm(true)}
                className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors mb-4"
              >
                Enroll Now
              </button>
              
              <div className="text-center text-gray-600 text-sm mb-4">
                Or contact us for more information
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+91 98887 00083</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>rahul.lee@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Why Choose Grandmasters?</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>16+ years of experience</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>14,000+ students trained</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Expert faculty</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Flexible timings</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Individual attention</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enrollment Modal */}
      {showEnrollForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Enroll in {course.title}</h2>
                <button
                  onClick={() => setShowEnrollForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              
              <form onSubmit={handleEnrollSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={enrollmentData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={enrollmentData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={enrollmentData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="preferredMode" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Mode
                  </label>
                  <select
                    id="preferredMode"
                    name="preferredMode"
                    value={enrollmentData.preferredMode}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="offline">Offline Classes</option>
                    <option value="online">Online Classes</option>
                    <option value="hybrid">Both Online & Offline</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={enrollmentData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Any specific requirements or questions..."
                  ></textarea>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowEnrollForm(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Submit Enrollment
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

export default CourseDetail;