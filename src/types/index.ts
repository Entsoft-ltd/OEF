
export interface Trustee {
  id: number;
  name: string;
  role: string;
  imageUrl?: string;
}

export interface ReportSection {
  title: string;
  content: string | string[];
  youtubeLink?: string;
  googleFormLink?: string;
}
