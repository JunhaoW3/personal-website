'use client'

import { useState } from 'react'

const entries = [
  { category: 'academic', date: '12 NOV 2024', title: 'What the mountain taught me about interfaces', excerpt: 'Notes on patience, pacing, and why the best digital experiences leave room to breathe.' },
  { category: 'academic', date: '06 SEP 2024', title: 'A small case for thoughtful details', excerpt: 'The tiny decisions that make a project feel considered rather than merely complete.' },
  { category: 'adventure', date: '28 OCT 2024', title: 'Finding the line', excerpt: 'A field note about choosing constraints, trusting the route, and making the next step visible.' },
]

export default function BlogPage() {
  const [category, setCategory] = useState('academic')
  const filteredEntries = entries.filter((entry) => entry.category === category)

  return (
    <main className="blog-page">
      <nav className="blog-nav shell"><a className="wordmark" href="/">JUNHAO<span>W3</span></a><a className="back-link" href="/">← Back to the range</a></nav>
      <header className="blog-hero shell"><p className="eyebrow">THE TRAIL JOURNAL</p><h1>Notes from<br /><em>the route.</em></h1><p>Essays, observations, and field notes from the academic and adventurous sides of the climb.</p></header>
      <section className="blog-content shell"><div className="blog-tabs" role="tablist" aria-label="Blog categories">{['academic', 'adventure'].map((item) => <button key={item} type="button" role="tab" aria-selected={category === item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>)}</div><div className="blog-page-list">{filteredEntries.map((entry) => <article className="blog-page-entry" key={entry.title}><p className="blog-date">{entry.date}</p><div><p className="entry-category">{entry.category}</p><h2>{entry.title}</h2><p>{entry.excerpt}</p><a href="#top">Read entry <span>↗</span></a></div></article>)}</div></section>
      <footer className="footer shell"><span>© 2024 Junhao</span><a href="/">Back to the range ↑</a></footer>
    </main>
  )
}
