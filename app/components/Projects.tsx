"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";

const sample: Array<any> = [
  {
    title: "Collaboration with Attiri, State-Authorized Public Accounting Firm",
    // subtitle: "(9/2022 - 12/2022)",
    description:
      "Designed and developed a software platform for the company. The platform aimed to optimize their workflows, delegate tasks, and improve overall visibility of employee responsibilities.",
    tags: ["Blazor", "C#", "Entity Framework", "SQL", "REST API"],
    link: "/Projects/P3.pdf",
  },
  {
    title: "Collaboration with AAU in developing ECDAR",
    // subtitle: "(9/2022 - 12/2023)",
    description:
      "Frontend Implementation of Simulation and Reachability: A Contribution to the ECDAR Project.",
    tags: ["Java", "JavaFX", "gRPC", "Rust", "UI testing"],
    link: "/Projects/ecdar.pdf",
  },
  {
    title: "Collaboration with Migatronic",
    // subtitle: "(1/2023 - 6/2023)",
    description:
      "For the bachelor's project, a collaboration with Migatronic to develop a machine learning algorithm for automatic evaluation of welding quality.",
    tags: ["Machine learning", "Python", "Web Development", "MATLAB"],
    link: "/Projects/migatronic.pdf",
  },
  {
    title: "Fullstack developer at Ad Fontes Society",
    // subtitle: "(1/2026 - 2/2026)",
    description:
      "Internship as a full-stack software developer.",
    tags: ["Web Development", "Typescript", "NextJS", "React", "SQL"],
    link: "#adFontes",
  },
  {
    title: "Personal Meal Planner",
    // subtitle: "(1/2026 - 2/2026)",
    description:
      "A personal meal planner project with focus on personal dietary goals and food waste that keep track of the food inventory, and generate meal plans and recipes with focus on the user’s dietary goals and minimizing food waste.",
    tags: ["Web Development", "C#", "Entity Framework", "React", "docker"],
    link: "/Projects/p7.pdf",
  },
  {
    title: "Acoustic Transmission of Images",
    // subtitle: "(1/2026 - 2/2026)",
    description:
      "A transmission scheme based on acoustic signals, making it possible to perform an offline transmission of images of approx. 1,000 kb over 1,500 m.",
    tags: ["JavaScript", "C","Testing"],
    link: "/Projects/p2.pdf",
  }, 
  {
    title: "House chores application ",
    // subtitle: "(1/2026 - 2/2026)",
    description:
      "A house chores application that allows users to create and manage their household chores, assign them to family members, and track their completion.",
    tags: ["Entity Framework", "C#","Blazor"],
    link: "#houseChores",
  }, 
  {
    title: "Make Me A Gear ",
    // subtitle: "(1/2026 - 2/2026)",
    description:
      "A High-Level Programming Language for 3D-printing of Gears. Creating a new programming language and compiler that allows users to design and 3D-print custom gears with ease, using a simple and intuitive syntax.",
    tags: ["ANTLR", "C#","Syntax and Semantics","Compiler design"],
    link: "/Projects/p4.pdf",
  }, 
  
];

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  function handleSelect(tag: string) {
    setSelectedTag((cur) => (cur === tag ? null : tag));
  }

  return (
    <section id="projects" className="projects-section py-8">
      <h2 className="section-heading">My Projects</h2>
      <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {sample.map((p) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            subtitle={p.subtitle}
            description={p.description}
            tags={p.tags}
            link={p.link}
            githubLink={p.githubLink}
            selectedTag={selectedTag}
            onSelectTag={handleSelect}
          />
        ))}
      </div>
    </section>
  );
}
