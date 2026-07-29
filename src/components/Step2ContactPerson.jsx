import React from 'react';
import { User, Mail, Phone, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Step2ContactPerson({ formData, updateFormData, onNext, onBack }) {
  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-base font-semibold text-[#0F172A]">Owner/Contact Person</h2>
        <p className="text-xs text-[#94A3B8] mt-0.5">Primary contact information</p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-[#334155] mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              name="fullName"
              required
              placeholder="Enter full name"
              value={formData.fullName || ''}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2.5 bg-[#F1F5F9] border border-transparent rounded-xl text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:bg-white focus:border-purple-500 transition-all"
            />
          </div>
        </div>

        {/* Designation */}
        <div>
          <label className="block text-xs font-semibold text-[#334155] mb-1.5">
            Designation <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="designation"
            required
            placeholder="e.g., CEO, Founder, Director"
            value={formData.designation || ''}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-[#F1F5F9] border border-transparent rounded-xl text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:bg-white focus:border-purple-500 transition-all"
          />
        </div>

        {/* Email & Phone Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Email Address */}
          <div>
            <label className="block text-xs font-semibold text-[#334155] mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="email"
                name="emailAddress"
                required
                placeholder="your@email.com"
                value={formData.emailAddress || ''}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 bg-[#F1F5F9] border border-transparent rounded-xl text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:bg-white focus:border-purple-500 transition-all"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs font-semibold text-[#334155] mb-1.5">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="tel"
                name="phoneNumberStep2"
                required
                placeholder="+1 (555) 000-0000"
                value={formData.phoneNumberStep2 || ''}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 bg-[#F1F5F9] border border-transparent rounded-xl text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:bg-white focus:border-purple-500 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-8">
          <button
            type="button"
            onClick={onBack}
            className="bg-[#F1F5F9] hover:bg-slate-200 text-[#334155] text-xs font-medium px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all cursor-pointer active:scale-95"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back
          </button>

          <button
            type="submit"
            className="bg-[#090D16] hover:bg-slate-800 text-white text-xs font-medium px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-sm active:scale-95"
          >
            Continue
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </form>
    </div>
  );
}