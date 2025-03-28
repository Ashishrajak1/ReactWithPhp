import React from "react";

function Footer() {
  return (
    <footer>
      <section className="contact-area py-5 bg-light text-dark" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="contact-content">
                <p>Have any questions? Feel free to reach out to us anytime!</p>
                <hr className="my-4 border-light" />
                <h6>1120 Main Street, Indore City, 452010</h6>
                <h6>
                  +01 2345 6789 12 <span className="mx-2">|</span> +01 9876 5432
                  10
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center py-4 bg-dark text-light">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
