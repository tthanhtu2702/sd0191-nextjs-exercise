'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface NewsItem {
  id: number;
  title: string;
  content: string;
  image: string;
  author: string;
  date: string;
}

export default function HomePage() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(data => setNews(data));
  }, []);

  return (
    <>
    <main>
      <div className="bricks-wrapper">
        <div className="grid-sizer"></div>

        <div className="brick entry featured-grid animate-this">
          {news.slice(0, 2).map((item) => (
            <div
              key={item.id}
              className="featured-post-slide"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="overlay"></div>
              <div className="post-content">
                <ul className="entry-meta">
                  <li>{item.date}</li>
                  <li><Link href="#">{item.author}</Link></li>
                </ul>
                <h1 className="slide-title">
                  <Link href={`/article/${item.id}`}>{item.title}</Link>
                </h1>
              </div>
            </div>
          ))}
        </div>

        {news.map((item) => (
          <article key={item.id} className="brick entry format-standard animate-this">
            <div className="entry-thumb">
              <Link href={`/article/${item.id}`} className="thumb-link">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={200}
                />
              </Link>
            </div>

            <div className="entry-text">
              <div className="entry-header">
                <div className="entry-meta">
                  <span className="cat-links">
                    <Link href="#">Category</Link>
                  </span>
                </div>
                <h1 className="entry-title">
                  <Link href={`/article/${item.id}`}>{item.title}</Link>
                </h1>
              </div>
              <div className="entry-excerpt">{item.content}</div>
            </div>
          </article>
        ))}
      </div>
    </main>
    <div className="row">
   		
   		<nav className="pagination">
		      <span className="page-numbers prev inactive">Prev</span>
		   	<span className="page-numbers current">1</span>
		   	<a href="#" className="page-numbers">2</a>
		      <a href="#" className="page-numbers">3</a>
		      <a href="#" className="page-numbers">4</a>
		      <a href="#" className="page-numbers">5</a>
		      <a href="#" className="page-numbers">6</a>
		      <a href="#" className="page-numbers">7</a>
		      <a href="#" className="page-numbers">8</a>
		      <a href="#" className="page-numbers">9</a>
		   	<a href="#" className="page-numbers next">Next</a>
	      </nav>

   	</div>
    </>
  );
}
