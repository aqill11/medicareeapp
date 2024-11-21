import React from 'react';
import { DatePicker, TimePicker } from 'antd'; 
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
import lpo from '../public/lpo.png';
import dd from '../public/dd.png';  

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
                        layout="intrinsic" 
                        placeholder='blur'
                        height={1000}
                        width={1000}
                    />
                </div>

                <div className="flex justify-start mx-0 mt-4">
                    <Image 
                        src={w} 
                        alt="w.jpg" 
                        layout="intrinsic" 
                        placeholder='blur'
                        height={1000}
                        width={1000}
                    />
                </div>
                
            </div>

            <div className="max-w-32xl mx-auto mb-3 relative">
                <Image 
                    src={lpo} 
                    alt="lpo.png" 
                    layout="responsive" 
                    className="w-full h-auto shadow-lg" 
                    placeholder='blur'
                />
            </div>
            
            <div className="mr-auto -mt-44 mb-4 ml-6 py-3 relative flex items-center">
                <p className="-ml-2 -mt-24 mb-6 text-black font-sans text-5xl ">Dr Feronika</p>
            </div>

            <div className="mr-auto -mt-16 ml-4 py-2 mb-3 relative flex items-center">
                <span className=" ml-1 font-sans text-gray-500 text-3xl">Dokter Umum</span>
            </div>

            <div className="mr-auto -mt-4 ml-5 py-2 relative flex items-center">
                <Image 
                    src={koper} 
                    alt="koper.png" 
                    layout="intrinsic" 
                    width={40} 
                    height={70} 
                    placeholder='blur'
                />
                <span className=" ml-2 text-gray-500 font-sans text-xl">6 Tahun</span>
            </div>

            <div className="mt-1 ml-36 relative flex items-center">
                <span className=" -ml-32 text-black font-semibold text-2xl">Rp. 180.000</span>
            </div>

            <div className="max-w-32xl mx-auto mt-24 mb-3 relative">
                <Image 
                    src={lpo} 
                    alt="lpo.png" 
                    layout="" 
                    className="w-full h-auto shadow-lg" 
                    placeholder='blur'
                />
            </div>

            <div className="-mt-64 ml-40 relative flex items-center">
                <span className=" -ml-32 text-gray-500 font-sans text-2xl">Pilih tanggal dan waktu kunjungan</span>
            </div>

            <div className="mt-3 ml-40 relative flex items-center">
                <span className=" -ml-10 text-black font-sans text-2xl">Pilih hari dan waktu kunjungan</span>
            </div>

            <div className="mt-4 ml-32">
                <DatePicker 
                    className="border border-gray-300 rounded-md shadow-md p-2"
                    style={{ width: "20%" }} 
                    placeholder="Pilih tanggal"
                />
            </div>

            <div className="mt-6 ml-32">
                <TimePicker 
                    className="border border-gray-300 rounded-md shadow-md p-2"
                    style={{ width: "20%" }} 
                    format="HH:mm" 
                    placeholder="Pilih waktu"
                />
            </div>

      
            <div className="absolute top-[calc(100vh-150px)] mt-12 right-10">
              <Image 
              src={dd} 
              alt="dd.png" 
              width={140} 
              height={120} 
              placeholder="blur"
              className="max-w-full h-auto"
    />
</div>

<div className="absolute top-[calc(100vh-150px)] mt-12 py-3 right-12 px-3">
<a href='#' className=" text-white font-sans text-2xl">Buat Janji</a>
            </div>



        </div>
    );
}
