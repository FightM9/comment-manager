export interface CommentType {
  id: string;
  region: string;
  author: string;
  channel: string;
  content: string;
  date: Date;
  favorite?: boolean;
  senderNumber: string;
  attachments: [{ type: 'image' | 'video'; url: string }];
}

export const baseURL = 'http://f0665380.xsph.ru';
