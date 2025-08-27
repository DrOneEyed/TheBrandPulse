"use client";
import { useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success("Thank you! We'll get back to you within 24 hours.");
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-dark_grey bg-opacity-30">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-white sm:text-40 text-30 font-medium mb-6">
              Start Your Brand Transformation
            </h2>
            <p className="text-muted text-opacity-60 text-18">
              Fill out the form below and we'll get back to you with a customized 
              proposal for your brand marketing needs.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-16 font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark_grey bg-opacity-50 border border-dark_border border-opacity-30 rounded-lg text-white placeholder-muted placeholder-opacity-60 focus:border-primary focus:outline-none"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-white text-16 font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark_grey bg-opacity-50 border border-dark_border border-opacity-30 rounded-lg text-white placeholder-muted placeholder-opacity-60 focus:border-primary focus:outline-none"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-16 font-medium mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark_grey bg-opacity-50 border border-dark_border border-opacity-30 rounded-lg text-white placeholder-muted placeholder-opacity-60 focus:border-primary focus:outline-none"
                  placeholder="Enter your company name"
                />
              </div>
              <div>
                <label className="block text-white text-16 font-medium mb-2">
                  Service Interest
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark_grey bg-opacity-50 border border-dark_border border-opacity-30 rounded-lg text-white focus:border-primary focus:outline-none"
                >
                  <option value="">Select a service</option>
                  <option value="brand-strategy">Brand Strategy</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="content-creation">Content Creation</option>
                  <option value="social-media">Social Media Management</option>
                  <option value="full-service">Full Service Package</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-white text-16 font-medium mb-2">
                Project Budget
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark_grey bg-opacity-50 border border-dark_border border-opacity-30 rounded-lg text-white focus:border-primary focus:outline-none"
              >
                <option value="">Select budget range</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k+">$50,000+</option>
              </select>
            </div>
            
            <div>
              <label className="block text-white text-16 font-medium mb-2">
                Project Details *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-dark_grey bg-opacity-50 border border-dark_border border-opacity-30 rounded-lg text-white placeholder-muted placeholder-opacity-60 focus:border-primary focus:outline-none resize-vertical"
                placeholder="Tell us about your project, goals, and any specific requirements..."
              />
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-primary border border-primary rounded-lg text-21 font-medium hover:bg-transparent hover:text-primary text-darkmode py-3 px-12 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;