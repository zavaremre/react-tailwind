import React, { useState } from "react";
import classNames from "classnames";
import circle from "./assets/images/circle.svg";
import Blog from "./Components/Blog";
import Timeline from "./Components/Timeline";
import Darkmode from "./Components/Darkmode";
import Avatar from "./Components/Avatar";
import Socialmedia from "./Components/Socialmedia";
import Title from "./Components/Title";
import Bio from "./Components/Bio";
function App() {
  const [timeline] = useState([
    {
      id: 1,
      title: "Jotform",
      position: "UI Developer",
      type: "Tam Zamanlı",
      time: "Şuan",
      left: false,
      isActive: true,
    },
    {
      id: 2,
      title: "Allesgo",
      position: "Front End Developer",
      type: "Tam Zamanlı",
      time: "+4 Yıl",
      left: true,
    },
    {
      id: 3,
      title: "Bionluk",
      position: "Wordpress Developer",
      type: "Freelance",
      time: "+1 Yıl",
      left: false,
    },
    {
      id: 4,
      title: "Platform New Media",
      position: "UI Wordpress Developer",
      type: "Remote",
      time: "+1 Yıl",
      left: true,
    },
    {
      id: 5,
      title: "Medanis",
      position: "UI Wordpress Developer",
      type: "Tam Zamanlı",
      time: "+2 Yıl",
      left: false,
    },
  ]);
  const [blogs] = useState([
    {
      id: 1,
      title: "",
      content: "Derd-i firakın ile düşeli sevdaya mey'e Müptelayım, deliyim, düşmüşüm esrarı-ney'e Feleğin kahpe başında paralansın parası Ben güzel sevmeye geldim, değil ekmek yemeye",
      author: "Neyzen Tevfik",
      image: "neyzen.png",
    },
    {
      id: 2,
      title: "",
      content: "Kaç yol, ağlamaklı olmuşum geceleri, Asıl, bizim aramızda güzeldir hasret Ve asıl biz biliriz kederi.",
      author: "Ahmed Arif",
      image: "ahmed-arif.png",
    },
    {
      id: 3,
      title: "",
      content: "Kör karanlıkta açardık paslı gözlerimizi Dilimizde akşamdan kalma bir küfür Salonlar piyasalar sanat-sevicileri Derdim günüm insan arasına çıkarmaktı seni Yakanda bir amonyak çiçeği",
      author: "Can Yücel",
      image: "can-yucel.png",
    },
    {
      id: 4,
      title: "",
      content:
        "anamı yıkadılar-yudular kollarını yanlarına kodular bağladılar güvercin ayaklarını ak bezlere sardılar. dereleri tepeleri geçtiler yağmurlara tipilere vurdular vardılar yedi kat yerin altına anamı yatırdılar batırdılar kürekleri kabarmış bahar toprağına örttüler üzerini bi güzel yeşersin diye yaza",
      author: "Hasan Hüseyin Korkmazgil",
      image: "can-yucel.png",
    },
    {
      id: 5,
      title: "",
      content:
        "Sanma ki derdim güneşten ötürü; Ne çıkar bahar geldiyse? Bademler çiçek açtıysa? Ucunda ölüm yok ya. Hoş, olsa da korkacak mıyım zaten Güneşle gelecek ölümden? Ben ki her Nisan bir yaş daha genç, Her bahar biraz daha âşığım; Korkar mıyım? Ah, dostum, derdim başka…",
      author: "Orhan Veli Kanık",
      image: "can-yucel.png",
    },
    {
      id: 6,
      title: "",
      content: "Gözünü aç daha meydan var iken, Dizginin canbaz elinde Neyzen! Girmedim ya kapısından baktım, Cennet'i at pazarı sandım ben",
      author: "Neyzen Tevfik",
      image: "can-yucel.png",
    },
    {
      id: 7,
      title: "",
      content: "Fillerin ölümü muhteşemdir çocuk, Çekilir ormanların derinliğine... Nereye gittiğimi, Neden bittiğimi sorma artık; Gömülürüm belki kendi yüreğime...",
      author: "Yusuf Hayaloğlu",
      image: "can-yucel.png",
    },
  ]);

  const [data] = useState({
    fullName: "Emre ZAVAR",
    job: "SR. UI DEVELOPER",
  });
  const scrollTo = () => {
    window.scrollTo({
      top: 800,
      behavior: "smooth",
    });
  };
  let year = new Date().getFullYear();

  return (
    <main className='mt-20 overflow-x-hidden'>
      <Darkmode />
      <section className={classNames("container mb-10", { pill: true })}>
        <div className='relative flex justify-center w-full pointer-events-none select-none mb-3'>
          <Avatar data={data} />
          <div className='absolute ml-36 sm:ml-44 -mt-14 rotate-45'>
            <object width='250px' height='250px' type='image/svg+xml' aria-label='circle animations' data={circle}>
              Masthead animation
            </object>
          </div>
        </div>
        <Title />
        <Socialmedia />
        <div>
          <Bio />
          <div className='socials mb-4'></div>
          <div className='flex justify-center'>
            <button onClick={scrollTo} className='text-blue-600 text-xs text-center font-semibold animate-bounce' aria-label='down site'>
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' className='bi bi-chevron-down' viewBox='0 0 16 16'>
                <path fillRule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z' />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className='container mb-10'>
        <div className='relative after:content-[""]  after:absolute  after:top-0  after:left-1/2  after:right-0  after:w-px  after:h-full  after:bg-gray-100 after:dark:bg-black-800 after:-ml-[0.5px]'>
          {timeline.map((t, index) => {
            return <Timeline key={index} timeline={t} />;
          })}
        </div>
      </section>
      <section className='container mb-10'>
        <div className='w-full h-px bg-gray-100 dark:bg-black-800 my-5'></div>
        <div className='inline-flex justify-center items-center w-full mb-7'>
          <h2 className='text-sm font-medium border-b-2 border-gray-600 dark:border-black-800 pb-0.5'>Projeler</h2>
        </div>

        <section>
          <div className='relative flex flex-col sm:flex-row justify-between w-full'>
            <div className='project-1 flex flex-row sm:flex-col justify-between items-center bg-rose bg-opacity-10 dark:bg-black-800 rounded-md p-4 w-full h-full'>
              <div className='shrink-0 px-5 mr-3 sm:mr-0 sm:mb-5 text-rose dark:text-inherit'>
                <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='currentColor' class='bi bi-rocket-takeoff' viewBox='0 0 16 16'>
                  <path d='M9.752 6.193c.599.6 1.73.437 2.528-.362.798-.799.96-1.932.362-2.531-.599-.6-1.73-.438-2.528.361-.798.8-.96 1.933-.362 2.532Z' />
                  <path d='M15.811 3.312c-.363 1.534-1.334 3.626-3.64 6.218l-.24 2.408a2.56 2.56 0 0 1-.732 1.526L8.817 15.85a.51.51 0 0 1-.867-.434l.27-1.899c.04-.28-.013-.593-.131-.956a9.42 9.42 0 0 0-.249-.657l-.082-.202c-.815-.197-1.578-.662-2.191-1.277-.614-.615-1.079-1.379-1.275-2.195l-.203-.083a9.556 9.556 0 0 0-.655-.248c-.363-.119-.675-.172-.955-.132l-1.896.27A.51.51 0 0 1 .15 7.17l2.382-2.386c.41-.41.947-.67 1.524-.734h.006l2.4-.238C9.005 1.55 11.087.582 12.623.208c.89-.217 1.59-.232 2.08-.188.244.023.435.06.57.093.067.017.12.033.16.045.184.06.279.13.351.295l.029.073a3.475 3.475 0 0 1 .157.721c.055.485.051 1.178-.159 2.065Zm-4.828 7.475.04-.04-.107 1.081a1.536 1.536 0 0 1-.44.913l-1.298 1.3.054-.38c.072-.506-.034-.993-.172-1.418a8.548 8.548 0 0 0-.164-.45c.738-.065 1.462-.38 2.087-1.006ZM5.205 5c-.625.626-.94 1.351-1.004 2.09a8.497 8.497 0 0 0-.45-.164c-.424-.138-.91-.244-1.416-.172l-.38.054 1.3-1.3c.245-.246.566-.401.91-.44l1.08-.107-.04.039Zm9.406-3.961c-.38-.034-.967-.027-1.746.163-1.558.38-3.917 1.496-6.937 4.521-.62.62-.799 1.34-.687 2.051.107.676.483 1.362 1.048 1.928.564.565 1.25.941 1.924 1.049.71.112 1.429-.067 2.048-.688 3.079-3.083 4.192-5.444 4.556-6.987.183-.771.18-1.345.138-1.713a2.835 2.835 0 0 0-.045-.283 3.078 3.078 0 0 0-.3-.041Z' />
                  <path d='M7.009 12.139a7.632 7.632 0 0 1-1.804-1.352A7.568 7.568 0 0 1 3.794 8.86c-1.102.992-1.965 5.054-1.839 5.18.125.126 3.936-.896 5.054-1.902Z' />
                </svg>
              </div>
              <div className='flex flex-col justify-center items-start sm:items-center w-full'>
                <h3 className='font-medium text-sm'> The Movie Database API</h3>
                <small>Vue, Nuxt, Tailwind Css</small>
                <a href='https://movie-q2qq.onrender.com/' target='_blank' className='text-xs font-medium text-blue-600'>
                  Demo
                </a>
              </div>
            </div>
            <div className='flex justify-center items-center mx-4'>
              <div className='w-14 h-5 shrink-0 rounded-full z-[2] bg-white dark:bg-black-900 -mx-12'></div>
            </div>
            <div className='project-2 flex flex-row sm:flex-col justify-between items-center bg-anakiwa bg-opacity-10 dark:bg-black-800 rounded-md p-4 w-full h-full'>
              <div className='shrink-0 px-5 mr-3 sm:mr-0 sm:mb-5 text-anakiwa dark:text-inherit'>
                <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='currentColor' class='bi bi-rocket-takeoff' viewBox='0 0 16 16'>
                  <path d='M9.752 6.193c.599.6 1.73.437 2.528-.362.798-.799.96-1.932.362-2.531-.599-.6-1.73-.438-2.528.361-.798.8-.96 1.933-.362 2.532Z' />
                  <path d='M15.811 3.312c-.363 1.534-1.334 3.626-3.64 6.218l-.24 2.408a2.56 2.56 0 0 1-.732 1.526L8.817 15.85a.51.51 0 0 1-.867-.434l.27-1.899c.04-.28-.013-.593-.131-.956a9.42 9.42 0 0 0-.249-.657l-.082-.202c-.815-.197-1.578-.662-2.191-1.277-.614-.615-1.079-1.379-1.275-2.195l-.203-.083a9.556 9.556 0 0 0-.655-.248c-.363-.119-.675-.172-.955-.132l-1.896.27A.51.51 0 0 1 .15 7.17l2.382-2.386c.41-.41.947-.67 1.524-.734h.006l2.4-.238C9.005 1.55 11.087.582 12.623.208c.89-.217 1.59-.232 2.08-.188.244.023.435.06.57.093.067.017.12.033.16.045.184.06.279.13.351.295l.029.073a3.475 3.475 0 0 1 .157.721c.055.485.051 1.178-.159 2.065Zm-4.828 7.475.04-.04-.107 1.081a1.536 1.536 0 0 1-.44.913l-1.298 1.3.054-.38c.072-.506-.034-.993-.172-1.418a8.548 8.548 0 0 0-.164-.45c.738-.065 1.462-.38 2.087-1.006ZM5.205 5c-.625.626-.94 1.351-1.004 2.09a8.497 8.497 0 0 0-.45-.164c-.424-.138-.91-.244-1.416-.172l-.38.054 1.3-1.3c.245-.246.566-.401.91-.44l1.08-.107-.04.039Zm9.406-3.961c-.38-.034-.967-.027-1.746.163-1.558.38-3.917 1.496-6.937 4.521-.62.62-.799 1.34-.687 2.051.107.676.483 1.362 1.048 1.928.564.565 1.25.941 1.924 1.049.71.112 1.429-.067 2.048-.688 3.079-3.083 4.192-5.444 4.556-6.987.183-.771.18-1.345.138-1.713a2.835 2.835 0 0 0-.045-.283 3.078 3.078 0 0 0-.3-.041Z' />
                  <path d='M7.009 12.139a7.632 7.632 0 0 1-1.804-1.352A7.568 7.568 0 0 1 3.794 8.86c-1.102.992-1.965 5.054-1.839 5.18.125.126 3.936-.896 5.054-1.902Z' />
                </svg>
              </div>
              <div className='flex flex-col justify-center items-start sm:items-center w-full'>
                <h3 className='font-medium text-sm'>Tailwind Clone</h3>
                <small>Vue, Nuxt, Tailwind Css</small>
                <a href='https://linkedin-w0do.onrender.com' target='_blank' className='text-xs font-medium text-blue-600'>
                  Demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className='container mb-10'>
        <div className='w-full h-px bg-gray-100 dark:bg-black-800 my-5'></div>
        <div className='inline-flex justify-center items-center w-full mb-7'>
          <h2 className='text-sm font-medium border-b-2 border-gray-600 dark:border-black-800 pb-0.5'>Şiir & Çay</h2>
        </div>

        <section>
          {blogs.map((blog, index) => {
            return <Blog key={index} blog={blog} index={index} />;
          })}
        </section>
      </section>
      <footer>
        <section className='container'>
          <div className='w-full h-px bg-gray-100 dark:bg-black-800'></div>
          <div className='flex justify-center items-center w-full font-medium pt-5 pb-8'>Copyright © {year} All Rights Reserved</div>
        </section>
      </footer>
    </main>
  );
}

export default App;
