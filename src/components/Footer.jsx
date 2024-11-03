import React from 'react'
import { Link } from 'react-router-dom'
import facebook from '../assets/images/fb.svg'
import twitter from '../assets/images/twitter.svg'
import instagram from '../assets/images/ig.svg'
import tiktok from '../assets/images/tiktok.svg'
import snap from '../assets/images/snap.svg'
import android from '../assets/images/android.svg'
import apple from '../assets/images/apple.svg'
import masterCard from '../assets/images/MasterCard.png'
import payPal from '../assets/images/PayPal.png'
import eBay from '../assets/images/eBay.png'
import googlePay from '../assets/images/googlePay.png'
import monobank from '../assets/images/monobank.png'
import discover from '../assets/images/discover.png'
import wu from '../assets/images/wu.png'
import payoneer from '../assets/images/payoneer.png'
import applePay from '../assets/images/applePay.png'
import ae from '../assets/images/ae.png'
import amazon from '../assets/images/amazon.png'
import aliPay from '../assets/images/aliPay.png'
import bitPay from '../assets/images/bitPay.png'
import btc from '../assets/images/bitcoin.png'

const Footer = () => {
  return (
    <div>
      <footer className='bg-background flex flex-col text-center md:hidden p-[30px]'>
       <div className='flex flex-col gap-[30px]'>
       <div className='flex flex-col gap-[30px] justify-center'>
            <div className='flex flex-col gap-[15px]'>
                <label className='uppercase text-card-bg'>Company Info</label>
                <ul className='text-custom-ash text-[13px] flex flex-col gap-[10px]'>
                    <li>About Burn and Co.</li>
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
            <span>©2010-2022 Burn and Co All Rights Reserved</span>
         </div>
       </div>
      </footer>

      <footer className='hidden p-[50px] bg-background md:flex md:flex-col gap-[100px]'>
         <div className="main flex justify-between">
            <div className="text-content flex gap-[80px] text-[13px]">
            <div className='flex flex-col gap-[15px]'>
                <label className='uppercase text-card-bg'>Company Info</label>
                <ul className='text-custom-ash text-[13px] flex flex-col gap-[10px]'>
                    <li>About Burn and Co </li>
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

           <div className="contact-con ">
           <div className="contact flex gap-[150px] text-[13px]">
                <div className='flex flex-col gap-[15px]'>
                    <label className='uppercase text-card-bg'>Socials</label>
                    <div className="socials flex items-center gap-[10px] justify-center">
                        <img src={facebook} alt="" className='w-[25px]' />
                        <img src={twitter} alt="" className='w-[25px]' />
                        <img src={instagram} alt="" className='w-[25px]' />
                        <img src={tiktok} alt="" className='w-[25px]' />
                        <img src={snap} alt="" className='w-[25px]' />
                    </div>
                </div>

                <div className='platforms flex flex-col gap-[15px]'>
                    <label className='uppercase text-card-bg'>Platforms</label>
                    <div className="flex items-center gap-[10px] justify-center">
                        <img src={android} alt="" className='w-[25px]' />
                        <img src={apple} alt="" className='w-[25px]' />
                    </div>
                </div>
            </div>
            
            <div className="form mt-[15px] flex flex-col gap-[10px]">
                <label htmlFor="" className='uppercase text-[13px] text-[#1F2937]'>Sign up for Burn and Co latest news</label>
                <form action="" className='flex gap-[15px]'>
                    <input type="email" placeholder='Your email' className='p-[5px] pl-[10px] w-[300px] border border-[#9CA3AF]' />
                    <button className='bg-[#1F2937] text-white uppercase text-[13px] py-[5px] px-[20px]'>Subscribe</button>
                    
                </form>
                <p className='text-[13px] text-[#6B7280]'>By clicking the SUSCRIBE button, you are agreeing to our <Link className='text-[#0F4FCE] underline'>Privacy & cookie policy</Link> </p>
            </div>
           </div>
         </div>

         <div className="second flex justify-between">
            <div className="text-content text-[13px] text-[#6B7280]">
                <label htmlFor="">©2010-2022 Burn and Co All Rights Reserved</label>
                <div className="spans py-[10px] grid gap-[5px] grid-cols-3">
                    <span>Privacy Center</span>
                    <span>Privacy & Cookie Policy</span>
                    <span>Manage Cookies</span>
                    <span>Terms & Conditions</span>
                    <span>Copyright Notice</span>
                    <span>Imprint</span>
                </div>
            </div>

            <div className="cards">
                <label htmlFor="" className='uppercase text-[#1F2937] text-[13px]'>We Accept</label>
                <div className="container grid grid-cols-8 gap-[10px] mt-[14px]">
                    <img src={masterCard} alt="" />
                    <img src={payPal} alt="" />
                    <img src={eBay} alt="" />
                    <img src={googlePay} alt="" />
                    <img src={monobank} alt="" />
                    <img src={discover} alt="" />
                    <img src={wu} alt="" />
                    <img src={payoneer} alt="" />
                    <img src={applePay} alt="" />
                    <img src={ae} alt="" />
                    <img src={amazon} alt="" />
                    <img src={aliPay} alt="" />
                    <img src={bitPay} alt="" />
                    <img src={btc} alt="" />
                </div>
            </div>
         </div>
      </footer>
    </div>
  )
}

export default Footer
