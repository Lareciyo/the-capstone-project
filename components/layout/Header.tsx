"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full h-16 bg-white border-b border-gray-200 z-50 px-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        {/* The Burger Menu - Visible only on Mobile/Tablet */}
        <button 
          onClick={() => window.dispatchEvent(new CustomEvent('toggle-sidebar'))}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 text-gray-900"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Brand Name: Darkened for visibility */}
        <h1 className="text-xl font-bold text-gray-900 tracking-tight">
          CapstoneProject
        </h1>
      </div>
      
      <div className="w-8 h-8 rounded-full bg-gray-200" />
    </header>
  );
}