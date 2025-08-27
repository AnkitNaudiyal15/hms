"use client";
import React, { useState } from "react";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const appName = process.env.NEXT_PUBLIC_AN_APP_NAME;
  const menuItem = [{ label: 'Home', url: '/' },
  { label: 'Contact', url: '/contact' },

  ]
  return (
    <>
      <nav className=" fixed top-0 left-0 w-full mb-16 shadow-md z-50 bg-gray-200  text-gray-800 px-4 py-3 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-xl font-bold">{appName}</h1>

          {/* Desktop Menu (horizontal) */}
          <div className="hidden md:flex space-x-8">
            {menuItem?.map((item, index) => {
              return (<a href={item?.url} key={index} className="hover:underline">{item?.label}</a>)
            })}


          </div>

          {/* Hamburger Icon (mobile) */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Sliding Menu Overlay */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-200 text-gray-800  transform transition-transform duration-300 ease-in-out z-50
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-600">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            className="text-2xl focus:outline-none"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          {menuItem?.map((item, index) => {
            return (<a href={item?.url} key={index} className="hover:underline" onClick={() => setMenuOpen(false)}>{item?.label}</a>)
          })}
        </nav>
      </div>

      {/* Overlay backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
