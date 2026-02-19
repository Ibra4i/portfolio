"use client";

import React from "react";

type Props = {
  title: string;
  subtitle?: string;
  description?: string;
  tags?: string[];
  githubLink?: string; //
  link?: string;
  selectedTag?: string | null;
  onSelectTag?: (tag: string) => void;
};

export default function ProjectCard({ title, subtitle, description, tags = [], link = '#', selectedTag = null, onSelectTag, }: Props) {
  return (
    <a
      href={link}
      className="block h-full transform transition-transform hover:-translate-y-2 hover:shadow-2xl focus:outline-none rounded-lg"
    >
      <article className="card project-card bg-white rounded-lg p-6 shadow-lg h-full flex flex-col justify-between cursor-pointer">
        <div>
          <h3 className="card-title text-lg font-bold">{title}</h3>
          {subtitle && (
            <h4 className="card-sub mt-2 text-sm font-semibold text-gray-800">{subtitle}</h4>
          )}
          {description && (
            <p className="card-desc mt-3 text-gray-600 text-sm">{description}</p>
          )}
        </div>
        <div className="card-tags mt-4 flex flex-wrap gap-2">
          {tags.map((t) => {
            const isSelected = selectedTag !== null && selectedTag === t;
            const hasSelection = selectedTag !== null;
            const dimmed = hasSelection && !isSelected;

            return (
              <button
                key={t}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (onSelectTag) onSelectTag(t);
                }}
                className={`tag text-sm px-3 py-1 rounded-full transition-colors ${isSelected ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800'} ${dimmed ? 'opacity-50' : 'opacity-100'}`}
              >
                {t}
                
              </button>
            );
          })}
        </div>
      </article>
    </a>
  );
}
