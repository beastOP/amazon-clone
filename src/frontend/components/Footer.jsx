import React from 'react'
import FooterContent from './FooterContent'
import './css/Footer.css'

const Footer = () => { 
  return (
    <div className='footer'>
      <div className='footer_row'>
        <div className='footer_column'>
          <FooterContent
            imageUrl='https://music.amazon.com/?ref=dm_aff_amz_com'
            h6='Amazon Music'
            p='Steam millions of songs'
          />
        </div>
        <div className='footer_column'>
          <FooterContent
            imageUrl='https://music.amazon.com/?ref=dm_aff_amz_co://advertising.amazon.com/?ref=footer_advtsing_amzn_com'
            h6='Amazon Advertising'
            p='find, attract, and engage customers'
          />
        </div>
        <div className='footer_column'>
          <FooterContent
            imageUrl='https://www.amazon.com/STRING-subnav_primephotos_amazondrive/b?ie=UTF8&node=15547130011&ref_=us_footer_drive'
            h6='Amazon Drive'
            p='cloud storage from Amazon'
          />
        </div>
        <div className='footer_column'>
          <FooterContent
            imageUrl='https://www.6pm.com/'
            h6='6pm'
            p='Score deals on fashion brands'
          />
        </div>
        <div className='footer_column'>
          <FooterContent
            imageUrl='https://www.abebooks.com/'
            h6='AbeBooks'
            p='Books, art & collectibles'
          />
        </div>
        <div className='footer_column'>
          <FooterContent
            imageUrl='https://www.acx.com/'
            h6='ACX'
            p='Audiobook Publishing Made Easy'
          />
        </div>
        <div className='footer_column'>
          <FooterContent
            imageUrl='https://www.alexa.com/'
            h6='Alexa'
            p='Actionable Analytics for the web'
          />
        </div>
      </div>
      <div className='footer_row'>
        <div className='footer_column'>
          <FooterContent
            imageUrl='https://www.amazon.com/gp/redirect.html?_encoding=UTF8&location=https%3A%2F%2Fsell.amazon.com%2F%3Fld%3DAZUSSOA-footer-aff%26ref_%3Dfooter_sell&source=standards&token=5C1C6935C910A355A9EFF638456512B3EE3E32AC'
            h6='Sell on Amazon'
            p='Start a Selling Account'
          />
        </div>
        <div className='footer_column'>
          <FooterContent
            imageUrl='https://www.amazon.com/business?_encoding=UTF8&ref_=footer_retail_b2b'
            h6='Amazon Buisness'
            p='Everything For Your Buisness'
          />
        </div>
        <div className='footer_column'>
          <FooterContent
            imageUrl='https://www.amazon.com/International-Shipping-Direct/b?ie=UTF8&node=230659011&ref_=footer_amazonglobal'
            h6='AmazomGlobal'
            p='Ship Orders Internationally'
          />
        </div>
        <div className='footer_column'>
          <FooterContent
            imageUrl='https://www.amazon.com/services?_encoding=UTF8&ref_=footer_services'
            h6='Home Services'
            p='Experienced Pros Happiness Garentuee'
          />
        </div>
        <div className='footer_column'>
          <FooterContent
            imageUrl='https://ignite.amazon.com/?ref=amazon_footer_ignite'
            h6='Amazon Ignite'
            p='Sell your original Digital Educational Resources'
          />
        </div>
        <div className='footer_column'>
          <FooterContent
            imageUrl='https://rapids.amazon.com/?ref=rapids_acq_gatewayfooter'
            h6='Amazon Rapids'
            p='Fun stories for kids on the go'
          />
        </div>
        <div className='footer_column'>
          <FooterContent
            imageUrl='https://www.alexa.com/'
            h6='Amazon Web Services'
            p='Scalable Cloud Computing Services'
          />
        </div>
      </div>
      <div className='footer_row'>
        <div className='footer_column'>
          <FooterContent
            imageUrl='https://www.audible.com/'
            h6='Audible'
            p='Listen to Books & orignal audio performances'
          />
        </div>
        <div className='footer_column'>
          <FooterContent
            imageUrl='https://www.bookdepository.com/'
            h6='Book Depository'
            p='Books With Free Delivary Worldwid'
          />
        </div>
        <div className='footer_column'>
          <FooterContent
            imageUrl='https://www.boxofficemojo.com/?ref_=amzn_nav_ftr'
            h6='Box Office Mojo'
            p='Find Movie Box Office Data'
          />
        </div>
        <div className='footer_column'>
          <FooterContent
            imageUrl='https://www.comixology.com/'
            h6='ComiXology'
            p='Thousand Of Digital Comics'
          />
        </div>
        <div className='footer_column'>
          <FooterContent
            imageUrl='https://www.dpreview.com/'
            h6='DPReview'
            p='Digital Photography'
          />
        </div>
        <div className='footer_column'>
          <FooterContent
            imageUrl='https://www.eastdane.com/welcome'
            h6='East Dane'
            p="Disigners Men's Fashion"
          />
        </div>
        <div className='footer_column'>
          <FooterContent
            imageUrl='https://www.alexa.com/'
            h6='Fabric'
            p='Sweing, Quilting & Knitting'
          />
        </div>
      </div>
      <div className='footer_end'>
        <p>Conditions of Use &nbsp;&nbsp;&nbsp;Privacy Notice &nbsp;&nbsp;&nbsp;Interest-Based Ads <span> &nbsp;&nbsp; ©&nbsp; 1996-2020, Amazon.com, Inc. or its affiliates</span></p>
      </div>
    </div>
  )
}

export default Footer
