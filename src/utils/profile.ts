import { ProfileData } from '@/types/profile';
import profileData from '@/data/profile.json';

export async function getProfileData(): Promise<ProfileData> {
  try {
    return profileData;
  } catch (error) {
    console.error('Error loading profile data:', error);
    throw error;
  }
} 