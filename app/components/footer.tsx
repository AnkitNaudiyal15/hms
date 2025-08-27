"use client"; // Only needed if this footer includes interactive features (like theme toggles)

import React from "react";

export default function Footer() {
    const appName = process.env.NEXT_PUBLIC_AN_APP_NAME;
    return (
        <footer className="bg-gray-200 text-white">
            {/* <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        <div>
          <h2 className="text-xl font-bold mb-4">MySite</h2>
          <p className="text-sm text-gray-400">
            Building modern web solutions with speed and style.
          </p>
        </div>

 
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
          </ul>
        </div>

   
        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Docs</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
          </ul>
        </div>


        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">LinkedIn</a></li>
            <li><a href="#" className="hover:underline">GitHub</a></li>
          </ul>
        </div>
      </div> */}

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-800">
                &copy; {new Date().getFullYear()} {appName}. All rights reserved.
            </div>
        </footer>
    );
}
