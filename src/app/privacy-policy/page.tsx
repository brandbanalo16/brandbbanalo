import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Brandbanalo",
  description:
    "Read Brandbanalo's Privacy Policy to understand how we collect, use, and protect your personal information when you use our digital marketing services.",
  keywords: [
    "Brandbanalo Privacy Policy",
    "Data Protection Policy",
    "User Privacy",
    "Personal Data",
  ],
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
      <div className="prose max-w-none">
        <p>At Brandbanalo, we are committed to protecting your privacy.</p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">1. Information We Collect</h2>
        <p>We may collect personal information such as your name, email address, and phone number when you use our contact forms.</p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">2. How We Use Information</h2>
        <p>We use the information we collect to provide and improve our services, and to communicate with you.</p>
        {/* Add more policy details as needed */}
      </div>
    </div>
  );
}
