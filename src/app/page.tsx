const branches = [
  { code: "CSE", name: "Computer Science & Engineering" },
  { code: "ME", name: "Mechanical Engineering" },
  { code: "CE", name: "Civil Engineering" },
];

export default function Home() {
  return (
    <main className="shell">
      <header className="topbar">
        <a className="brand" href="#home"><span className="brand-mark">P</span> PYQ <span className="muted">HUB</span></a>
        <nav aria-label="Main navigation"><a href="#branches">Branches</a><a href="#about">About</a></nav>
        <a className="submit" href="#about">Contribute a paper ↗</a>
      </header>
      <section className="hero" id="home">
        <p className="eyebrow"><span className="dot" /> MADE FOR DBATU STUDENTS</p>
        <h1>Your next exam<br />starts <span>right here.</span></h1>
        <p className="intro">A simple place to find previous-year question papers, organized around the way you study.</p>
        <a className="button" href="#branches">Explore question papers <span>↓</span></a>
        <p className="hero-note">01 / 03 <span>START WITH YOUR BRANCH</span></p>
      </section>
      <section className="library" id="branches">
        <div className="section-head"><div><p className="eyebrow">THE LIBRARY</p><h2>Choose your branch</h2></div><span className="section-index">01 — BRANCHES</span></div>
        <div className="grid">{branches.map((branch, i) => <a className="card" href="#about" key={branch.code}><span className="index">0{i + 1}</span><strong>{branch.code}</strong><span className="branch-name">{branch.name}</span><span className="card-bottom">Browse papers <span>↗</span></span></a>)}</div>
        <p className="placeholder">We’re building the library. Paper listings will appear here as they’re added.</p>
      </section>
      <footer id="about"><span>DBATU PYQ HUB</span><span>Built for students, by students.</span><span>Free to use · 2026</span></footer>
    </main>
  );
}
