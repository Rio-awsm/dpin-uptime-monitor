"use client";

import { useState, useEffect } from 'react';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import { Zap, Moon, Sun } from 'lucide-react';

export function Appbar() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <Zap className="h-6 w-6 text-cyan-500" />
        <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">UptimeIO</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-6">
        <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition">Features</a>
        <a href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition">Pricing</a>
        <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition">About</a>
      </div>
      
      <div className="flex items-center gap-5">
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
        
        <SignedOut>
          <SignInButton mode="modal">
            <button className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        
        <SignedIn>
          <UserButton 
            appearance={{
              elements: {
                userButtonAvatarBox: "w-10 h-10 border-2 border-cyan-500"
              }
            }} 
          />
        </SignedIn>
      </div>
    </nav>
  );
}