import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-root">

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <h1>
            Design your career.<br />
            Don’t guess it.
          </h1>

          <p>AI-powered guidance, real-world outcomes.</p>

          <div className="hero-actions">
            <Link to="/chatbot">
              <button className="btn-primary">
                Start with Career Bot
              </button>
            </Link>

            {/* You don't have a separate career-path page,
                so pointing to courses (safe & existing route) */}
            <Link to="/courses">
              <button className="btn-secondary">
                Explore Career Paths →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* DISCOVER */}
      <section className="discover">
        <h3>Discover the next step in your career</h3>

        <div className="cards">

          {/* RESULTS */}
          <div className="glass-card">
            <h4>Results</h4>

            <div style={{ marginTop: 16 }}>
              <Link to="/results" className="card-link">
                View your results →
              </Link>
            </div>
          </div>

          {/* COURSES */}
          <div className="glass-card">
            <h4>Courses</h4>

            {/* All course rows removed as requested */}

            <div style={{ marginTop: 16 }}>
              <Link to="/courses" className="card-link">
                Browse courses →
              </Link>
            </div>
          </div>

          {/* JOBS */}
          <div className="glass-card">
            <h4>Jobs</h4>

            {/* All job titles and companies removed as requested */}

            <div style={{ marginTop: 16 }}>
              <Link to="/jobs" className="card-link">
                Explore jobs →
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
