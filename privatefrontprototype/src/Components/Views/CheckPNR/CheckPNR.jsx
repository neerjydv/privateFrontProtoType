import React, { useState } from 'react';

const CheckPNR = () => {
  const [pnr, setPnr] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setPnr(e.target.value);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!pnr.trim()) {
      setError('Please enter a valid PNR.');
      return;
    }
    setLoading(true);
    setResult(null);
    setError('');
    try {
      // Replace with actual API call
      const response = await fetch(`/api/check-pnr?pnr=${encodeURIComponent(pnr)}`);
      if (!response.ok) throw new Error('PNR not found');
      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError('PNR not found or server error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="check-pnr-container">
      <h2>Check PNR Status</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={pnr}
          onChange={handleInputChange}
          placeholder="Enter PNR"
          maxLength={10}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Checking...' : 'Check'}
        </button>
      </form>
      {error && <div className="error">{error}</div>}
      {result && (
        <div className="pnr-result">
          <h3>PNR Details</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CheckPNR;