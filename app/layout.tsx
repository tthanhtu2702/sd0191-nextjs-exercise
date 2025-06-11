import '../public/base.css';
import '../public/fonts.css';
import '../public/main.css';
import '../public/vendor.css';
import '../public/login.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="gradient-block"></div>	
          <div className="row header-content">
            <div className="logo">
              <Link href="/">Author</Link>
            </div>
            <nav id="main-nav-wrap">
              <ul className="main-navigation sf-menu sf-js-enabled" style={{ touchAction: 'pan-y' }}>
                <li className="current"><Link href="/">Home</Link></li>
                <li className="has-children">
                  <Link href="/category">Categories</Link>
                  <ul className="sub-menu" style={{ display: 'none' }}>
                    <li><Link href="/category">WordPress</Link></li>
                    <li><Link href="/category">HTML</Link></li>
                    <li><Link href="/category">Photography</Link></li>
                    <li><Link href="/category">UI</Link></li>
                    <li><Link href="/category">Mockups</Link></li>
                    <li><Link href="/category">Branding</Link></li>
                  </ul>
                </li>
                <li className="has-children">
                  <Link href="/article/single-standard">Blog</Link>
                  <ul className="sub-menu" style={{ display: 'none' }}>
                    <li><Link href="/article/single-video">Video Post</Link></li>
                    <li><Link href="/article/single-audio">Audio Post</Link></li>
                    <li><Link href="/article/single-gallery">Gallery Post</Link></li>
                    <li><Link href="/article/single-standard">Standard Post</Link></li>
                  </ul>
                </li>
                <li><Link href="/style-guide">Styles</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/login">Login</Link></li>
              </ul>
            </nav>
            <div className="search-wrap">
              <form role="search" method="get" className="search-form" action="#">
                <label>
                  <span className="hide-content">Search for:</span>
                  <input type="search" className="search-field" placeholder="Type Your Keywords" name="s" title="Search for:" autoComplete="off"></input>
                </label>
                <input type="submit" className="search-submit" value="Search"></input>
              </form>
              <a href="#" id="close-search" className="close-btn">Close</a>
			      </div>
            <div className="triggers">
              <a className="search-trigger" href="#"><i className="fa fa-search"></i></a>
              <a className="menu-toggle" href="#"><span>Menu</span></a>
            </div>
          </div>
        </header>
        <section id="bricks">
          <div className="row masonry">
            {children}
          </div>
        </section>
        <footer>
          <div className="footer-main">
            <div className="row">
              <div className="col-four tab-full mob-full footer-info">
                <h4>About Our Site</h4>
                <p>Lorem ipsum Ut velit dolor Ut labore id fugiat in ut fugiat nostrud qui in dolore commodo eu magna Duis cillum dolor officia esse mollit proident.</p>
              </div>
              <div className="col-two tab-1-3 mob-1-2 site-links">
                <h4>Site Links</h4>
                <ul>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/">Blog</Link></li>
                  <li><Link href="/">FAQ</Link></li>
                  <li><Link href="/">Terms</Link></li>
                  <li><Link href="/">Privacy Policy</Link></li>
                </ul>
              </div>
              <div className="col-two tab-1-3 mob-1-2 social-links">
                <h4>Social</h4>
                <ul>
                  <li><Link href="#">Twitter</Link></li>
                  <li><Link href="#">Facebook</Link></li>
                  <li><Link href="#">Dribbble</Link></li>
                  <li><Link href="#">Google+</Link></li>
                  <li><Link href="#">Instagram</Link></li>
                </ul>
              </div>
              <div className="col-four tab-1-3 mob-full footer-subscribe">
                <h4>Subscribe</h4>
                <p>Keep yourself updated. Subscribe to our newsletter.</p>
                <form className="group">
                  <input type="email" className="email" placeholder="Type & press enter" required />
                  <input type="submit" value="Subscribe" />
                  <label className="subscribe-message"></label>
                </form>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row">
              <div className="col-twelve">
                <div className="copyright">
                  <span>© Copyright Abstract 2025</span>
                  <span>Design by <a href="http://www.styleshout.com/">styleshout</a></span>
                </div>
                <div id="go-top">
                  <a className="smoothscroll" title="Back to Top" href="#top">
                    <i className="icon icon-arrow-up"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* <div id="preloader"> 
            <div id="loader"></div>
        </div>  */}
          {/* <script src="../js/jquery-2.1.3.min.js" async></script>
          <script src="../js/plugins.js" async></script> */}
          {/* <script src="../js/jquery.appear.js" async></script>
          <script src="../js/main.js" async></script> */}
      </body>
    </html>
  );
}
