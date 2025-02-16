import React from 'react';

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full md:static bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 z-40">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-800 dark:text-gray-100 text-sm">
            &copy; {new Date().getFullYear()} Mozi. All rights reserved.
          </div>
          <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0 space-y-4 md:space-y-0 md:space-x-6">
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.954 4.569c-.885.39-1.83.654-2.825.775a4.959 4.959 0 002.163-2.723 9.864 9.864 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482A13.978 13.978 0 011.671 3.149a4.917 4.917 0 001.523 6.573 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.085 4.928 4.928 0 004.604 3.417A9.867 9.867 0 010 19.54a13.951 13.951 0 007.548 2.212c9.056 0 14.01-7.496 14.01-13.986 0-.21 0-.423-.015-.634a9.935 9.935 0 002.407-2.549z" />
                </svg>
              </a>
              <a
                href="https://github.com/IamJayPrakash/mozi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.478 2 12.005c0 4.418 2.867 8.166 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.646.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.944 0-1.091.39-1.984 1.029-2.682-.103-.254-.447-1.275.098-2.656 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.853.004 1.711.115 2.512.338 1.909-1.295 2.748-1.026 2.748-1.026.547 1.381.203 2.402.1 2.656.64.698 1.028 1.591 1.028 2.682 0 3.842-2.338 4.687-4.565 4.936.359.309.678.919.678 1.852 0 1.337-.012 2.417-.012 2.747 0 .268.18.58.688.481A10.005 10.005 0 0022 12.005C22 6.478 17.523 2 12 2z"
                  />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500 transition-colors duration-200"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.78v2.29h.07c.67-1.27 2.31-2.29 4.76-2.29 5.09 0 6.03 3.34 6.03 7.69V24h-5V15.5c0-2.07-.04-4.73-2.89-4.73-2.89 0-3.33 2.25-3.33 4.57V24h-5V8z" />
                </svg>
              </a>
            </div>
            {/* Navigation Links */}
            <div className="flex space-x-6">
              <a
                href="/"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-sm"
              >
                Terms of Service
              </a>
              <a
                href="/"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-sm"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
