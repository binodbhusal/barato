import './Footer.scss';
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from 'react-icons/fa';
import Payment from '../../assets/payments.png';

const Footer = () => (
  <footer className="footer-section">
    <div className="footer-content">
      <div className="col">
        <div className="title">About</div>
        <div className="text">
          Contrary to popular belief, Lorem Ipsum is not simply
          random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old.
          Richard McClintock, a Latin professor at Hampden-Sydney
          College in Virginia, looked up one of the more obscure Latin words
        </div>
      </div>
      <div className="col">
        <div className="title">Contact</div>
        <div className="c-item">
          <FaLocationArrow />
          <div className="text">
            R Timor Olival Basto-Lisboa
          </div>
        </div>

        <div className="c-item">
          <FaMobileAlt />
          <div className="text">
            Phone: +351-912820833
          </div>
        </div>

        <div className="c-item">
          <FaEnvelope />
          <div className="text">
            Email: binodreal@gmail.com
          </div>
        </div>

      </div>
      <div className="col">
        <div className="title">Categories</div>
        <span className="text">Headphones</span>
        <span className="text">Smart Watches</span>
        <span className="text">Bluetooth Speakers</span>
        <span className="text">Wireless Earbuds</span>
        <span className="text">Home Theater</span>
        <span className="text">Projectors</span>
      </div>
      <div className="col">
        <div className="title">Pages</div>
        <span className="text">Home</span>
        <span className="text">About</span>
        <span className="text">Privacy Policy</span>
        <span className="text">Returns</span>
        <span className="text">Terms & Conditions</span>
        <span className="text">Contacts</span>
      </div>

    </div>
    <div className="bottom-bar">
      <div className="bottom-bar-content">
        <div className="text">
          Barato@2024 Created by Binod Bhusal. Premium e-commerce solution
        </div>
        <img src={Payment} alt="" />
      </div>
    </div>
  </footer>
);
export default Footer;
