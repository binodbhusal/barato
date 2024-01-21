import { useEffect } from 'react';
import BannerImg from '../../../assets/banner-img.png';
import './Banner.scss';

const Banner = () => {
  useEffect(() => {

  });
  return (
    <>
      <div className="head-banner">
        <div className="content">
          <div className="text-content">
            <h1>Sales</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the
              standard dummy text ever since the 1500s

            </p>
            <div className="call-to-actions">
              <div className="call-to-action">Read More</div>
              <div className="call-to-action call-to-action2"> Shop Now</div>
            </div>
          </div>
          <img className="banner-image" src={BannerImg} alt="" />
        </div>

      </div>
    </>
  );
};

export default Banner;
