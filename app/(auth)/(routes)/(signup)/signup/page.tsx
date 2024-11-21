import Head from "next/head";
import { FaGoogle, 
  FaRegEnvelope } 
  from 'react-icons/fa';
  import {MdLockOutline} from 'react-icons/md';

export default function Home() {
  return(
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white text-black rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
             <span className="text-green-500">Medi</span>Care
           </div>
           <div className="py-8">
            <h2 className="text-3xl font-bold text-green-500 mb-2">
              Sign up to Account
              </h2>
            <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
            
            <p className="text-gray-400 my-3">or use your email account</p>
            <div className="flex flex-col items-center">
            <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                <div className="text-gray-400 m-2" />
                <input type="name" name="name" placeholder="Name" className="bg-gray-100 outline-none text-sm
                flex-1" />
              </div>
              
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                <FaRegEnvelope className="text-gray-400 m-2" />
                <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm
                flex-1" />
              </div>

              <div className="bg-gray-100 w-64 p-2 flex items-center mb-4">
                <MdLockOutline className="text-gray-400 m-2" />
                <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm
                flex-1" />
                </div>

                <div className="bg-gray-100 w-64 p-2 flex items-center">
                <MdLockOutline className="text-gray-400 m-2 mb-3" />
                <input type="confirm password" name="confirm password" placeholder="Confirm Password" className="bg-gray-100 outline-none text-sm
                flex-1" />
                </div>

               
              <a 
           href="#" className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 mt-3 inline-block font-semibold hover:bg-green-500
           hover:text-white"
        >
          Sign up
          </a>
            </div>
           </div>
        </div>
        
        <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
        <h2 className="text-3xl font-bold mb-2">Have a account?</h2>
        <div className="border-2 w-10 border-white inline-block"></div>
        <p className="mb-4">Silahkan Login Jika Sudah Memiliki Akun
          </p> 
          <p className="mb-5">Konsultasi, Buat janji, dan kunjungi rumah sakit sekarang tersedia di MediCare!
          </p> 
        <a 
           href="#" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white
           hover:text-green-500"
        >
          Sign in
          </a>
        </div>
       
       </div>
        
      </main>
    </div>
  )
}