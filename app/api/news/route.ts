import { NextResponse } from 'next/server';

const news = [
  {
    id: 1,
    title: 'Minimalism Never Goes Out of Style',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/images/thumbs/featured/featured-1.jpg',
    author: 'Naruto Uzumaki',
    date: 'June 10, 2025'
  },
  {
    id: 2,
    title: 'Enhancing Your Designs with Negative Space',
    content: 'Aenean commodo ligula eget dolor. Aenean massa.',
    image: '/images/thumbs/featured/featured-2.jpg',
    author: 'Sasuke Uchiha',
    date: 'June 11, 2025'
  },
  {
    id: 3,
    title: 'Just a Standard Format Post.',
    content: 'Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.',
    image: '/images/thumbs/usaf-rocket.jpg',
    author: 'Design Photography',
    date: 'June 13, 2025'
  },
  {
    id: 4,
    title: 'This Is Another Standard Format Post.',
    content: 'Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.',
    image: '/images/thumbs/shutterbug.jpg',
    author: 'Photography html',
    date: 'June 14, 2025'
  }
];

export async function GET() {
  return NextResponse.json(news);
}