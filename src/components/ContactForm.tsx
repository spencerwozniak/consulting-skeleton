// app/components/ContactForm.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import { FaChevronRight, FaRegNewspaper } from 'react-icons/fa';
import { AiOutlineCloudUpload, AiOutlineFile, AiOutlineCheck } from 'react-icons/ai';
import { FiMapPin, FiMail } from 'react-icons/fi';
import { HiXMark } from 'react-icons/hi2';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { useDropzone } from 'react-dropzone';

const allowedExtensions = [
  '.pdf', '.jpg', '.jpeg', '.png', '.gif', '.txt', '.csv'
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    organization: '',
    email: '',
    subject: '',
    message: '',
    website: '',
  });
  const [files, setFiles] = useState<File[]>([]);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [errors, setErrors] = useState<{[k: string]: string}>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Email validation
  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Dropzone config
  const onDrop = (accepted: File[], fileRejections: []) => {
    setFiles(prev => [...prev, ...accepted]);
    if (fileRejections.length) {
      // List the rejected files with reasons
      const rejectedNames = fileRejections
        .map(r =>
          `${r.file.name} (${r.errors.map((e) => e.message).join(', ')})`
        )
        .join(', ');
      setErrors(e => ({
        ...e,
        files: `Not allowed: ${rejectedNames}`,
      }));
    } else {
      setErrors(e => ({ ...e, files: '' }));
    }
  };
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: allowedExtensions.reduce((acc, ext) => {
      if (ext === '.jpg' || ext === '.jpeg') acc['image/jpeg'] = [];
      else if (ext === '.png') acc['image/png'] = [];
      else if (ext === '.gif') acc['image/gif'] = [];
      else if (ext === '.pdf') acc['application/pdf'] = [];
      else if (ext === '.txt') acc['text/plain'] = [];
      else if (ext === '.csv') acc['text/csv'] = [];
      return acc;
    }, {}),
    onDrop,
    multiple: true,
    maxSize: 10 * 1024 * 1024 // 10MB per file
  });

  // Remove file from list
  const handleRemoveFile = (i: number) =>
    setFiles(prev => prev.filter((_, idx) => idx !== i));

  // On form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const currErrors: { [k: string]: string } = {};
    if (!form.name) currErrors.name = 'Name is required';
    if (!form.organization) currErrors.organization = 'Organization is required';
    if (!form.email) currErrors.email = 'Email is required';
    else if (!validateEmail(form.email)) currErrors.email = 'Invalid email';
    if (!form.subject) currErrors.subject = 'Subject is required';
    if (!form.message) currErrors.message = 'Message is required';
    setErrors(currErrors);
    if (Object.keys(currErrors).length > 0) return;

    // Ensure reCAPTCHA is loaded
    if (!executeRecaptcha) {
      setErrors({ ...currErrors, recaptcha: 'reCAPTCHA is not ready. Please try again in a moment.' });
      return;
    }

    setSubmitting(true);
    setErrors({});
    setSuccess(false);

    try {
      // Run v3 reCAPTCHA (action should match your backend check!)
      const recaptchaToken = await executeRecaptcha('contact_form');
      if (!recaptchaToken) {
        setErrors({ recaptcha: 'reCAPTCHA verification failed. Please reload and try again.' });
        setSubmitting(false);
        return;
      }

      // Build FormData
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      files.forEach(f => fd.append('files', f));
      fd.append('g-recaptcha-response', recaptchaToken);

      const res = await fetch('/api/contact', {
        method: 'POST',
        body: fd,
      });

      if (res.ok) {
        setSuccess(true);
        setForm({ name: '', organization: '', email: '', subject: '', message: '', website: '' });
        setFiles([]);
      } else {
        setErrors({ form: 'Something went wrong. Please try again.' });
      }
    } catch (err) {
      console.log(err);
      setErrors({ form: 'Failed to send. Try again later.' });
    }
    setSubmitting(false);
  };

  const contactTitle = (
  <>
    <h2 className="text-white font-semibold mb-4 text-center md:text-left text-3xl md:text-4xl md:leading-tight">
      Contact Dr. Fombu
    </h2>
    <p className="text-neutral-400 text-center md:text-left">
      Whether you’re a founder, investor, policymaker, clinician, or journalist working at the intersection of medicine, technology, and longevity — Dr. Emmanuel Fombu welcomes your inquiry.
    </p>
  </>
  );


  return (
    <div id="contact" className="">
      <div className="max-w-5xl px-4 xl:px-0 py-6 mx-auto">
        {/* TITLE: Show only on mobile (block on small, hidden on md+) */}
        <div className="block md:hidden max-w-3xl mb-8">
          {contactTitle}
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
          {/* LEFT COLUMN */}
          <div className="order-2 space-y-14 md:order-1">
            {/* TITLE: Only on md+ */}
            <div className="hidden md:block max-w-3xl mb-8 lg:mb-10">
              {contactTitle}
            </div>
            {/* Email */}
            <div className="flex gap-x-5">
              <FiMail className="shrink-0 text-2xl text-neutral-500" />
              <div>
                <h4 className="text-white font-semibold">Email Me</h4>
                <a className="mt-1 text-neutral-400 text-sm hover:text-neutral-200" href="mailto:manny@drfombu.com" target="_blank" rel="noopener noreferrer">
                  manny@drfombu.com
                </a>
              </div>
            </div>
            {/* Address */}
            <div className="flex gap-x-5">
              <FiMapPin className="shrink-0 text-2xl text-neutral-500" />
              <div>
                <h4 className="text-white font-semibold">Location</h4>
                <address className="mt-1 text-neutral-400 text-sm not-italic">
                  New York & San Diego<br />
                  <i>Available Globally</i>
                </address>
              </div>
            </div>
            
            {/* Hiring */}
            <div className="flex gap-x-5">
              <FaRegNewspaper className="shrink-0 text-2xl text-neutral-500" />
              <div>
                <h4 className="text-white font-semibold">Media Kit & Speaker Info</h4>
                <p className="mt-1 text-neutral-400">Available for download</p>
                <p className="mt-2">
                  <a className="group inline-flex items-center gap-x-2 font-medium text-sm text-brand-blue decoration-2 hover:underline" href="/media-kit.pdf">
                    Download
                  </a>
                </p>
              </div>
            </div>
            
            {/* Calendly */}
            <div className="flex gap-x-5">
              <IoCalendarNumberOutline className="shrink-0 text-2xl text-neutral-500" />
              <div>
                <h4 className="text-white font-semibold">Book an Appointment</h4>
                <p className="mt-1 text-neutral-400">30- and 60-minute options available</p>
                <p className="mt-2">
                  <a className="group inline-flex items-center gap-x-2 font-medium text-sm text-brand-blue decoration-2 hover:underline" href="#calendly">
                    Schedule via Calendly
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* Right: Contact Form */}
          <div className="order-1 md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-4">
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    id="contact-name"
                    className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-neutral-600"
                    placeholder="Name"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    autoComplete="name"
                  />
                  <label htmlFor="contact-name" className="absolute top-0 left-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition-all duration-100 peer-focus:text-xs peer-focus:-translate-y-4 peer-focus:text-neutral-400 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:text-neutral-400">Name</label>
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>
                {/* Organization */}
                <div className="relative">
                  <input
                    type="text"
                    id="contact-organization"
                    className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-neutral-600"
                    placeholder="Organization"
                    value={form.organization}
                    onChange={e => setForm(f => ({ ...f, organization: e.target.value }))}
                    autoComplete="organization"
                  />
                  <label htmlFor="contact-organization" className="absolute top-0 left-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition-all duration-100 peer-focus:text-xs peer-focus:-translate-y-4 peer-focus:text-neutral-400 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:text-neutral-400">Organization</label>
                  {errors.organization && <p className="text-xs text-red-400 mt-1">{errors.organization}</p>}
                </div>
                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    id="contact-email"
                    className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-neutral-600"
                    placeholder="Email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    autoComplete="email"
                  />
                  <label htmlFor="contact-email" className="absolute top-0 left-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition-all duration-100 peer-focus:text-xs peer-focus:-translate-y-4 peer-focus:text-neutral-400 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:text-neutral-400">Email</label>
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>
                {/* Subject */}
                <div className="relative">
                  <input
                    type="text"
                    id="contact-subject"
                    className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-neutral-600"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                  />
                  <label htmlFor="contact-subject" className="absolute top-0 left-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition-all duration-100 peer-focus:text-xs peer-focus:-translate-y-4 peer-focus:text-neutral-400 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:text-neutral-400">Subject</label>
                  {errors.subject && <p className="text-xs text-red-400 mt-1">{errors.subject}</p>}
                </div>
                {/* Message */}
                <div className="relative">
                  <textarea
                    id="contact-message"
                    className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-neutral-600"
                    placeholder="Message"
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    rows={5}
                  />
                  <label htmlFor="contact-message" className="absolute top-0 left-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition-all duration-100 peer-focus:text-xs peer-focus:-translate-y-4 peer-focus:text-neutral-400 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:text-neutral-400">Message</label>
                  {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
                </div>
                {/* Website/LinkedIn */}
                <div className="relative">
                  <input
                    type="url"
                    id="contact-website"
                    className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-neutral-600"
                    placeholder="Website / LinkedIn (optional)"
                    value={form.website}
                    onChange={e => setForm(f => ({ ...f, website: e.target.value }))}
                  />
                  <label htmlFor="contact-website" className="absolute top-0 left-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition-all duration-100 peer-focus:text-xs peer-focus:-translate-y-4 peer-focus:text-neutral-400 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:text-neutral-400">Website / LinkedIn (optional)</label>
                </div>
                {/* File Upload */}
                <div className="relative">
                  <div
                    {...getRootProps()}
                    className={`flex items-center justify-center px-4 py-6 border-2 border-dashed rounded-lg cursor-pointer bg-neutral-800 ${isDragActive ? 'border-brand-blue' : 'border-neutral-600'}`}
                  >
                    <input {...getInputProps()} />
                    <AiOutlineCloudUpload className="text-2xl mr-3 text-neutral-400" />
                    <span className="text-neutral-400 text-sm">
                      {isDragActive ? "Drop files here..." : "Drag & drop or click to upload files (PDF, JPG, PNG, GIF, TXT, CSV)"}
                    </span>
                  </div>
                  {files.length > 0 && (
                    <ul className="mt-2 space-y-1">
                      {files.map((f, i) => (
                        <li key={i} className="flex items-center text-xs text-neutral-200">
                          <AiOutlineFile className="mr-2" />
                          <span className="truncate">{f.name}</span>
                          <button type="button" className="ml-2 cursor-pointer text-neutral-400 hover:text-red-400" onClick={() => handleRemoveFile(i)}>
                            <HiXMark />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                  {errors.files && <p className="text-xs text-red-400 mt-1">{errors.files}</p>}
                </div>
              </div>
              {errors.form && <p className="text-xs text-red-400 mt-2">{errors.form}</p>}
              {errors.recaptcha && <p className="text-xs text-red-400 mt-1 text-center">{errors.recaptcha}</p>}
              <div className="mt-6">
                <button
                  type="submit"
                  className="group inline-flex cursor-pointer items-center gap-x-2 py-2 px-5 bg-brand-blue font-medium text-sm text-neutral-800 rounded-full hover:bg-brightness-90 transition disabled:opacity-60 disabled:pointer-events-none"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : (
                    <>
                      Submit
                      <FaChevronRight className="" />
                    </>
                  )}
                </button>
                {success && (
                  <span className="ml-3 text-green-400 inline-flex items-center gap-1 mt-2">
                    <AiOutlineCheck className="text-lg" /> Sent!
                  </span>
                )}
                <p className="mt-3 text-xs text-gray-500">
                This form is protected by reCAPTCHA and the Google{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-medium hover:underline">Privacy Policy</a>
                  {' '}and{' '}
                  <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-medium hover:underline">Terms of Service</a>
                  {' '}apply.
                </p>
                <p className="mt-3 text-xs text-gray-500">
                  By submitting this form, you agree with Dr. Fombu’s{' '}
                  <Link rel="nofollow noopener noreferrer" className="text-gray-300 font-medium hover:underline" href="/legal/terms" target="_blank">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link rel="nofollow noopener noreferrer" className="text-gray-300 font-medium hover:underline" href="/legal/privacy" target="_blank">
                    Privacy Policy
                  </Link>.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
