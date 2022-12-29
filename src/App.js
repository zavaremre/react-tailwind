import React, { useState } from "react";
import classNames from "classnames";
import circle from "./assets/images/circle.svg";
function App() {
  const [data] = useState({
    title: "aaa",
    menu: [
      {
        id: 1,
        title: "first",
      },
      {
        id: 2,
        title: "second",
      },
      {
        id: 3,
        title: "third",
      },
      {
        id: 1,
        title: "first",
      },
      {
        id: 2,
        title: "second",
      },
      {
        id: 3,
        title: "third",
      },
    ],
  });
  const eee = "dwwefewferfgefefef";
  return (
    <main className='mt-20'>
      <section className={classNames("container mb-10", { pill: true })}>
        <div className='relative flex justify-center w-full mb-3'>
          <img src={require("./assets/images/profile.png")} alt='fddfd' />
          <div className='absolute ml-32 -mt-14 rotate-45'>
            <object width='250px' height='250px' type='image/svg+xml' data={circle}>
              Masthead animation
            </object>
          </div>
        </div>
        <div className='flex flex-col items-center w-full mb-4'>
          <h1 className='text-2xl	font-bold'>Emre ZAVAR</h1>
          <h2 className='text-xs'>SR. UI & FRONT END DEVELOPER</h2>
        </div>
        <div>
          <p className='text-center text-xs leading-5 mb-4'>
            “Donec dignissim est ac odio condimentum, sit amet vulputate dui suscipit. Etiam non magna dignissim, fermentum enim vel, bibendum nunc. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Proin feugiat quam eget nibh suscipit aliquam. Suspendisse potenti. Nam efficitur lobortis eli.”
          </p>
          <div className='flex justify-center'>
            <a href='#ss' className='text-blue-600 text-xs text-center font-semibold'>
              Read More
            </a>
          </div>
        </div>
      </section>
      <section className='container mb-10'>
        <div className='relative after:content-[""]  after:absolute  after:top-0  after:left-1/2  after:right-0  after:w-px  after:h-full  after:bg-gray-100 after:-ml-[0.5px]'>
          <div className='flex w-full -ml-[6px]'>
            <div className='w-1/2'></div>
            <section className='flex mt-4 w-1/2'>
              <div className='relative flex w-full '>
                <aside className='relative flex  items-start justify-start w-full ml-8'>
                  <div className='flex flex-col items-start w-full'>
                    <strong className='text-sm font-medium text-blue-600'>Jotform</strong>
                    <strong className='text-xs font-normal mb-2 text-left'>UI Developer</strong>
                    <small className='text-xs'>Now</small>
                  </div>
                </aside>

                <div className='absolute w-3 h-3 rounded-full bg-blue-600 mt-1 z-10 shrink-0'>
                  <span className='animate-ping absolute -left-1 -top-1 inline-flex h-5 w-5 rounded-full bg-blue-400 opacity-75'></span>
                </div>
              </div>
            </section>
          </div>
          <div className='flex flex-row-reverse w-full ml-[6px]'>
            <div className='w-1/2'></div>
            <section className='flex mt-4 w-1/2'>
              <div className='relative flex flex-row-reverse w-full '>
                <aside className='relative flex items-start justify-start w-full mr-8 text-gray-300'>
                  <div className='flex flex-col items-end w-full'>
                    <strong className='text-sm font-medium'>Allesgo</strong>
                    <strong className='text-xs opacity-70 font-normal mb-2 text-right'>Front End Developer</strong>
                    <small className='text-xs opacity-70'>+4 Year</small>
                  </div>
                </aside>
                <div className='absolute w-3 h-3 rounded-full bg-gray-300 mt-1 z-10 shrink-0'></div>
              </div>
            </section>
          </div>
          <div className='flex w-full -ml-[6px]'>
            <div className='w-1/2'></div>
            <section className='flex mt-4 w-1/2'>
              <div className='relative flex w-full '>
                <aside className='relative flex  items-start justify-start w-full ml-8 text-gray-300'>
                  <div className='flex flex-col items-start w-full'>
                    <strong className='text-sm font-medium'>Platform New Media</strong>
                    <strong className='text-xs opacity-70 font-normal mb-2 text-left'>UI Wordpress Developer</strong>
                    <small className='text-xs opacity-70'>+1 Year</small>
                  </div>
                </aside>
                <div className='absolute w-3 h-3 rounded-full bg-gray-300 mt-1 z-10 shrink-0'></div>
              </div>
            </section>
          </div>
          <div className='flex flex-row-reverse w-full ml-[6px]'>
            <div className='w-1/2'></div>
            <section className='flex mt-4 w-1/2'>
              <div className='relative flex flex-row-reverse w-full '>
                <aside className='relative flex items-start justify-start w-full mr-8 text-gray-300'>
                  <div className='flex flex-col items-end w-full'>
                    <strong className='text-sm font-medium'>Medanis</strong>
                    <strong className='text-xs opacity-70 font-normal mb-2 text-right'>UI Wordpress Developer</strong>
                    <small className='text-xs opacity-70'>+2 Year</small>
                  </div>
                </aside>
                <div className='absolute w-3 h-3 rounded-full bg-gray-300 mt-1 z-10 shrink-0'></div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className='container'>
        <div className='w-full h-px bg-gray-100 mb-5'></div>
        <div className='inline-flex justify-center items-center w-full mb-5'>
          <h2 className='text-sm font-medium border-b-2 border-gray-600 pb-0.5'>Blog</h2>
        </div>
        <article className='text-center'>
          <p className='block mb-3'>
            Derd-i firakın ile düşeli sevdaya mey'e Müptelayım, deliyim, düşmüşüm esrarı-ney'e Feleğin kahpe başında paralansın parası Ben güzel sevmeye geldim, değil ekmek yemeye
          </p>
          <i className='opacity-70'>Neyzen Tevfik</i>
        </article>
        <div className='flex justify-center w-full my-5'>
          <svg width='93' height='6' viewBox='0 0 93 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333334 0.333333 1.52724 0.333333 3ZM87.3333 2.99997C87.3333 4.47273 88.5272 5.66663 90 5.66663C91.4728 5.66663 92.6667 4.47272 92.6667 2.99996C92.6667 1.52721 91.4728 0.333298 90 0.333299C88.5272 0.333299 87.3333 1.52721 87.3333 2.99997ZM3 3.5L90 3.49997L90 2.49997L3 2.5L3 3.5Z'
              fill='#EEEEEE'
            />
          </svg>
        </div>

        <article className='text-center'>
          <p className='block mb-3'>Kaç yol, ağlamaklı olmuşum geceleri, Asıl, bizim aramızda güzeldir hasret Ve asıl biz biliriz kederi.</p>
          <i className='opacity-70'>Ahmed Arif</i>
        </article>
        <div className='flex justify-center w-full my-5'>
          <svg width='93' height='6' viewBox='0 0 93 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333334 0.333333 1.52724 0.333333 3ZM87.3333 2.99997C87.3333 4.47273 88.5272 5.66663 90 5.66663C91.4728 5.66663 92.6667 4.47272 92.6667 2.99996C92.6667 1.52721 91.4728 0.333298 90 0.333299C88.5272 0.333299 87.3333 1.52721 87.3333 2.99997ZM3 3.5L90 3.49997L90 2.49997L3 2.5L3 3.5Z'
              fill='#EEEEEE'
            />
          </svg>
        </div>

        <article className='text-center'>
          <p className='block mb-3'>
            Kör karanlıkta açardık paslı gözlerimizi Dilimizde akşamdan kalma bir küfür Salonlar piyasalar sanat-sevicileri Derdim günüm insan arasına çıkarmaktı seni Yakanda bir amonyak çiçeği
          </p>
          <i className='opacity-70'>Can Yücel</i>
        </article>
      </section>

      {/* <div className='flex flex-1 flex-col justify-center items-center'>
        <div className='@container mb-4'>
          <div className='min-[600px]:max-[1477px]:right-16 '>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quia nesciunt nostrum debitis velit dolores tempora minima numquam optio sit? Incidunt consequatur quidem modi quas
            alias veniam illo voluptas minima.
          </div>
        </div>
        <div className='flex'>
          {data.menu.map((item, key) => (
            <strong className='bg-green-600 p-1 mr-3 text-sm text-white' key={key}>
              {item.title} - {key + 1}
            </strong>
          ))}
          {eee}
        </div>
      </div> */}
    </main>
  );
}

export default App;
