import { Link } from 'react-router-dom';
import './Success.scss';

const Success = () => (
  <div className="success-container">
    <div className="success">

      <p className="order-complete">
        Your order is completed now
        {' '}
        <span style={{ fontSize: '20px', color: '3E7C17' }}>&#9989;</span>
      </p>
      <h1>Thank you for shopping with us.</h1>
      <p>Please check your email for the receipt.</p>
      <p>
        if you have any questions please send us email
        {' '}
        <span style={{ color: 'red' }}>customers@barato.com</span>
      </p>
      <Link to="/">
        <button type="button" className="btn-success-continue">Continue Shopping</button>
      </Link>
    </div>
  </div>
);
export default Success;
