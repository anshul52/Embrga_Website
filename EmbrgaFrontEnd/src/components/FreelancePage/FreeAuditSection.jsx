import React from "react";

const FreeAuditSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#0f172a] to-[#000e1a] text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Unlock Your Project’s Full Potential —
            <span className="text-sky-400"> On Us!</span>
          </h2>
          <p className="text-gray-300 mt-4">
            Let our experts review your current website, app, or system —
            totally free. We’ll find performance gaps, UX flaws, or tech
            bottlenecks and show you how we’d fix them.
          </p>
          <div className="bg-[#131e2c] p-6 rounded-2xl shadow-md my-10">
            <h3 className="text-xl font-semibold mb-4">How it Works</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-300 text-sm">
              <li>Book a 20-min Call</li>
              <li>Share Your Website / App</li>
              <li>Get a Detailed Report + Action Plan</li>
            </ol>

            <button className="mt-6 bg-sky-500 hover:bg-sky-600 transition-all text-white font-semibold px-6 py-3 rounded-xl shadow-lg">
              Book Your Free Audit
            </button>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold">Why Free?</h3>
            <p className="text-gray-300 mt-2">
              We believe in proving value first. This audit is risk-free — no
              obligations, just expert insights to help you grow.
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="p-0 rounded-2xl mt-6 h-fit relative">
          <img
            src="/agency/repoer1.png"
            alt=""
            className="rounded-xl scale-[0.8]"
          />
        </div>
      </div>
    </section>
  );
};

export default FreeAuditSection;
