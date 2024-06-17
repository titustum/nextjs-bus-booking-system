import Image from "next/image";
import { Righteous } from "next/font/google";
import schoolbusImage from '../public/images/shoolbus.jpg'

const righteous= Righteous({ weight: '400', subsets: ['latin'] })

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="py-10 flex-grow">
            <h1 className={`text-orange-600 uppercase text-2xl text-center font-bold ${righteous.className}`}>School Bus Routing System</h1>

            <p className="mt-5 text-zinc-900 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt autem obcaecati consequatur tempore laboriosam possimus necessitatibus ipsam voluptatum, fugiat saepe perspiciatis odio quas quos aperiam sapiente iure beatae molestiae voluptatem.</p>
            <Image src={schoolbusImage} alt="School Bus Image" width={'200'} height={'200'}
            className="mx-auto w-70%"/>
            
        </div>
        <div className="shrink-0 grid gap-2 mb-4">
            <a href="https://schoolbusapp.webesi.co.ke/login" className="w-[90%] block text-center mx-auto py-3 px-6 bg-black rounded-md text-white hover:opacity-80">
                Login
            </a>
            <a href="https://schoolbusapp.webesi.co.ke/register" className="w-[90%] block text-center mx-auto py-3 px-6 bg-orange-600 rounded-md text-white hover:opacity-80">
                Create Account
            </a>
        </div>
    </main>
  );
}
