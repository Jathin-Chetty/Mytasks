import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import styles from './Home.module.css';
import Header from './Header';

type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

export default function Home() {
  const tasksDir = path.join(process.cwd(), 'src', 'tasks');
  const files = fs.readdirSync(tasksDir);
  const posts: PostMeta[] = files.map((file) => {
    const source = fs.readFileSync(path.join(tasksDir, file), 'utf8');
    const { data } = matter(source);
    return {
      slug: file.replace(/\.mdx?$/, ''),
      title: data.title || 'Untitled Task',
      description: data.description || 'No description provided.',
      date: data.date || 'No date',
    };
  });

  return (
    <>
      <Header />
      <main className={styles.main}>
        <p className={styles.subtitle}>Showcasing my submissions and tasks</p>
        <div className={styles.grid}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/tasks/${post.slug}`}
              className={styles.card}
            >
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <span className={styles.date}>{post.date}</span>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
