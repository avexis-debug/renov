
export interface Project {
  id: number;
  title: string;
  location: string;
  image: string;
  description?: string;
  features?: string[];
  gallery?: string[];
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
}
