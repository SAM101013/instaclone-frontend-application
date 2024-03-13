import React from "react";
import LogOrSign from "../logOrSign/logOrSign";
import Header from "../components/header.jsx"; // Import your Header component
import Footer from "../components/footer.jsx"; // Import your Footer component
import "../App.scss";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <main>
        <LogOrSign />
        <section className="intro-section">
          <div className="container">
            <div className="intro-content">
              <h1>Welcome to my Instagram Clone</h1>
              <p>
                Creating an Instagram clone involves replicating the core
                functionalities and design aesthetics of the popular social
                media platform. Initially, one must analyze the features of
                Instagram, such as user authentication, posting images,
                following other users, liking and commenting on posts, and
                exploring content. The project typically begins with setting up
                a backend server to handle user authentication and data storage.
                Technologies like Node.js with Express or Django can be used for
                this purpose. The frontend is developed using frameworks like
                React or Vue.js to build a responsive and interactive user
                interface. CSS frameworks such as Bootstrap or Tailwind CSS can
                aid in achieving the Instagram-like UI design. Integrating
                features like image uploading, user profiles, and interaction
                functionalities require careful planning and implementation.
                Finally, thorough testing and deployment ensure the clone
                functions seamlessly, resembling the user experience of
                Instagram while maintaining its unique identity..
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
