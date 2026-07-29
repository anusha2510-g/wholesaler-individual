import React from 'react';
import { Building2 } from 'lucide-react';

export default function RegistrationLayout({ currentStep, totalSteps = 6, children }) {
  const progressPercentage = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="min-h-screen bg-[#F4F5F8] font-sans flex flex-col items-center justify-start antialiased pb-16">
      
      {/* Top Banner Header */}
      <div 
        className="w-full pt-8 pb-10 px-6 md:px-12 text-white flex flex-col justify-between"
        style={{ background: 'linear-gradient(90deg, #2563EB 0%, #7C3AED 50%, #A855F7 100%)' }}
      >
        <div className="max-w-[760px] w-full mx-auto flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
              <Building2 className="w-6 h-6 text-[#2563EB]" />
            </div>
            <div>
              <h1 className="text-base font-semibold leading-tight text-white tracking-wide">
                Create Your Account
              </h1>
              <p className="text-xs text-white/80 font-normal">
                Join our B2B wholesale platform
              </p>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center text-xs text-white/90 mb-1.5 font-medium">
              <span>Step {currentStep} of {totalSteps}</span>
              <span>{progressPercentage}% Complete</span>
            </div>
            <div className="w-full bg-white/30 h-1.5 rounded-full overflow-hidden backdrop-blur-sm">
              <div 
                className="bg-black h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Card Container (Positioned completely below the header banner) */}
      <div className="w-full max-w-[760px] px-4 my-8">
        <div className="w-full bg-white rounded-2xl p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-100/80">
          {children}
        </div>
      </div>

    </div>
  );
}