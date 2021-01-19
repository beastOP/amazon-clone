import React from 'react'
import { Link } from 'react-router-dom'
import Category from '../components/Categories'
import { useStateValue } from '../../StateProvider'
import './css/index.css'

const Home = () => {
  const [{ user }] = useStateValue()
  return (
    <div className="home">
      <div className='home_banner'></div>
      <div className='home_productGrid'>
        <div className='home_row'>
          <Category linkTo='amazon basic' name="AmazonBasic" image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_260x260._SY608_CB442725065_.jpg"/>
          <Category linkTo='electronics' name="Electronics" image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_2x._SY608_CB432774322_.jpg"/>
          <Category name="Shop Top Categories" image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__2x._SY608_CB403084762_.jpg"/>
        </div>
        <div className='home_row'>
          <Category linkTo='computers & accessories' name="Computer & Accessories" image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_2x._SY608_CB431800964_.jpg"/>
          <Category linkTo='beauty-picks' name="Beauty Picks" image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_2x._SY608_CB432774344_.jpg"/>
          { user
            ? <Category linkTo='amazonbasic' name="Deals & Promotions" image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals__2x._SY608_CB430401031_.jpg"/>
            : <div className='home__feature'>
              <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_2x._CB418309979_.jpg' alt='banner' />
              <div>
                <h3>Sign in for the best experience</h3>
                <Link to='/sign-in'>
                  Sign In
                </Link>
              </div>
            </div>
          }
        </div>
        <div className='home_slider'>
          <div className='home_slider_info'b>
            <p>Discover Amazon</p><a href='https://www.amazon.com/b?ie=UTF8&node=20338496011&ref=aistrustseemore&pf_rd_r=9ESVFCBPNTW02R9J14QW&pf_rd_p=8a5d31b2-ba07-4fea-99e1-c8469768d109'>Click to learn more</a>
          </div>
          <div className='home_carousel'>
            <img alt='i1' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_2x._CB445837684_.png' />
            <img alt='i1' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_Currency_en_US_2X._CB451228332_.jpg' />
            <img alt='i1' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_SecurePayment_en_US_2X._CB451228335_.jpg' />
            <img alt='i1' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_ImportFees_V2_en_US_2x._CB447531871_.png' />
            <img alt='i1' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_TrackPackage_en_US_2X._CB451228334_.jpg' />
            <img alt='i1' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_247CS_V2_en_US_2x._CB447531888_.png' />
          </div>
        </div>
        <div className='home_slider'>
          <div className='home_slider_info'b>
            <p>Amazon Top Sellers</p><a href='https://www.amazon.com/b?node=17938598011&pd_rd_w=b5foD&pf_rd_p=f62b9627-0b3f-409a-81f2-c4d5e3c556d9&pf_rd_r=9ESVFCBPNTW02R9J14QW&pd_rd_r=77a88787-dab7-47c4-8316-7b0a71dffcd9&pd_rd_wg=6oYoT'>Shop now</a>
          </div>
          <div className='home_carousel sub'>
            <img alt='i1' src='https://m.media-amazon.com/images/I/71gjJZ4Df2L._AC_SY400_.jpg' />
            <img alt='i1' src='https://m.media-amazon.com/images/I/91xxqc9IwcL._AC_SY400_.jpg' />
            <img alt='i1' src='https://m.media-amazon.com/images/I/71URNvzoWqL._AC_SY400_.jpg' />
            <img alt='i1' src='https://m.media-amazon.com/images/I/71nMzhO05jL._AC_SY400_.jpg' />
            <img alt='i1' src='https://m.media-amazon.com/images/I/71s7HbyqzEL._AC_SY400_.jpg' />
            <img alt='i1' src='https://m.media-amazon.com/images/I/61po+blqBuL._AC_SY400_.jpg' />
          </div>
        </div>
        <div className='home_slider'>
          <div className='home_slider_info'b>
            <p>Top Beauty & Personal Care products</p><a href='https://www.amazon.com/b?node=18505451011&pd_rd_w=9amMG&pf_rd_p=e8b33f76-1c86-4c53-a1c1-0153b2fb45c5&pf_rd_r=9ESVFCBPNTW02R9J14QW&pd_rd_r=77a88787-dab7-47c4-8316-7b0a71dffcd9&pd_rd_wg=6oYoT'>Shop now</a>
          </div>
          <div className='home_carousel sub'>
            <img alt='i1' src='https://m.media-amazon.com/images/I/81z8tQe35hL._AC_SY400_.jpg' />
            <img alt='i1' src='https://m.media-amazon.com/images/I/71aXzv34N+L._AC_SY400_.jpg' />
            <img alt='i1' src='https://m.media-amazon.com/images/I/61kcUZYve1L._AC_SY400_.jpg' />
            <img alt='i1' src='https://m.media-amazon.com/images/I/91l2Hzlu8zL._AC_SY400_.jpg' />
            <img alt='i1' src='https://m.media-amazon.com/images/I/8110-qC+fHL._AC_SY400_.jpg' />
            <img alt='i1' src='https://m.media-amazon.com/images/I/61MVVipqDqL._AC_SY400_.jpg' />
            <img alt='i1' src='https://m.media-amazon.com/images/I/81dEyJq2NAL._AC_SY400_.jpg' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
