import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', course: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get in touch with us for course inquiries and enrollment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              We're here to help you achieve your learning goals. Reach out to us through any of the following channels:
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-gray-600">+91 87654 32109</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@grandmasters.co.in</p>
                  <p className="text-gray-600">admissions@grandmasters.co.in</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">
                    123 Education Street,<br />
                    Learning District,<br />
                    Knowledge City - 400001
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Office Hours</h3>
                  <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-600">Sunday: 10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-500">Interactive Map Coming Soon</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                  Course of Interest
                </label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">Select a course</option>
                  <optgroup label="Senior Courses">
                    <option value="ielts">IELTS Preparation</option>
                    <option value="pte">PTE Training</option>
                    <option value="spoken-english">Spoken English</option>
                    <option value="personality-development">Personality Development</option>
                    <option value="french-classes">French Classes</option>
                    <option value="student-visa">Student Visa Guidance</option>
                    <option value="interview-preparation">Interview Preparation</option>
                  </optgroup>
                  <optgroup label="Junior Courses">
                    <option value="abacus">Abacus</option>
                    <option value="public-speaking">Public Speaking</option>
                    <option value="handwriting">Handwriting Improvement</option>
                    <option value="french-kids">French for Kids</option>
                    <option value="vedic-maths">Vedic Mathematics</option>
                    <option value="reasoning">Reasoning & Logic</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Tell us about your requirements or any questions you have..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Quick Contact Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl text-center">
            <Phone className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">Speak directly with our counselors</p>
            <a href="tel:+919876543210" className="text-red-600 font-semibold hover:text-red-700">
              +91 98765 43210
            </a>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
            <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">Get detailed information via email</p>
            <a href="mailto:info@grandmasters.co.in" className="text-blue-600 font-semibold hover:text-blue-700">
              info@grandmasters.co.in
            </a>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
            <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600 mb-4">Come for a personal consultation</p>
            <span className="text-green-600 font-semibold">
              123 Education Street
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;