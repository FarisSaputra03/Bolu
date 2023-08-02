import Image from 'next/image';
import Tampilan from '@/components/tampilan';
import Content from '@/components/content';
import Blog from '@/components/blog';
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <Tampilan />
      <Content />
      <Blog />
    </>
  );
}
