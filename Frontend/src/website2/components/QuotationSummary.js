import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jsPDF } from 'jspdf';

const QuotationSummary = ({ formData, prevStep, updateData }) => {
  const [quotation, setQuotation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [pricingData, setPricingData] = useState(null);

  // Safe data access function
  const getSafeValue = (obj, path, defaultValue) => {
    if (!obj) return defaultValue;
    return path.split('.').reduce((acc, part) => {
      if (acc === null || acc === undefined) return defaultValue;
      return acc[part];
    }, obj) || defaultValue;
  };

  // Initialize safe form data with extensive fallbacks
  const safeFormData = {
    projectInfo: getSafeValue(formData, 'projectInfo', {
      area: 0,
      perimeter: 0,
      sports: [],
      constructionType: '',
      sport: '',
      unit: 'meters',
      length: 0,
      width: 0
    }),
    requirements: getSafeValue(formData, 'requirements', {
      subbase: { 
        type: '', 
        edgewall: false, 
        drainage: { required: false, slope: 0 } 
      },
      flooring: { type: '' },
      fencing: { required: false, type: '', length: 0 },
      lighting: { required: false, type: 'standard', poles: 0, lightsPerPole: 2 },
      equipment: [],
      courtRequirements: {}
    }),
    clientInfo: getSafeValue(formData, 'clientInfo', {
      name: '',
      email: '',
      phone: '',
      address: '',
      purpose: ''
    })
  };

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/pricing');
        setPricingData(response.data);
      } catch (error) {
        console.error('Error fetching pricing data:', error);
      }
    };
    fetchPricing();
  }, []);

  const formatIndianRupees = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const validateForm = () => {
    const clientInfo = safeFormData.clientInfo;
    
    // Validate client info
    if (!clientInfo.name?.trim()) {
      setError('Please complete client information in the first step');
      return false;
    }
    if (!clientInfo.email?.trim()) {
      setError('Please complete client information in the first step');
      return false;
    }
    if (!clientInfo.phone?.trim()) {
      setError('Please complete client information in the first step');
      return false;
    }
    if (!clientInfo.purpose?.trim()) {
      setError('Please complete client information in the first step');
      return false;
    }

    // Check if we have multiple courts
    const courtRequirements = safeFormData.requirements.courtRequirements;
    const hasMultipleCourts = courtRequirements && Object.keys(courtRequirements).length > 0;
    
    if (hasMultipleCourts) {
      // Validate each court
      for (const courtKey in courtRequirements) {
        const court = courtRequirements[courtKey];
        
        if (!court.subbase || !court.subbase.type) {
          setError(`Please select subbase type for ${court.sport || 'Unknown'} Court ${court.courtNumber || '1'}`);
          return false;
        }
        if (!court.flooring || !court.flooring.type) {
          setError(`Please select flooring type for ${court.sport || 'Unknown'} Court ${court.courtNumber || '1'}`);
          return false;
        }
      }
    } else {
      // Validate single court
      if (!safeFormData.requirements.subbase || !safeFormData.requirements.subbase.type) {
        setError('Please select subbase type in the requirements section');
        return false;
      }
      if (!safeFormData.requirements.flooring || !safeFormData.requirements.flooring.type) {
        setError('Please select flooring type in the requirements section');
        return false;
      }
    }

    setError('');
    return true;
  };

  const generateQuotation = async () => {
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const completeFormData = {
        clientInfo: safeFormData.clientInfo,
        projectInfo: safeFormData.projectInfo,
        requirements: safeFormData.requirements
      };

      const response = await axios.post('http://localhost:5000/api/quotations', completeFormData);
      const newQuotation = response.data;
      
      setQuotation(newQuotation.quotation || newQuotation);
      
    } catch (error) {
      console.error('Error generating quotation:', error);
      const errorMessage = error.response?.data?.message || 'Error generating quotation. Please check your inputs and try again.';
      setError(errorMessage);
    }
    setLoading(false);
  };
  return (
    <div className="form-container">
      <h2>Quotation Summary</h2>
      
      {error && (
        <div className="error-message">
          <strong>Error:</strong> {error}
        </div>
      )}
      
      {quotation ? (
        <div className="quotation-result">
          <div className="success-message">
            <h3>✅ Quotation Generated Successfully!</h3>
            <p><strong>Quotation Number:</strong> {quotation.quotationNumber}</p>
            <p><strong>Client:</strong> {quotation.clientInfo.name}</p>
            <p><strong>Email:</strong> {quotation.clientInfo.email}</p>
            <p><strong>Total Amount:</strong> ₹{quotation.pricing?.grandTotal?.toLocaleString() || '0'}</p>
            <p className="info-note">
              Within 24 hours, we will send the detailed quotation to your email address.
            </p>
          </div>
          
          <div className="button-group">
            {/* <button type="button" onClick={downloadPDF} className="btn-primary">
              📄 Download PDF
            </button> */}
            <button type="button" onClick={() => window.location.reload()} className="btn-secondary">
              🏠 Create New Quotation
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="section">
            <h3>Project Overview</h3>
            <div className="summary-details">
              <div className="info-grid">
                <div><strong>Client Name:</strong> {safeFormData.clientInfo.name || 'Not provided'}</div>
                <div><strong>Email:</strong> {safeFormData.clientInfo.email || 'Not provided'}</div>
                <div><strong>Phone:</strong> {safeFormData.clientInfo.phone || 'Not provided'}</div>
                <div><strong>Construction Type:</strong> {safeFormData.projectInfo.constructionType || 'Not selected'}</div>
                <div><strong>Sports:</strong> {safeFormData.projectInfo.sports?.map(s => s.sport).join(', ') || 'Not selected'}</div>
                <div><strong>Area:</strong> {safeFormData.projectInfo.area || 0} sq. meters</div>
              </div>
            </div>
          </div>

          <div className="button-group">
            <button type="button" onClick={prevStep} className="btn-secondary">
              Back to Requirements
            </button>
            <button 
              type="button" 
              onClick={generateQuotation} 
              className="btn-primary"
              disabled={loading}
            >
              {loading ? 'Generating Quotation...' : 'Generate Quotation'}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default QuotationSummary;