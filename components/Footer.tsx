'use client';

import { Heart, Code } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Chethiya Bandara
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Full Stack Developer passionate about creating exceptional Web/Mobile experiences 
              and scalable solutions.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <p className="text-gray-400 text-sm flex items-center mb-4 sm:mb-0">
                Made with <Heart className="h-4 w-4 text-red-500 mx-2" /> and{' '}
                <Code className="h-4 w-4 text-blue-500 mx-2" /> by Chethiya Bandara
              </p>
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}