import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import 'prismjs/themes/prism.css';
import Link from 'next/link';
import Header from '../../Header';

export async function generateStaticParams() {
  const tasksDir = path.join(process.cwd(), 'src', 'tasks');
  const files = fs.readdirSync(tasksDir);
  return files.map((file) => ({ slug: file.replace(/\.mdx?$/, '') }));
}

export default async function TaskPage({ params }: { params: { slug: string } }) {
  const tasksDir = path.join(process.cwd(), 'src', 'tasks');
  const filePath = path.join(tasksDir, `${params.slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(source);

  return (
    <>
      <Header />
      <main
        style={{
          minHeight: '100vh',
          background: 'var(--retro-bg)',
          color: 'var(--retro-text)',
          fontFamily: 'var(--retro-font)',
          padding: '48px 16px 32px 16px',
          maxWidth: 800,
          margin: '0 auto',
        }}
      >
        <Link
          href="/"
          style={{
            color: 'var(--retro-accent)',
            textDecoration: 'none',
            fontWeight: 700,
            fontFamily: 'var(--retro-font)',
            fontSize: '1.1em',
            marginBottom: 32,
            display: 'inline-block',
            transition: 'color 0.2s',
          }}
        >
          ← Back to all tasks
        </Link>
        <h2 style={{ color: 'var(--retro-accent)' }}>{data.title}</h2>
        <p style={{ color: 'var(--retro-muted)' }}>{data.date} &mdash; {data.description}</p>
        <hr style={{ margin: '24px 0', borderColor: 'var(--retro-accent)' }} />
        <article className="prose">
          <MDXRemote source={content} />
        </article>
      </main>
    </>
  );
} 