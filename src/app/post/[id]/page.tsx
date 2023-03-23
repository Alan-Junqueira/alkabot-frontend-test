import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'User',
  description: 'Página inicial'
};

type PostProps = {
  params: { id: string };
};

export default function Post({ params }: PostProps) {
  const { id } = params;
  return <h1>Post {id}</h1>;
}
