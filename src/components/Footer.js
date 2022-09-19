import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.css"
import { Button } from './Button';



function Footer() {
  return (
    <div className='footer-container'>
      
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            
          </div>

          <div class='footer-link-items'>

          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to="/" className='social-logo'>
              Opti <i class="fa-solid fa-user"></i>
            </Link>
          </div>
          <div className='social-icons'>
            <a className='social-icon-link telegram'
            href="https://t.me/Oxprey" 
            target="_blank"
            aria-label='Mirror'
            >
            <i className="fab fa-telegram"></i>
            </a>
            <a className='social-icon-link twitter'
            href='https://twitter.com/0xprey_'
            target="_blank"
            aria-label='Twitter'
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a className='social-icon-link youtube'
            href='https://www.youtube.com/channel/UCUpVcZ9rHpWZvzz64No8Lfw'
            target="_blank"
            aria-label='Youtube'
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a className='social-icon-link discord'
            href='https://discord.com/users/391094115439214604'
            target="_blank"
            aria-label='Youtube'
            >
              <i class="fa-brands fa-discord"></i>
            </a>
          </div>
        
        </div>
      </section>
    </div>
  )
  }
export default Footer;