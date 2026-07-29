import React, { useState } from 'react';
import { FileText, CheckCircle2 } from 'lucide-react';

export default function Step6Review({ formData = {}, onEditStep, onCancel, onSubmit }) {
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [agreedAccurate, setAgreedAccurate] = useState(false);

  const canSubmit = agreedTerms && agreedAccurate;

  return (
    <div className="space-y-5">
      {/* Step Header */}
      <div>
        <h2 className="text-base font-semibold text-[#0F172A]">Review & Submit</h2>
        <p className="text-xs text-[#94A3B8] mt-0.5">Review your information before submitting</p>
      </div>

      <div className="space-y-4">
        {/* 1. Company Details */}
        <div className="border border-[#E2E8F0] rounded-xl p-4 bg-white relative">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xs font-semibold text-[#0F172A]">Company Details</h3>
            <button
              type="button"
              onClick={() => onEditStep && onEditStep(1)}
              className="text-xs text-[#64748B] hover:text-[#0F172A] font-medium transition-colors cursor-pointer"
            >
              Edit
            </button>
          </div>
          <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs">
            <div>
              <span className="text-[#94A3B8] block mb-0.5">Company Name</span>
              <span className="font-semibold text-[#0F172A]">{formData.companyName || 'ABC Ent.'}</span>
            </div>
            <div>
              <span className="text-[#94A3B8] block mb-0.5">Business Type</span>
              <span className="font-semibold text-[#0F172A]">{formData.businessType || 'Wholesaler'}</span>
            </div>
            <div>
              <span className="text-[#94A3B8] block mb-0.5">Email</span>
              <span className="font-semibold text-[#0F172A]">{formData.companyEmail || 'admin@abc.com'}</span>
            </div>
            <div>
              <span className="text-[#94A3B8] block mb-0.5">Phone</span>
              <span className="font-semibold text-[#0F172A]">{formData.phoneNumber || '+91 9999999999'}</span>
            </div>
          </div>
        </div>

        {/* 2. Owner/Contact Person */}
        <div className="border border-[#E2E8F0] rounded-xl p-4 bg-white relative">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xs font-semibold text-[#0F172A]">Owner/Contact Person</h3>
            <button
              type="button"
              onClick={() => onEditStep && onEditStep(2)}
              className="text-xs text-[#64748B] hover:text-[#0F172A] font-medium transition-colors cursor-pointer"
            >
              Edit
            </button>
          </div>
          <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs">
            <div>
              <span className="text-[#94A3B8] block mb-0.5">Name</span>
              <span className="font-semibold text-[#0F172A]">{formData.fullName || 'Arpita'}</span>
            </div>
            <div>
              <span className="text-[#94A3B8] block mb-0.5">Designation</span>
              <span className="font-semibold text-[#0F172A]">{formData.designation || 'Founder'}</span>
            </div>
            <div>
              <span className="text-[#94A3B8] block mb-0.5">Email</span>
              <span className="font-semibold text-[#0F172A]">{formData.emailAddress || 'arpi@abc.com'}</span>
            </div>
            <div>
              <span className="text-[#94A3B8] block mb-0.5">Phone</span>
              <span className="font-semibold text-[#0F172A]">{formData.phoneNumberStep2 || '+91 9999999999'}</span>
            </div>
          </div>
        </div>

        {/* 3. Business License */}
        <div className="border border-[#E2E8F0] rounded-xl p-4 bg-white relative">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xs font-semibold text-[#0F172A]">Business License</h3>
            <button
              type="button"
              onClick={() => onEditStep && onEditStep(3)}
              className="text-xs text-[#64748B] hover:text-[#0F172A] font-medium transition-colors cursor-pointer"
            >
              Edit
            </button>
          </div>
          <div className="flex items-center gap-3">
            <FileText className="w-7 h-7 text-[#0F172A] shrink-0" />
            <div className="text-xs">
              <span className="font-semibold text-[#0F172A] block">{formData.licenseFileName || 'SDG6_Poster.pdf'}</span>
              <span className="text-[#94A3B8]">{formData.licenseFileSize || '0.47 MB'}</span>
            </div>
          </div>
        </div>

        {/* 4. Address Details */}
        <div className="border border-[#E2E8F0] rounded-xl p-4 bg-white relative">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xs font-semibold text-[#0F172A]">Address Details</h3>
            <button
              type="button"
              onClick={() => onEditStep && onEditStep(4)}
              className="text-xs text-[#64748B] hover:text-[#0F172A] font-medium transition-colors cursor-pointer"
            >
              Edit
            </button>
          </div>
          <div className="text-xs text-[#64748B] space-y-0.5">
            <p className="font-semibold text-[#0F172A]">{formData.streetAddress || 'abc complex'}</p>
            <p>
              {formData.city || 'bangalore'}, {formData.state || 'karnataka'},
            </p>
            <p>{formData.country || 'IN'}</p>
          </div>
        </div>

        {/* 5. Verification Status */}
        <div className="border border-[#E2E8F0] rounded-xl p-4 bg-white">
          <h3 className="text-xs font-semibold text-[#0F172A] mb-2.5">Verification Status</h3>
          <div className="space-y-2 text-xs font-medium text-[#1E293B]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
              <span>Email Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
              <span>Mobile Verified</span>
            </div>
          </div>
        </div>

        {/* Agreement Checkboxes */}
        <div className="border border-[#E2E8F0] rounded-xl p-4 bg-white space-y-2.5 text-xs text-[#334155]">
          <label className="flex items-center gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={agreedTerms}
              onChange={(e) => setAgreedTerms(e.target.checked)}
              className="w-4 h-4 border-[#CBD5E1] rounded text-[#0F172A] focus:ring-0 cursor-pointer"
            />
            <span>
              I agree to the <span className="font-semibold">Terms and Conditions</span> and <span className="font-semibold">Privacy Policy</span>
            </span>
          </label>

          <label className="flex items-center gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={agreedAccurate}
              onChange={(e) => setAgreedAccurate(e.target.checked)}
              className="w-4 h-4 border-[#CBD5E1] rounded text-[#0F172A] focus:ring-0 cursor-pointer"
            />
            <span>I confirm that all information provided is accurate and complete.</span>
          </label>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex justify-between items-center pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="bg-[#F1F5F9] hover:bg-slate-200 text-[#334155] text-xs font-medium px-4 py-2.5 rounded-xl transition-all cursor-pointer active:scale-95"
        >
          Cancel
        </button>

        <button
          type="button"
          disabled={!canSubmit}
          onClick={onSubmit}
          className={`text-xs font-medium px-5 py-2.5 rounded-xl transition-all shadow-sm ${
            canSubmit
              ? 'bg-[#090D16] hover:bg-slate-800 text-white cursor-pointer active:scale-95'
              : 'bg-[#94A3B8] text-white cursor-not-allowed opacity-80'
          }`}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}