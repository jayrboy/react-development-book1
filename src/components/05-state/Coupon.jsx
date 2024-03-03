const Coupon = ({ data, setCoupon }) => {
  const { status, secretWord } = data

  const onCouponUse = () => {
    setCoupon()
  }

  return (
    <div className="col-sm-6 mt-2 mx-auto">
      <div className="card">
        <div className="card-header text-center">
          <button
            className="btn btn-success btn-sm"
            disabled={!status}
            onClick={onCouponUse}
          >
            ใช้คูปอง
          </button>
        </div>
        <div className="card-body">
          <span className="mr-2">รหัสคูปอง : </span>

          {status ? (
            <span className="badge text-bg-secondary">{secretWord}</span>
          ) : (
            <span className="badge text-bg-danger">คูปองถูกใช้แล้ว</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Coupon
