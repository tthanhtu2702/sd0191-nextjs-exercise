export default function ContactPage() {
  return (
    <main>
      <h1>Contact Us</h1>
      <form>
        <label>Name</label>
        <input type="text" placeholder="Your Name" required />

        <label>Email</label>
        <input type="email" placeholder="Your Email" required />

        <label>Message</label>
        <textarea placeholder="Your Message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </main>
  );
}