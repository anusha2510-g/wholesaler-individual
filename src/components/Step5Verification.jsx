import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function Step5Verification({ formData, onNext, onBack }) {
  // Verification states
  const [emailState, setEmailState] = useState('initial'); // 'initial' | 'otp_sent' | 'verified'
  const [mobileState, setMobileState] = useState('initial'); // 'initial' | 'otp_sent' | 'verified'

  // OTP Inputs state
  const [emailOtp, setEmailOtp] = useState(['', '', '', '', '', '']);
  const [mobileOtp, setMobileOtp] = useState(['', '', '', '', '', '']);

  // Timer countdown
  const [emailTimer, setEmailTimer] = useState(55);
  const [showToast, setShowToast] = useState(false);

  // Input refs for auto-focus
  const emailOtpRefs = useRef([]);

  useEffect(() => {
    let interval = null;
    if (emailState === 'otp_sent' && emailTimer > 0) {
      interval = setInterval(() => {
        setEmailTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [emailState, emailTimer]);

  const handleSendEmailOtp = () => {
    setEmailState('otp_sent');
    setEmailTimer(55);
  };

  const handleSendMobileOtp = () => {
    setMobileState('verified');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  const handleVerifyEmail = () => {
    setEmailState('verified');
  };

  const handleOtpChange = (index, value, type) => {
    if (!/^\d*$/.test(value)) return;

    if (type === 'email') {
      const newOtp = [...emailOtp];
      newOtp[index] = value.slice(-1);
      setEmailOtp(newOtp);

      // Auto-focus next input
      if (value && index < 5) {
        emailOtpRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index, e, type) => {
    if (e.key === 'Backspace' && type === 'email' && !emailOtp[index] && index > 0) {
      emailOtpRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="relative">
      <div className="mb-6">
        <h2 className="text-base font-semibold text-[#0F172A]">Verification</h2>
        <p className="text-xs text-[#94A3B8] mt-0.5">Verify your contact details</p>
      </div>

      <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onNext(); }}>
        
        {/* ================= EMAIL VERIFICATION ================= */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <h3 className="text-xs font-semibold text-[#334155]">Email Verification</h3>
            {emailState === 'verified' && (
              <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
            )}
          </div>

          <p className="text-xs text-[#64748B] mb-3">
            {formData?.emailAddress || formData?.companyEmail || 'admin@abc.com'}
          </p>

          {/* INITIAL STATE: Send OTP Button */}
          {emailState === 'initial' && (
            <button
              type="button"
              onClick={handleSendEmailOtp}
              className="w-full py-2.5 border border-[#E2E8F0] rounded-xl text-xs font-medium text-[#334155] bg-white hover:bg-slate-50 transition-all cursor-pointer"
            >
              Send OTP
            </button>
          )}

          {/* OTP SENT STATE: Inputs + Resend Timer + Verify Button */}
          {emailState === 'otp_sent' && (
            <div className="space-y-4">
              <div className="w-full py-2.5 border border-[#E2E8F0] rounded-xl text-xs font-medium text-[#94A3B8] text-center bg-white">
                Resend in {emailTimer}s
              </div>

              <div>
                <label className="block text-xs text-[#334155] mb-2 font-medium">Enter 6-digit code</label>
                <div className="flex gap-2 justify-center my-2">
                  {emailOtp.map((digit, idx) => (
                    <input
                      key={idx}
                      ref={(el) => (emailOtpRefs.current[idx] = el)}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(idx, e.target.value, 'email')}
                      onKeyDown={(e) => handleKeyDown(idx, e, 'email')}
                      className="w-10 h-10 border border-[#E2E8F0] bg-[#F8FAFC] rounded-lg text-center text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-purple-500 focus:bg-white transition-all"
                    />
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={handleVerifyEmail}
                className="w-full py-2.5 bg-[#64748B] hover:bg-[#475569] text-white rounded-xl text-xs font-medium transition-all cursor-pointer shadow-sm"
              >
                Verify Email
              </button>
            </div>
          )}

          {/* VERIFIED STATE: Green Alert Box */}
          {emailState === 'verified' && (
            <div className="w-full py-3 px-4 bg-[#F0FDF4] border border-[#DCFCE7] rounded-xl flex items-center gap-2.5 text-xs text-[#16A34A] font-medium">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              Email verified successfully!
            </div>
          )}
        </div>

        {/* ================= MOBILE VERIFICATION ================= */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <h3 className="text-xs font-semibold text-[#334155]">Mobile Verification</h3>
            {mobileState === 'verified' && (
              <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
            )}
          </div>

          <p className="text-xs text-[#64748B] mb-3">
            {formData?.phoneNumberStep2 || formData?.phoneNumber || '+91 9999999999'}
          </p>

          {/* INITIAL STATE: Send OTP Button */}
          {mobileState !== 'verified' && (
            <button
              type="button"
              onClick={handleSendMobileOtp}
              className="w-full py-2.5 border border-[#E2E8F0] rounded-xl text-xs font-medium text-[#334155] bg-white hover:bg-slate-50 transition-all cursor-pointer"
            >
              Send OTP
            </button>
          )}

          {/* VERIFIED STATE: Green Alert Box */}
          {mobileState === 'verified' && (
            <div className="w-full py-3 px-4 bg-[#F0FDF4] border border-[#DCFCE7] rounded-xl flex items-center gap-2.5 text-xs text-[#16A34A] font-medium">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              Mobile number verified successfully!
            </div>
          )}
        </div>

        {/* Bottom Actions */}
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

      {/* Floating Bottom Right Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-white border border-slate-200 shadow-xl rounded-2xl px-4 py-3 flex items-center gap-2.5 text-xs font-medium text-[#0F172A] z-50 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-black fill-black text-white" />
          Mobile number verified successfully!
        </div>
      )}
    </div>
  );
}