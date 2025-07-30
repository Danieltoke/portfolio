export interface GeneralInfo {
  profilePhoto: string | null;
  username: string;
  displayName: string;
  profession: string;
  location: string;
  pronouns: string | null;
  byline: string;
  website: string | null;
  websiteURL: string | null;
  about: string;
  status: {
    text: string | null;
    emoji: string | null;
    timestamp: string | null;
  };
  sectionOrder: string[];
}

export interface BaseItem {
  id: string;
  year: string;
  heading: string;
  url: string | null;
  collaborators: string[];
  description: string | null;
  attachments: string[];
  type: string;
  title: string;
  company: string | null;
  location?: string | null;
}

export interface Project extends BaseItem {
  type: 'project';
}

export interface SideProject extends BaseItem {
  type: 'sideProject';
}

export interface WorkExperience extends BaseItem {
  type: 'workExperience';
}

export interface ProfileData {
  general: GeneralInfo;
  projects: Project[];
  sideProjects: SideProject[];
  exhibitions: BaseItem[];
  talks: BaseItem[];
  writing: BaseItem[];
  awards: BaseItem[];
  features: BaseItem[];
  workExperience: WorkExperience[];
  volunteering: BaseItem[];
} 