import { Moviment, Play, View } from '@/components/Icon';

interface TourItem {
  id: number;
  title: string;
  description: string;
  titleCard: string;
  Icon: typeof View;
  attachment: {
    type: 'image' | 'video';
    cardImage: string;
    url: string;
  };
}

export const tourItems: TourItem[] = [
  {
    id: 1,
    title: '360° Building',
    description: 'View the building and availability',
    titleCard: 'Building',
    Icon: View,
    attachment: {
      type: 'image',
      cardImage: '/tour/building.png',
      url: '/tour/building.png'
    }
  },
  {
    id: 2,
    title: 'Tour Virtual',
    description: 'Take a tour of our building',
    titleCard: 'tour virtual',
    Icon: Moviment,
    attachment: {
      type: 'image',
      cardImage: '/tour/virtual.png',
      url: '/tour/virtual.png'
    }
  },
  {
    id: 3,
    title: 'watch',
    description: 'Complete videos of the project',
    titleCard: 'video',
    Icon: Play,
    attachment: {
      type: 'video',
      cardImage: '/tour/watch.png',
      url: '/tour/watch.mp4'
    }
  }
];
