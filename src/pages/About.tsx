import React from 'react';
import { Award, Users, BookOpen, Target, Heart, Star } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2008', event: 'Grandmasters founded with a vision to provide quality education' },
    { year: '2010', event: 'Launched IELTS and PTE preparation courses' },
    { year: '2012', event: 'Introduced junior courses for children aged 5-15' },
    { year: '2015', event: 'Reached 5,000 students milestone' },
    { year: '2018', event: 'Expanded to online learning platforms' },
    { year: '2020', event: 'Adapted to digital-first learning during pandemic' },
    { year: '2022', event: 'Celebrated 10,000+ successful students' },
    { year: '2024', event: 'Continuing excellence with 14,000+ students trained' }
  ];

  const team = [
    {
      name: 'Dr. Rajesh Kumar',
      position: 'Founder & Director',
      experience: '16+ years',
      specialization: 'IELTS, PTE, Educational Leadership',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Ms. Priya Sharma',
      position: 'Senior Faculty - English',
      experience: '12+ years',
      specialization: 'Spoken English, Personality Development',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Prof. Amit Patel',
      position: 'Head - Junior Courses',
      experience: '10+ years',
      specialization: 'Abacus, Vedic Maths, Child Psychology',
      image: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Grandmasters
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Excellence in Training & Development since 2008. We have been shaping futures and building careers for over 16 years.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To provide world-class training and development programs that empower individuals to achieve their personal and professional goals. We are committed to delivering excellence in education through innovative teaching methodologies and personalized attention.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <Heart className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To be the leading training institute that transforms lives through quality education. We envision a world where every individual has access to excellent learning opportunities that unlock their true potential and contribute to society's growth.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">14,000+</div>
              <div className="text-gray-600">Students Trained</div>
            </div>
            <div>
              <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">16+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div>
              <BookOpen className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">13+</div>
              <div className="text-gray-600">Courses Offered</div>
            </div>
            <div>
              <Star className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Founded in 2008 with a simple yet powerful vision - to provide quality education and training that makes a real difference in people's lives. What started as a small coaching center has grown into a comprehensive training institute that has successfully trained over 14,000 students across various disciplines.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our journey has been marked by continuous innovation, dedication to excellence, and an unwavering commitment to our students' success. We have evolved with changing times, embracing new technologies and teaching methodologies while maintaining our core values of quality, integrity, and personalized attention.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Milestones</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold min-w-[80px] text-center">
                    {milestone.year}
                  </div>
                  <div className="ml-6 flex-1">
                    <p className="text-gray-700 text-lg">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-red-600 font-semibold mb-2">{member.position}</p>
                  <p className="text-gray-600 mb-2">Experience: {member.experience}</p>
                  <p className="text-gray-700 text-sm">{member.specialization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Excellence</h3>
              <p className="text-red-100 text-sm">Striving for the highest standards in everything we do</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Integrity</h3>
              <p className="text-red-100 text-sm">Maintaining honesty and transparency in all our interactions</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Student-Centric</h3>
              <p className="text-red-100 text-sm">Putting our students' success at the center of everything</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Innovation</h3>
              <p className="text-red-100 text-sm">Continuously evolving our teaching methods and approaches</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;