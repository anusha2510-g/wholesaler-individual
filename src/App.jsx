import React, { useState } from 'react';
import RegistrationLayout from './layouts/RegistrationLayout';
import Step1CompanyDetails from './components/Step1CompanyDetails';
import Step2ContactPerson from './components/Step2ContactPerson';
import Step3BusinessLicense from './components/Step3BusinessLicense';
import Step4AddressWarehouse from './components/Step4AddressWarehouse';
import Step5Verification from './components/Step5Verification';
import Step6Review from './components/Step6Review';
import Dashboard from './components/Dashboard';
import ProductCatalog from './components/ProductCatalog';

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Tracks active dashboard view ('dashboard' | 'products' | 'orders' | etc.)
  const [activeView, setActiveView] = useState('dashboard'); 

  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, 6));
  const handleBack = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const updateFormData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  // Render view router after registration is complete
  if (isSubmitted) {
    switch (activeView) {
      case 'products':
        return (
          <ProductCatalog 
            formData={formData} 
            activeView={activeView} 
            setActiveView={setActiveView} 
          />
        );
      case 'dashboard':
      default:
        return (
          <Dashboard 
            formData={formData} 
            activeView={activeView} 
            setActiveView={setActiveView} 
          />
        );
    }
  }

  // Registration Flow
  return (
    <RegistrationLayout currentStep={currentStep} totalSteps={6}>
      {currentStep === 1 && (
        <Step1CompanyDetails
          formData={formData}
          updateFormData={updateFormData}
          onNext={handleNext}
        />
      )}

      {currentStep === 2 && (
        <Step2ContactPerson
          formData={formData}
          updateFormData={updateFormData}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {currentStep === 3 && (
        <Step3BusinessLicense
          formData={formData}
          updateFormData={updateFormData}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {currentStep === 4 && (
        <Step4AddressWarehouse
          formData={formData}
          updateFormData={updateFormData}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {currentStep === 5 && (
        <Step5Verification
          formData={formData}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {currentStep === 6 && (
        <Step6Review
          formData={formData}
          onEditStep={(step) => setCurrentStep(step)}
          onCancel={() => setCurrentStep(5)}
          onSubmit={handleSubmit}
        />
      )}
    </RegistrationLayout>
  );
}