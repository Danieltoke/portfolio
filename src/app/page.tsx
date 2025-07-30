import React from 'react';
import { getProfileData } from '@/utils/profile';
import Header from '@/components/Header';
import WorkExperience from '@/components/WorkExperience';
import Projects from '@/components/Projects';

export default async function Home() {
  try {
    console.log('Fetching profile data...');
    const profileData = await getProfileData();
    console.log('Profile data loaded:', profileData);

    if (!profileData || !profileData.general) {
      throw new Error('Invalid profile data structure');
    }

    return (
      <main className="min-h-screen bg-white">
        <Header general={profileData.general} />
        <WorkExperience experiences={profileData.workExperience} />
        <Projects projects={profileData.projects} sideProjects={profileData.sideProjects} />
      </main>
    );
  } catch (error) {
    console.error('Error loading profile:', error);
    return (
      <main className="min-h-screen bg-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading Profile</h1>
          <p className="text-gray-700 mb-4">There was an error loading the profile data. Details:</p>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
            {error instanceof Error ? error.message : 'Unknown error'}
          </pre>
        </div>
      </main>
    );
  }
} 