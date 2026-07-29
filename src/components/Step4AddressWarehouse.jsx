import React from 'react';
import { ChevronDown, MapPin, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Step4AddressWarehouse({ formData, updateFormData, onNext, onBack }) {
  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div>
      {/* Title & Subtitle */}
      <div className="mb-6">
        <h2 className="text-base font-semibold text-[#0F172A]">Address & Warehouse</h2>
        <p className="text-xs text-[#94A3B8] mt-0.5">Where are you located?</p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Country / State / City Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          
          {/* Country */}
          <div>
            <label className="block text-xs font-semibold text-[#334155] mb-1.5">
              Country <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                name="country"
                required
                value={formData.country || ''}
                onChange={handleChange}
                className="w-full appearance-none px-4 py-2.5 bg-[#F1F5F9] border border-transparent rounded-xl text-xs text-[#94A3B8] focus:outline-none focus:bg-white focus:border-purple-500 transition-all cursor-pointer"
              >
                <option value="" disabled hidden>Select country</option>
                <option value="United States" className="text-slate-800">United States</option>
                <option value="Canada" className="text-slate-800">Canada</option>
                <option value="United Kingdom" className="text-slate-800">United Kingdom</option>
                <option value="India" className="text-slate-800">India</option>
              </select>
              <ChevronDown className="w-4 h-4 text-[#94A3B8] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* State / Province */}
          <div>
            <label className="block text-xs font-semibold text-[#334155] mb-1.5">
              State/Province <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="state"
              required
              placeholder="Enter state"
              value={formData.state || ''}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-[#F1F5F9] border border-transparent rounded-xl text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:bg-white focus:border-purple-500 transition-all"
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-xs font-semibold text-[#334155] mb-1.5">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="city"
              required
              placeholder="Enter city"
              value={formData.city || ''}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-[#F1F5F9] border border-transparent rounded-xl text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:bg-white focus:border-purple-500 transition-all"
            />
          </div>

        </div>

        {/* Street Address */}
        <div>
          <label className="block text-xs font-semibold text-[#334155] mb-1.5">
            Street Address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="streetAddress"
            required
            placeholder="Enter complete address"
            value={formData.streetAddress || ''}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-[#F1F5F9] border border-transparent rounded-xl text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:bg-white focus:border-purple-500 transition-all"
          />
        </div>

        {/* Section Divider / Title */}
        <div className="pt-2">
          <h3 className="text-xs font-semibold text-[#334155]">Warehouse Details (Optional)</h3>
        </div>

        {/* Warehouse Name */}
        <div>
          <label className="block text-xs font-semibold text-[#334155] mb-1.5">
            Warehouse Name
          </label>
          <input
            type="text"
            name="warehouseName"
            placeholder="e.g., Main Warehouse"
            value={formData.warehouseName || ''}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-[#F1F5F9] border border-transparent rounded-xl text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:bg-white focus:border-purple-500 transition-all"
          />
        </div>

        {/* Warehouse Address */}
        <div>
          <label className="block text-xs font-semibold text-[#334155] mb-1.5">
            Warehouse Address
          </label>
          <input
            type="text"
            name="warehouseAddress"
            placeholder="Enter warehouse address if different from company address"
            value={formData.warehouseAddress || ''}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-[#F1F5F9] border border-transparent rounded-xl text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:bg-white focus:border-purple-500 transition-all"
          />
        </div>

        {/* Map Preview Placeholder Box */}
        <div className="pt-1">
          <div className="w-full h-36 bg-[#F1F5F9] border border-dashed border-[#CBD5E1] rounded-2xl flex flex-col items-center justify-center text-[#94A3B8]">
            <MapPin className="w-6 h-6 mb-1 text-[#94A3B8]" />
            <span className="text-xs font-medium">Map preview (Pin location)</span>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-6">
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