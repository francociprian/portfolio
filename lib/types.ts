export type Project = {
    _id: number;
    title: string;
    slug: {
        current: string,
        _type: string
    }
};