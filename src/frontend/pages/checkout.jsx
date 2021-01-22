
import React from 'react'
import { Redirect } from 'react-router-dom'
import './css/checkout.css'
import { useStateValue } from '../../StateProvider'
import GooglePayButton from '@google-pay/button-react'

const Checkout = () => {
  const [{items, total},] = useStateValue()
  if(items === 0) return <Redirect to='/' />
  return (
    <div className='checkout cart'>
        <div className='checkout_container cart_container'>
          <div className='checkout_total cart_total'>
            <h3>Order Summary</h3>
            <div>
              <p>Items:</p><strong>{items}</strong>
            </div>
            <div>
              <p>Total:</p><strong>$ {total ? total : 0}</strong>
            </div>
            <div className='a'>
              <PayBtn />
            </div>
          </div>
        </div>
    </div>
  )
}


const PayBtn = () => (
  <div className='payBtn'>
<GooglePayButton
          environment="TEST"
          paymentRequest={{
                      apiVersion: 2,
                        apiVersionMinor: 0,
                        allowedPaymentMethods: [
                                      {
                                                      type: 'CARD',
                                                      parameters: {
                                                                        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                                                        allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                                                      },
                                                      tokenizationSpecification: {
                                                                        type: 'PAYMENT_GATEWAY',
                                                                        parameters: {
                                                                                            gateway: 'example',
                                                                                            gatewayMerchantId: 'exampleGatewayMerchantId',
                                                                                          },
                                                                      },
                                                    },
                                    ],
                        merchantInfo: {
                                      merchantId: '12345678901234567890',
                                        merchantName: 'Demo Merchant',
                                      },
                        transactionInfo: {
                                      totalPriceStatus: 'FINAL',
                                        totalPriceLabel: 'Total',
                                        totalPrice: '1',
                                        currencyCode: 'USD',
                                        countryCode: 'US',
                                      },
                        shippingAddressRequired: true,
                        callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
                      }}
          onLoadPaymentData={paymentRequest => {
                      console.log('Success', paymentRequest);
                    }}
          onPaymentAuthorized={paymentData => {
                        console.log('Payment Authorised Success', paymentData)
                        return { transactionState: 'SUCCESS'}
                      }
                    }
          onPaymentDataChanged={paymentData => {
                        console.log('On Payment Data Changed', paymentData)
                        return { }
                      }
                    }
          existingPaymentMethodRequired='false'
          buttonColor='black'
          buttonType='Buy'
        />
  </div>
)

export default Checkout
