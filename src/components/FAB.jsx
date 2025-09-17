import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiMessageSquare, FiHeart } from "react-icons/fi";

const FAB = () => {
  return (
    <div className="fab fab-flower">
      {/* a focusable div with tabIndex is necessary to work on all browsers. role="button" is necessary for accessibility */}
      <div
        tabIndex={0}
        role="button"
        className="btn btn-lg btn-circle btn-success"
      >
        <FiPhone />
      </div>

      {/* Main Action button replaces the original button when FAB is open */}
      <button className="fab-main-action btn btn-circle btn-lg">
        <FiHeart />
      </button>

      {/* buttons that show up when FAB is open */}
      {/* Call */}
      <a href="tel:+971556939668" target="_blank" rel="noopener noreferrer">
        <button className="btn btn-lg btn-circle btn-accent">
          <FiPhone className="w-5 h-5" />
        </button>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/+971556939668"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="btn btn-lg btn-circle btn-success">
          <FaWhatsapp className="w-5 h-5" />
        </button>
      </a>
    </div>
  );
};

export default FAB;
