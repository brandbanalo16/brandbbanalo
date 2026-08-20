import React from 'react';

export default function TermsPage() {
  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
      <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
      <div className="prose max-w-none">
        <p>Welcome to Brandbanalo. By accessing our website, you agree to these terms and conditions.</p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">1. Use of Website</h2>
        <p>The content of this website is for your general information and use only. It is subject to change without notice.</p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">2. Intellectual Property</h2>
        <p>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics.</p>
        {/* Add more terms as needed */}
      </div>
    </div>
  );
}
