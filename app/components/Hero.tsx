import TechStack from './TechStack';

export default function Hero() {
  return (
    <header id="about" className="hero text-white py-16">
      <div className="hero-inner max-w-4xl mx-auto text-center px-6">
        <h1 className="hero-title text-4xl md:text-5xl font-extrabold">Fullstack Software Engineer</h1>
        <div className="hero-links flex gap-6 justify-center mt-4">
          <a className="text-blue-100 font-semibold" href="mailto:ibrahimrached99@hotmail.com">E‑Mail</a>
          <a className="text-blue-100 font-semibold" href="https://www.linkedin.com/in/ibrahim-rached-a21b57237/">LinkedIn</a>
          <a className="text-blue-100 font-semibold" href="https://github.com/Ibra4i">GitHub</a>
          {/* <a className="text-blue-100 font-semibold" href="#">CV</a> */}
        </div>
        <h2 className="hero-sub mt-8 text-2xl font-bold">About Me</h2>
        <p className="hero-about mt-4 text-gray-100 max-w-3xl mx-auto">
          I am a software engineer with a masters degree in human-computer interaction (HCI).
          I ave a great passion for learning and consistently strive to improve 
          and grow within my field. I enjoy exploring new technologies and experimenting with innovative 
          ideas, both professionally and in my personal time.
        </p>
        <p className="hero-about mt-4 text-gray-100 max-w-3xl mx-auto">
          I specialize in C#, and have experience with many other technologies.
        </p>
      </div>
      <TechStack />
    </header>
  );
}
