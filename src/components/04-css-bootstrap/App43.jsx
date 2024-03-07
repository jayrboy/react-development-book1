import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const myPic =
    'https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/335067748_943378343326998_4474839827127937759_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFwlzxnp6CCXn_F_87Ub5DJuPUAqVY8Ig649QCpVjwiDqaV1Vpbx4WKbtw61ipZwpMOu1bnBAtK_Z6a6g6HWGQD&_nc_ohc=auhJ-wJh-pgAX-81aiu&_nc_ht=scontent.fbkk28-1.fna&oh=00_AfAP8gXkpqd2cwTdb2j0vU_LEYLCLwcokXlphHG8pzRoeg&oe=65E74FE1'

  return (
    <div className="container text-center">
      <img className="img-thumbnail" src={myPic} width="400px" alt="me" />
    </div>
  )
}
export default App
