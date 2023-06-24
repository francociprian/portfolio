export type Projects = {
    _id: number;
    title: string;
    slug: {
        current: string,
        _type: string
    }
};

export type ImageCloudinary = {
    url: string;
    resource_type: string;
    duration: null;
    secure_url: string;
    access_mode: string;
    access_control: any[];
    created_by: {
        id: string;
        type: string;
    };
    metadata: any[];
    format: string;
    type: string;
    public_id: string;
    tags: any[];
    bytes: number;
    _version: number;
    height: number;
    created_at: String;
    uploaded_by: {
        id: string;
        type: string;
    };
    _type: string;
    version: number;
    width: number;
    _key: string;
};

export type Project = {
    _id: number;
    title: string;
    techStack: string;
    deploy: string;
    github: string;
    details: string;
    description: string;
    imageMain: ImageCloudinary;
    imageMain2?: ImageCloudinary;
    imageMain3?: ImageCloudinary;
    imageMain4?: ImageCloudinary;
    imageMobile?: ImageCloudinary;
    imageMobile2?: ImageCloudinary;
    imageMobile3?: ImageCloudinary;
};