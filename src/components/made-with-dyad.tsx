"use client";

import React from "react";

const AppFooter = () => {
  const year = new Date().getFullYear();

  return (
    <div className="w-full py-4 text-center border-t border-slate-800 mt-6">
      <p className="text-sm text-slate-400">
        © {year} <span className="text-white font-semibold">NextERP Systems</span>. 
        All rights reserved.
      </p>

      <p className="text-xs text-slate-500 mt-1">
        Enterprise Management Ecosystem • Built by Reagan Otema & Binsobedde Najiib
      </p>
    </div>
  );
};

export default AppFooter;