import React from 'react';
import { Upload, Info, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Step3BusinessLicense({ formData, updateFormData, onNext, onBack }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div>
      {/* Title & Subtitle */}
      <div className="mb-6">
        <h2 className="text-base font-semibold text-[#0F172A]">Business License</h2>
        <p className="text-xs text-[#94A3B8] mt-0.5">Upload your business registration documents</p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Upload Box */}
        <div>
          <label className="block text-xs font-semibold text-[#334155] mb-2">
            Business License Document <span className="text-red-500">*</span>
          </label>
          <div className="border border-[#E2E8F0] rounded-2xl py-12 px-4 flex flex-col items-center justify-center bg-white hover:bg-slate-50/80 transition-all cursor-pointer group">
            <Upload className="w-8 h-8 text-[#64748B] mb-3 group-hover:scale-110 transition-transform" />
            <p className="text-xs text-[#1E293B] font-medium mb-1">
              Drag & drop your business license here
            </p>
            <span className="text-[11px] text-[#94A3B8] mb-2">or click to browse</span>
            <span className="text-[10px] text-[#94A3B8]">Supported formats: PDF, JPG, PNG (Max 10MB)</span>
          </div>
        </div>

        {/* Document Requirements Blue Callout */}
        <div className="bg-[#F0F5FF] rounded-2xl p-5 border border-[#E0EAFF]/60 flex gap-3.5 items-start">
          <div className="w-5 h-5 rounded-full bg-[#3B82F6]/10 flex items-center justify-center shrink-0 mt-0.5">
            <Info className="w-3.5 h-3.5 text-[#2563EB]" />
          </div>
          <div className="space-y-1.5">
            <h4 className="text-xs font-semibold text-[#1E293B]">Document Requirements</h4>
            <ul className="text-[11px] text-[#64748B] space-y-1 list-disc pl-3.5">
              <li>Valid business registration or incorporation certificate</li>
              <li>Document should be clear and legible</li>
              <li>All information must be visible</li>
              <li>Document should not be expired</li>
            </ul>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-4">
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