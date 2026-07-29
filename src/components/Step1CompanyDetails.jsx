import React from 'react';
import { Building2, Mail, Phone, Upload, ArrowRight, ChevronDown } from 'lucide-react';

export default function Step1CompanyDetails({ formData, updateFormData, onNext }) {
  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-base font-semibold text-slate-900">Company Details</h2>
        <p className="text-xs text-slate-400">Tell us about your company</p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Company Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Company Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              name="companyName"
              required
              placeholder="Enter your company name"
              value={formData.companyName || ''}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2.5 bg-[#F1F5F9] border-none rounded-xl text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
        </div>

        {/* Business Type */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Business Type <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              name="businessType"
              required
              value={formData.businessType || ''}
              onChange={handleChange}
              className="w-full appearance-none px-3.5 py-2.5 bg-[#F1F5F9] border-none rounded-xl text-xs text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              <option value="" disabled hidden>Select business type</option>
              <option value="distributor">Distributor</option>
              <option value="wholesaler">Wholesaler</option>
              <option value="retailer">Retailer</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Company Email <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                name="companyEmail"
                required
                placeholder="company@email.com"
                value={formData.companyEmail || ''}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 bg-[#F1F5F9] border-none rounded-xl text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                name="phoneNumber"
                required
                placeholder="+1 (555) 000-0000"
                value={formData.phoneNumber || ''}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 bg-[#F1F5F9] border-none rounded-xl text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>
        </div>

        {/* Logo Drag & Drop */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Company Logo (Optional)
          </label>
          <div className="border border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center bg-white hover:bg-slate-50 transition cursor-pointer">
            <Upload className="w-5 h-5 text-slate-500 mb-2" />
            <p className="text-xs text-slate-700 font-medium mb-1">
              Drag & drop your logo here or click to browse
            </p>
            <span className="text-[10px] text-slate-400">PNG, JPG up to 5MB</span>
          </div>
        </div>

        {/* Continue Button */}
        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="bg-[#090D16] hover:bg-slate-900 text-white text-xs font-medium px-5 py-2.5 rounded-lg flex items-center gap-1.5 transition cursor-pointer"
          >
            Continue
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </form>
    </div>
  );
}