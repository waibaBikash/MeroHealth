import PatientFrom from '@/components/forms/PatientFrom';
import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex h-screen max-h-screen'>
       <section className='remove-scrollbar container my-auto'>
          <div className='sub-container max-w-[496px]'>
            <Image
               src='/assets/icons/logo-full.svg'
               height={1000}
               width={1000}
               alt='patient'
               className='mb-12 h-10 w-fit'

             />
             <PatientFrom />
              <div className='text-14-regular mt-20 flex justify-between'>
                <p className='justify-items-end text-dark-600 xl:text-left'>
                © 2024 CarePulse
                </p>
                <Link href='/?admin=true' className='text-green-500' >
                  Admin
                </Link>
                 
              </div>
          </div>
       </section>
    </div>
  );
}