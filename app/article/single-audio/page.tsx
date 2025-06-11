export function SingleAudioPage() {
  return (
    <main>
      <article>
        <header>
          <h1>This Is an Audio Format Post</h1>
          <div className="meta">
            <span>Design / Music</span>
          </div>
        </header>
        <figure>
          <img src="/images/thumbs/concert.jpg" alt="Concert" />
          <audio controls src="/media/AirReview-Landmarks-02-ChasingCorporate.mp3"></audio>
        </figure>
        <section>
          <p>
            Enjoy this featured audio track and learn how music and design intersect.
          </p>
        </section>
      </article>
    </main>
  );
}