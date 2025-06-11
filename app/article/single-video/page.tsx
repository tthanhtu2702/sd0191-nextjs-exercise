export function SingleVideoPage() {
  return (
    <main>
      <article>
        <header>
          <h1>This Is a Video Post Format</h1>
          <div className="meta">
            <span>Design / Branding</span>
          </div>
        </header>
        <figure>
          <iframe
            src="https://player.vimeo.com/video/14592941?title=0&byline=0&portrait=0&color=F64B39"
            width="100%"
            height="480"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Video Post"
          ></iframe>
        </figure>
        <section>
          <p>
            Watch this inspirational video on how visual branding can tell powerful stories.
          </p>
        </section>
      </article>
    </main>
  );
}