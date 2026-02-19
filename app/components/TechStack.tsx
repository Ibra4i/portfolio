"use client";
import Image from 'next/image';

const techStack = [
  { name: 'Java', src: '/Java.png' },
  { name: 'Python', src: '/python.png' },
  { name: 'Django', src: '/Django.png' },
  { name: 'C#', src: '/csharp.png' },
  { name: '.NET Core', src: '/dotnetcore.png' },
  { name: 'C++', src: '/cpp.png' },
  { name: 'Blazor', src: '/Blazor.png' },
  { name: 'CSS', src: '/css.png' },
  { name: 'HTML', src: '/HTML.png' },
  { name: 'JavaScript', src: '/JavaScript.webp' },
  { name: 'Next.js', src: '/next.svg' },
  { name: 'Git', src: '/git.png' },
  { name: 'React', src: '/React.png' },
  { name: 'SQLite', src: '/sqlite.png' },
  { name: 'TypeScript', src: '/TypeScript.png' },
];

export default function TechStack() {
  return (
    <div style={{ background: 'transparent', padding: '2rem 0', position: 'relative' }}>
      <h2 style={{ textAlign: 'center', color: 'white', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', textShadow: '2px 2px 4px #00000050' }}>
        Tech Stack
      </h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1.5rem',
          padding: '1rem 0',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {techStack.map((tech) => (
          <div
            key={tech.name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minWidth: '100px',
              maxWidth: '110px',
            }}
          >
            <div
              style={{
                background: '#f3f4f6',
                borderRadius: '1rem',
                padding: '0.5rem',
                marginBottom: '0.5rem',
                boxShadow: '0 2px 8px #00000010',
                width: '70px',
                height: '70px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image src={tech.src} alt={tech.name} width={48} height={48} />
            </div>
            <span
              style={{
                color: '#333',
                fontSize: '1rem',
                textShadow: '1px 1px 2px #ffffff30',
                marginTop: '0.2rem',
                textAlign: 'center',
                width: '100%',
                fontWeight: 500,
              }}
            >
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
