import React from "react";

function About() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>About this Project</h1>
      <p>
        This quiz was created to raise awareness about discrimination and the
        importance of diversity in the tech industry. By learning more about
        these topics, we can help create a more inclusive and equitable
        environment for everyone.
      </p>
      <p>
        <strong>Tech Stack:</strong> React (Vite) + TypeScript, React Router.
        This project demonstrates knowledge from the Analysis and Development of
        Systems course, applying front-end skills to address social issues.
      </p>
      <p>
        <strong>References:</strong>
      </p>
      <ul>
        <li>UN Women statistics on women in STEM</li>
        <li>Articles and videos on race and gender equity</li>
        <li>Any other relevant link or data source</li>
      </ul>
    </div>
  );
}

export default About;
