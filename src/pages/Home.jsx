import "./Home.css";

export default function Home() {
  return (
    <div className="home-root">

      <section className="hero">
        <div className="hero-left">
          <h1>
            Design your career.<br />
            Don’t guess it.
          </h1>

          <p>AI-powered guidance, real-world outcomes.</p>

          <div className="hero-actions">
            <button className="btn-primary">Start with Career Bot</button>
            <button className="btn-secondary">
              Explore Career Paths →
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="fake-network" />
        </div>
      </section>

      <section className="discover">
        <h3>Discover the next step in your career</h3>

        <div className="cards">

          <div className="glass-card">
            <h4>Results</h4>
            <div className="fake-chart" />
          </div>

          <div className="glass-card">
            <h4>Courses</h4>
            <div className="course">
              <b>Udemy</b>
              <span>React Frontend Development</span>
              <small>Advanced · 1 month</small>
            </div>
          </div>

          <div className="glass-card">
            <h4>Jobs</h4>

            <div className="job-row">
              <div>
                <b>Software Engineer</b>
                <small>Tech Innovate · Hybrid</small>
              </div>

              <div className="circle">
                92%
                <span>match</span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
