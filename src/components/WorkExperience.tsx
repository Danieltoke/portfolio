import React from 'react';
import { WorkExperience as WorkExperienceType } from '@/types/profile';

interface WorkExperienceProps {
  experiences: WorkExperienceType[];
}

export default function WorkExperience({ experiences }: WorkExperienceProps) {
  return (
    <section className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
      <div className="space-y-8">
        {experiences.map((experience) => (
          <div key={experience.id} className="border-l-2 border-gray-200 pl-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl font-semibold">{experience.heading}</h3>
              <span className="text-gray-600">{experience.year}</span>
            </div>
            {experience.description && (
              <p className="text-gray-700 whitespace-pre-line">{experience.description}</p>
            )}
            {experience.url && (
              <a
                href={experience.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
              >
                Visit website →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 