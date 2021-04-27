import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-12 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">About Us</h2>
        <p className="mt-5">Robotica Machine Learning comes to you from the fine city of Norwich, United Kingdom.
        Robotica Machine Learning Limited is registered company number 12753299 and has registered offices at Robotica, George Court, Bartholomew’s Walk, Ely CB7 4JW.</p>
      </div>
      <div className="flex-1 px-3">
        {/* <h2 className="text-lg font-semibold">Links</h2>
        <ul className="mt-4 leading-loose"> */}
          {/* <li>
            <a href="https://codebushi.com">Terms &amp; Conditions</a>
          </li> */}
          {/* <li>
            <a href="https://codebushi.com">Privacy Policy</a>
          </li> */}
        {/* </ul> */}
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Keep in Touch</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://twitter.com/roboticaml/">Twitter</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/robotica-ml/about/">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/roboticaml/">GitHub</a>
          </li>
          <li>
            <a href="mailto:info@robotica.ml">Email Us: info@robotica.ml</a>
          </li>
          <li>
            Tel: 01603 290002
          </li>
          <li>
            Norwich Office: 61-63 Riverside Rd, Norwich NR1 1SR
          </li>
          
          
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
