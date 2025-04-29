import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer pt-4 pb-4 container">
      <h6 className="text-center fw-bold">
        © {currentYear} Financial Freedom Pathway
      </h6>
    </div>
  );
};

export default Footer;
