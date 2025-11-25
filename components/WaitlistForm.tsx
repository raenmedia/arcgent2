import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') {
          setStatus('error');
          setMessage('This email is already on the waitlist');
        } else {
          throw error;
        }
      } else {
        setStatus('success');
        setMessage('Successfully joined the waitlist!');
        setEmail('');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
      console.error('Error joining waitlist:', error);
    }
  };

  return (
    <div id="waitlist" className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            disabled={status === 'loading'}
            className="flex-1 px-4 py-3 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
          </button>
        </div>

        {message && (
          <p className={`text-sm text-center ${
            status === 'success' ? 'text-green-600' : 'text-red-600'
          }`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default WaitlistForm;
