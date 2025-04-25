export type ImageCloudinary = {
  url: string;
  resource_type: string;
  duration: null;
  secure_url: string;
  access_mode: string;
  access_control: string[];
  created_by: {
    id: string;
    type: string;
  };
  metadata: Record<string, string>
  format: string;
  type: string;
  public_id: string;
  tags: string[];
  bytes: number;
  _version: number;
  height: number;
  created_at: string;
  uploaded_by: {
    id: string;
    type: string;
  };
  _type: string;
  version: number;
  width: number;
  _key: string;
}

export type Project = {
  _id: number;
  title: string;
  techStack: string;
  deploy: string;
  github: string;
  details: string;
  description: string;
  slug: {
    current: string,
    _type: string
  };
  imageMain: ImageCloudinary;
  imageMain2?: ImageCloudinary;
  imageMain3?: ImageCloudinary;
  imageMain4?: ImageCloudinary;
  imageMobile?: ImageCloudinary;
  imageMobile2?: ImageCloudinary;
  imageMobile3?: ImageCloudinary;
} 