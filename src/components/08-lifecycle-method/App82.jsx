import { useState, useEffect } from 'react'

const App = () => {
  const [name, setName] = useState('state เริ่ม้ตน')

  // การใช้ Hook useEffect เพื่อจำลอง lifecycle method componentDidMount
  useEffect(() => {
    console.log('2 หลังจากคอมโพเนนต์ถูกนำไปใส่ใน DOM')
  }, []) // เรียกใช้เมื่อคอมโพเนนต์นำเข้าครั้งแรกเท่านั้น (เหมือน componentDidMount)

  console.log('1 ทำการ render เนื้อหา')
  return <div className="container border rounded-1">{name}</div>
}

export default App
