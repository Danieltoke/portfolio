import React from 'react';
import { Project, SideProject } from '@/types/profile';

interface ProjectsProps {
  projects: Project[];
  sideProjects: SideProject[];
}

export default function Projects({ projects, sideProjects }: ProjectsProps) {
  return (
    <section className="max-w-4xl mx-auto py-8 px-4">
      {projects.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{project.heading}</h3>
                  <span className="text-sm text-gray-600">{project.year}</span>
                </div>
                {project.description && (
                  <p className="text-gray-700 mb-4">{project.description}</p>
                )}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 inline-block"
                  >
                    View project →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {sideProjects.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Side Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sideProjects.map((project) => (
              <div key={project.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{project.heading}</h3>
                  <span className="text-sm text-gray-600">{project.year}</span>
                </div>
                {project.description && (
                  <p className="text-gray-700 mb-4">{project.description}</p>
                )}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 inline-block"
                  >
                    View project →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
} 