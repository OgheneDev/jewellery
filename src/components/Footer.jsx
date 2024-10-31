import React from 'react'
import facebook from '../assets/images/fb.svg'
import twitter from '../assets/images/twitter.svg'
import instagram from '../assets/images/ig.svg'
import tiktok from '../assets/images/tiktok.svg'
import snap from '../assets/images/snap.svg'
import android from '../assets/images/android.svg'
import apple from '../assets/images/apple.svg'

const Footer = () => {
  return (
    <div>
      <footer className='bg-background flex flex-col text-center md:hidden p-[30px]'>
       <div className='flex flex-col gap-[30px]'>
       <div className='flex flex-col gap-[30px] justify-center'>
            <div className='flex flex-col gap-[15px]'>
                <label className='uppercase text-card-bg'>Company Info</label>
                <ul className='text-custom-ash text-[13px] flex flex-col gap-[10px]'>
                    <li>About Laura’s Closet </li>
                    <li>Social Responsibility</li>
                    <li>Affiliate</li>
                    <li>Fashion Blogger</li>
                </ul>
            </div>

            <div className='flex flex-col gap-[15px]'>
                <label className='uppercase text-card-bg'>HElp & Support</label>
                <ul className='text-custom-ash text-[13px] flex flex-col gap-[10px]'>
                    <li>Shipping Info</li>
                    <li>Returns</li>
                    <li>How to Order</li>
                    <li>How to Track</li>
                    <li>Size Chart</li>
                </ul>
            </div>

            <div className='flex flex-col gap-[15px]'>
                <label className='uppercase text-card-bg'>customer care</label>
                <ul className='text-custom-ash text-[13px] flex flex-col gap-[10px]'>
                    <li>Contact Us</li>
                    <li>Payment</li>
                    <li>Bonus Point</li>
                    <li>Notices</li>
                </ul>
            </div>
        </div>

        <div>
            <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[15px]'>
                    <label className='uppercase text-card-bg'>Socials</label>
                    <div className="socials flex items-center gap-[10px] justify-center">
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={instagram} alt="" />
                        <img src={tiktok} alt="" />
                        <img src={snap} alt="" />
                    </div>
                </div>

                <div className='platforms flex flex-col gap-[15px]'>
                    <label className='uppercase text-card-bg'>Platforms</label>
                    <div className="flex items-center gap-[10px] justify-center">
                        <img src={android} alt="" />
                        <img src={apple} alt="" />
                    </div>
                </div>
            </div>
        </div>
       </div>

       <div>
         <div className="policy mt-[20px] text-custom-ash">
            <span>©2010-2022 Laura’s Closet All Rights Reserved</span>
         </div>
       </div>
      </footer>
    </div>
  )
}

export default Footer
