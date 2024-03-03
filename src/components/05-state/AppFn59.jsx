import { useState } from 'react'
import Coupon from './Coupon'

const App = () => {
  const [coupons, setCoupons] = useState({
    coupon1: {
      secretWord: 'thisDyxr23Istubk2MyduzZKey',
      status: true,
    },
    coupon2: {
      secretWord: 'ubk2M2MyduzZKeyyd584Istubk',
      status: true,
    },
  })

  const useCoupon = (name) => {
    setCoupons((prevCoupons) => ({
      ...prevCoupons,
      [name]: {
        ...prevCoupons[name],
        status: false,
      },
    }))
  }

  return (
    <div className="container">
      <div className="row mt-4">
        <Coupon
          data={coupons['coupon1']}
          setCoupon={() => useCoupon('coupon1')}
        />
        <Coupon
          data={coupons['coupon2']}
          setCoupon={() => useCoupon('coupon2')}
        />
      </div>
    </div>
  )
}

export default App
