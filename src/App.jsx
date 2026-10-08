import { SpeedInsights } from '@vercel/speed-insights/react'
import './App.css'

function App() {
  return (
    <>
      <div className="container">
        <header>
          <h1>Ukasha Yousfani</h1>
          <p className="subtitle">Software Engineer</p>
        </header>

        <main>
          <section className="about">
            <h2>About Me</h2>
            <p>
              Welcome to my portfolio! I&apos;m a passionate software engineer dedicated to building 
              exceptional web experiences.
            </p>
          </section>

          <section className="skills">
            <h2>Skills</h2>
            <div className="skills-grid">
              <div className="skill-card">React</div>
              <div className="skill-card">JavaScript</div>
              <div className="skill-card">TypeScript</div>
              <div className="skill-card">Node.js</div>
              <div className="skill-card">CSS</div>
              <div className="skill-card">Git</div>
            </div>
          </section>

          <section className="contact">
            <h2>Contact</h2>
            <div className="contact-links">
              <a href="mailto:your.email@example.com" className="contact-link">Email</a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
            </div>
            <p className="note">
              ⚠️ Before publishing, update the email, GitHub and LinkedIn links above with your real information.
            </p>
          </section>
        </main>

        <footer>
          <p>&copy; {new Date().getFullYear()} Ukasha Yousfani. All rights reserved.</p>
        </footer>
      </div>
      
      {/* Vercel Speed Insights component */}
      <SpeedInsights />
    </>
  )
}

export default App
