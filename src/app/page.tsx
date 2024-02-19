'use client';

import { NavHeader } from './components/nav-header';
import { Cards } from './components/cards';
import Image from 'next/image';
import { ScrollProgress } from './components/scroll-progress';

export default function Home() {
  return (
    <div className='m-0 min-h-screen border-0 p-0'>
      <header className='fixed top-0 w-full bg-black shadow-md shadow-blue-500/20 '>
        <section className='relative mx-auto my-6 flex max-w-7xl justify-center'>
          <div className='flex w-full justify-between'>
            <div
              className="flex items-center before:absolute before:h-[50px] before:w-full before:-translate-x-1/2 
                        before:rounded-full before:bg-gradient-radial before:from-sky-500 before:blur-2xl 
                        before:content-[''] before:dark:opacity-50"
            >
              <Image
                className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
                src='/snapkits.svg'
                alt='Snapkits Logo'
                width={200}
                height={48}
                priority
              />
            </div>
            <NavHeader
              links={[
                { title: 'Home', url: '/' },
                { title: 'About', url: '/about' },
                { title: 'Community', url: '/community' },
                { title: 'Contact Us', url: '/contact-us' },
              ]}
            />
          </div>
        </section>
        <ScrollProgress />
      </header>

      <div className='h-20'></div>
      <main className='flex flex-col items-center justify-between px-20'>
        <section className='my-10 flex w-full items-end justify-between p-10'>
          <div className='flex max-w-xl flex-col gap-16'>
            <h2 className='text-6xl font-semibold'>Who we are?</h2>
            <p className='text-slate-300'>
              We are a growing community passionate about developing software in
              small packets. Our aim is to establish a standard for code writing
              that is easy to understand and use, much like Lego. We maintain
              this standard in our writing.
            </p>
          </div>
          <div
            className="relative z-[-1] flex place-items-center 
                        before:absolute before:h-[400px] before:w-full before:-translate-x-1/2 before:rounded-full 
                        before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] 
                        after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic 
                        after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] 
                        sm:before:w-[480px] sm:after:w-[240px] 
                        before:lg:h-[360px] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 
                        before:dark:opacity-20 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40"
          >
            <Image
              className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
              src='/legos.svg'
              alt='Legos Logo'
              width={300}
              height={300}
              priority
            />
          </div>
        </section>

        <section className='my-10 flex w-full items-center justify-center p-10'>
          <div className='flex size-full flex-col gap-16'>
            <h2 className='text-6xl font-semibold'>What we do?</h2>
            <p className='text-slate-300'>
              Our team is dedicated to exploring a wide range of industries and
              niches, with a focus on finding the most promising ideas that have
              yet to be discovered. From innovative products to disruptive
              business models, we seek out the best ideas and make them
              accessible to entrepreneurs who are looking for inspiration and
              guidance.
            </p>
          </div>
        </section>

        <section className='my-10 flex w-full items-center justify-center p-10'>
          <div className='flex size-full flex-col gap-20'>
            <h2 className='text-6xl font-semibold'>Open Projects</h2>
            <div className='flex gap-8'>
              <Cards
                title={'Build Relationship'}
                content={`We believe in the power of collaboration, building strong
            relationships and committed a long-lasting partnerships with our
            clients.`}
                actionButton={[
                  { key: 'Github', value: 'Github' },
                  { key: 'Link', value: 'Link' },
                ]}
              />
              <Cards
                title={'Build Relationship'}
                content={`We believe in the power of collaboration, building strong
            relationships and committed a long-lasting partnerships with our
            clients.`}
                actionButton={[
                  { key: 'Github', value: 'Github' },
                  { key: 'Link', value: 'Link' },
                ]}
              />
              <Cards
                title={'Build Relationship'}
                content={`We believe in the power of collaboration, building strong
            relationships and committed a long-lasting partnerships with our
            clients.`}
                actionButton={[
                  { key: 'Github', value: 'Github' },
                  { key: 'Link', value: 'Link' },
                ]}
              />
            </div>
          </div>
        </section>

        <section className='my-10 flex w-full items-center justify-center p-10'>
          <div className='flex size-full flex-col gap-20'>
            <h2 className='text-6xl font-semibold'>Meet our team</h2>
            <ul className='grid grid-cols-3 gap-10 text-center'>
              <li className='rounded-2xl bg-slate-900 px-10 py-8 '>
                <Image
                  src='/profile_1.jpg'
                  className='m-auto rounded-full'
                  alt='anurag'
                  width={250}
                  height={200}
                />
                <h2 className='text-medium mt-6 font-semibold text-white'>
                  Anurag Porte
                </h2>
                <p className='mt-1 text-sm font-light text-slate-200'>
                  Software Developer
                </p>
                <ul className='mt-6 flex justify-center gap-4 text-sm'>
                  <li>
                    <a
                      href='/'
                      className='cursor rounded bg-slate-600 px-2 py-1'
                    >
                      X
                    </a>
                  </li>
                  <li>
                    <a
                      href='/'
                      className='cursor rounded bg-slate-600 px-2 py-1'
                    >
                      in
                    </a>
                  </li>
                </ul>
              </li>
              <li className='rounded-2xl bg-slate-900 px-10 py-8'>
                <Image
                  src='/profile_2.jpg'
                  className='m-auto rounded-full'
                  alt='anurag'
                  width={250}
                  height={200}
                />
                <h2 className='text-medium mt-6 font-semibold text-white'>
                  Maanas Verma
                </h2>
                <p className='mt-1 text-sm font-light text-slate-200'>
                  Software Developer
                </p>
                <ul className='mt-6 flex justify-center gap-4 text-sm'>
                  <li>
                    <a
                      href='/'
                      className='cursor rounded bg-slate-600 px-2 py-1'
                    >
                      X
                    </a>
                  </li>
                  <li>
                    <a
                      href='/'
                      className='cursor rounded bg-slate-600 px-2 py-1'
                    >
                      in
                    </a>
                  </li>
                </ul>
              </li>
              <li className='rounded-2xl bg-slate-900 px-10 py-8'>
                <Image
                  src='/profile_3.jpg'
                  className='m-auto rounded-full'
                  alt='anurag'
                  width={250}
                  height={200}
                />
                <h2 className='text-medium mt-6 font-semibold text-white'>
                  Anurag Porte
                </h2>
                <p className='mt-1 text-sm font-light text-slate-200'>
                  Software Developer
                </p>
                <ul className='mt-6 flex justify-center gap-4 text-sm'>
                  <li>
                    <a
                      href='/'
                      className='cursor rounded bg-slate-600 px-2 py-1'
                    >
                      X
                    </a>
                  </li>
                  <li>
                    <a
                      href='/'
                      className='cursor rounded bg-slate-600 px-2 py-1'
                    >
                      in
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <footer className='flex flex-col items-center justify-between border-t border-slate-600 px-20'>
        <section className='my-10 flex w-full justify-between px-8'>
          <div className='flex flex-col justify-around'>
            <h2 className={`mb-3 text-2xl font-semibold`}>Get in touch</h2>
            <p>+91 6377634347</p>
            <p>snapkits.co.in@gmail.com</p>
          </div>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            © 2024 Your Company, Inc. All rights reserved.
          </p>
        </section>
      </footer>
    </div>
  );
}
