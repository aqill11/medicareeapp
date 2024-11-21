import Head from "next/head";
import Image from 'next/image'; 
import user from '../public/user.jpg';
import hh from '../public/hh.png';
import dokterumum from '../public/dokterumum.png';
import doktergigi from '../public/doktergigi.png';
import bedah from '../public/bedah.png';
import tht from '../public/tht.png';
import paru from '../public/paru.png';
import jantung from '../public/jantung.png';
import lopi2 from '../public/lopi2.png'; 
import bru from '../public/bru.png';
import w from '../public/w.jpg';
import cw from '../public/cw.png';
import koper from '../public/koper.png';
import co from '../public/co.png';
import op from '../public/op.png';

export default function Home() {
    return (
        <div className="relative flex flex-col min-h-screen py-2 bg-white">
            <Head>
                <title>Halaman Utama</title>
                <meta name="description" content="Selamat datang di MediCare!" />
            </Head>

            <nav className="bg-white shadow fixed py-3 top-0 left-0 right-0 z-10">
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center py-3">
                        <span className="text-green-500 text-2xl font-bold">Medi</span>
                        <span className="text-black text-2xl font-bold">Care</span>
                        <div className="flex space-x-4 ml-6">
                            <a href="#" className="text-gray-700 hover:text-green-500 font-semibold">Beranda</a>
                            <a href="#" className="text-gray-700 hover:text-green-500 font-semibold">Riwayat</a>
                        </div>
                    </div>
                    <div className="ml-auto"> 
                        <a href="#" className="text-white hover:text-black font-semibold bg-green-600 py-3 rounded-lg px-5">Login</a>
                    </div>
                </div>
            </nav>

            <div className="relative flex justify-start max-w-full mx-0 mt-14">
                <a href="#" className="absolute mt-6 left-4 bg-green-600 text-white py-1 px-3 rounded-lg shadow hover:bg-green-500">
                    Back
                </a>

                <p className="absolute mt-6 ml-20 text-black py-1 px-5 rounded-lg shadow">
                    Dokter Umum
                </p>

                <div className="flex justify-start mx-0 mt-4">
                    <Image 
                        src={w} 
                        alt="w.jpg" 
                        layout="responsive" 
                        placeholder='blur'
                        height={1000}
                        width={1000}
                    />
                </div>

                <div className="flex justify-start mx-0 mt-4">
                    <Image 
                        src={w} 
                        alt="w.jpg" 
                        layout="responsive" 
                        placeholder='blur'
                        height={1000}
                        width={1000}
                    />
                </div>
                
            </div>

            <div className="max-w-32xl mx-auto relative">
             <Image 
             src={op} 
            alt="op.png" 
             layout="responsive" 
              className="w-full h-auto shadow-lg" 
              placeholder='blur'
  />
</div>

            
            <div className="mr-auto -mt-36 ml-6 py-2 relative flex items-center">
                <Image 
                    src={cw} 
                    alt="cw.png" 
                    layout="fixed" 
                    width={110} 
                    height={100} 
                    placeholder='blur'
                />
                <a href="#" className="ml-4 -mt-24 mb-4 hover:text-green-500 text-black text-lg">Dr Feronika</a>
            </div>

            <div className="mr-auto -mt-32 ml-36 py-2 mb-1 relative flex items-center">
            <span className=" ml-1 text-gray-500 text-lg">Dokter Umum</span>
            </div>

             
            <div className="mr-auto -mt-3 ml-36 py-2 relative flex items-center">
                <Image 
                    src={koper} 
                    alt="koper.png" 
                    layout="fixed" 
                    width={25} 
                    height={70} 
                    placeholder='blur'
                />
            </div>
            <div className="mr-auto -mt-8 ml-44 py-2 relative flex items-center">
            <a href="#" className=" hover:text-green-500 -ml-1 bg-gray-100 font-bold text-xs text-gray-500">6 Tahun</a>
            </div>

            <div className="mr-auto ml-36 py-2 relative flex items-center">
            <span className=" ml-1 text-black text-lg">Rp. 28.000</span>
            </div>

            
            <div className="max-w-32xl mt-5 mx-auto relative">


                <Image 
                    src={op} 
                    alt="op.png" 
                    layout="responsive" 
                    className="w-full h-auto shadow-lg" 
                    placeholder='blur'
                />
            </div>
            
            <div className="mr-auto -mt-36 ml-6 py-2 relative flex items-center">
                <Image 
                    src={cw} 
                    alt="cw.png" 
                    layout="fixed" 
                    width={110} 
                    height={100} 
                    placeholder='blur'
                />
                <a href="#" className="ml-4 -mt-24 mb-4 hover:text-green-500 text-black text-lg">Dr Nabila Davega</a>
            </div>

            <div className="mr-auto -mt-32 ml-36 py-2 mb-1 relative flex items-center">
            <span className=" ml-1 text-gray-500 text-lg">Dokter Umum</span>
            </div>

             
            <div className="mr-auto -mt-3 ml-36 py-2 relative flex items-center">
                <Image 
                    src={koper} 
                    alt="koper.png" 
                    layout="fixed" 
                    width={25} 
                    height={70} 
                    placeholder='blur'
                />
            </div>
            <div className="mr-auto -mt-8 ml-44 py-2 relative flex items-center">
            <a href="#" className=" hover:text-green-500 -ml-1 bg-gray-100 font-bold text-xs text-gray-500">2 Tahun</a>
            </div>

            <div className="mr-auto ml-36 py-2 relative flex items-center">
            <span className=" ml-1 text-black text-lg">Rp. 22.500</span>
            </div>

            
            <div className="max-w-32xl mt-5 mx-auto relative">



                <Image 
                    src={op} 
                    alt="op.png" 
                    layout="responsive" 
                    className="w-full h-auto shadow-lg" 
                    placeholder='blur'
                />
            </div>
            
            <div className="mr-auto -mt-36 ml-6 py-2 relative flex items-center">
                <Image 
                    src={co} 
                    alt="co.png" 
                    layout="fixed" 
                    width={110} 
                    height={100} 
                    placeholder='blur'
                />
                <a href="#" className="ml-4 -mt-24 mb-4 hover:text-green-500 text-black text-lg"> Dr Rama Dani Putra</a>
            </div>

            <div className="mr-auto -mt-32 ml-36 py-2 mb-1 relative flex items-center">
            <span className=" ml-1 text-gray-500 text-lg">Dokter Umum</span>
            </div>

             
            <div className="mr-auto -mt-3 ml-36 py-2 relative flex items-center">
                <Image 
                    src={koper} 
                    alt="koper.png" 
                    layout="fixed" 
                    width={25} 
                    height={70} 
                    placeholder='blur'
                />
            </div>
            <div className="mr-auto -mt-8 ml-44 py-2 relative flex items-center">
            <a href="#" className=" hover:text-green-500 -ml-1 bg-gray-100 font-bold text-xs text-gray-500">6 Tahun</a>
            </div>

            <div className="mr-auto ml-36 py-2 relative flex items-center">
            <span className=" ml-1 text-black text-lg">Rp. 50.000</span>
            </div>

            
            <div className="max-w-32xl mt-5 mx-auto relative">




                <Image 
                    src={op} 
                    alt="op.png" 
                    layout="responsive" 
                    className="w-full h-auto shadow-lg" 
                    placeholder='blur'
                />
            </div>
            
            <div className="mr-auto -mt-36 ml-6 py-2 relative flex items-center">
                <Image 
                    src={cw} 
                    alt="cw.png" 
                    layout="fixed" 
                    width={110} 
                    height={100} 
                    placeholder='blur'
                />
                <a href="#" className="ml-4 -mt-24 mb-4 hover:text-green-500 text-black text-lg">Dr Ulyandini</a>
            </div>

            <div className="mr-auto -mt-32 ml-36 py-2 mb-1 relative flex items-center">
            <span className=" ml-1 text-gray-500 text-lg">Dokter Umum</span>
            </div>

             
            <div className="mr-auto -mt-3 ml-36 py-2 relative flex items-center">
                <Image 
                    src={koper} 
                    alt="koper.png" 
                    layout="fixed" 
                    width={25} 
                    height={70} 
                    placeholder='blur'
                />
            </div>
            <div className="mr-auto -mt-8 ml-44 py-2 relative flex items-center">
            <a href="#" className=" hover:text-green-500 -ml-1 bg-gray-100 font-bold text-xs text-gray-500">4 Tahun</a>
            </div>

            <div className="mr-auto ml-36 py-2 relative flex items-center">
            <span className=" ml-1 text-black text-lg">Rp. 20.000</span>
            </div>
            

        </div>
    );
}
