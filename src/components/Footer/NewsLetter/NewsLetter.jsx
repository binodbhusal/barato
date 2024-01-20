import './NewsLetter.scss';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareXTwitter, FaLinkedin } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';

const NewsLetter = () => (
  <div className="newsletter-section">
    <div className="newsletter-content">
      <span className="small-text">NewsLetter</span>
      <span className="big-text">Sign up for latest offers and updates</span>
      <div className="form">
        <input type="text" placeholder="Email Address" />
        <button type="submit">Subscribe</button>
      </div>
      <div className="text">Will be used in accordance with our privacy policy</div>
      <div className="social-icons">
        <div className="icons">
          <FaFacebook size={15} />
          {' '}
        </div>
        <div className="icons">
          <FaSquareXTwitter size={15} />
          {' '}
        </div>
        <div className="icons">
          <AiFillInstagram size={15} />
          {' '}
        </div>
        <div className="icons">
          <FaLinkedin size={15} />
          {' '}
        </div>

      </div>
    </div>

  </div>
);

export default NewsLetter;
