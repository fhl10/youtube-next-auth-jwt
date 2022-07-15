import Image from 'next/image'
import profilePic from '../public/logo.png'

export default function Testeimg(){
  return(

  
    <Image
      className="mx-auto h-12 w-auto" 
      src={profilePic}
      alt="logo"
      // layout='responsive'
      // objectFit="cover"
      quality={100}
    />
  
)}
