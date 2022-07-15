import Image from 'next/image'
import profilePic from '../public/logo.png'

export default function Testeimg(){
  return(

  <div className={'position: fixed h-screen w-screen overflow-hidden -z-10'}>
    <Image 
      src={profilePic}
      alt="logo"
      layout='responsive'
      objectFit="cover"
      quality={100}
    />
  </div>
)}