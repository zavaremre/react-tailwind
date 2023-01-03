import React, { useState } from "react";
import classNames from "classnames";
import circle from "./assets/images/circle.svg";
function App() {
  const [timeline] = useState([
    {
      id: 1,
      title: "Jotform",
      position: "UI Developer",
      type: "Fulltime",
      time: "Now",
      left: false,
      isActive: true,
    },
    {
      id: 2,
      title: "Allesgo",
      position: "Front End Developer",
      type: "Fulltime",
      time: "+4 Year",
      left: true,
    },
    {
      id: 3,
      title: "Bionluk",
      position: "Wordpress Developer",
      type: "Freelance",
      time: "+1 Year",
      left: false,
    },
    {
      id: 4,
      title: "Platform New Media",
      position: "UI Wordpress Developer",
      type: "Remote",
      time: "+1 Year",
      left: true,
    },
    {
      id: 5,
      title: "Medanis",
      position: "UI Wordpress Developer",
      type: "Fulltime",
      time: "+2 Year",
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
  ]);

  const [data] = useState({
    fullName: "Emre ZAVAR",
    job: "SR. UI DEVELOPER",
  });
  const scrollTo = () => {
    window.scrollTo({
      top: 1800,
      behavior: "smooth",
    });
  };
  const [dark, setDark] = useState(false);
  const darkModeToggle = () => {
    setDark(!dark);
  };

  const html = document.querySelector("html");
  if (dark) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }

  return (
    <main className='mt-20'>
      <button className='fixed bottom-10 right-10 flex flex-col justify-center items-center z-30' onClick={darkModeToggle}>
        <div
          className={classNames("flex flex-col justify-center items-center w-10 h-10 rounded-full darkToggle mb-2", {
            "bg-white text-slate-900": dark,
            "bg-slate-900 text-white": !dark,
          })}>
          {dark ? (
            <div className='text-2xl'>
              <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='currentColor' class='bi bi-brightness-high' viewBox='0 0 16 16'>
                <path d='M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z' />
              </svg>
            </div>
          ) : (
            <div className='text-2xl'>
              <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='currentColor' class='bi bi-moon-stars' viewBox='0 0 16 16'>
                <path d='M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z' />
                <path d='M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z' />
              </svg>
            </div>
          )}
        </div>
        <h5 className='text-[10px]'>{dark ? "Light Mode" : "Dark Mode"}</h5>
      </button>
      <section className={classNames("container mb-10", { pill: true })}>
        <div className='relative flex justify-center w-full mb-3'>
          <div className='relative flex justify-center items-center  overflow-hidden after:absolute after:bottom-0 after:z-[-1] after:content-[""] after:rounded-full after:bg-yellow-200 after:dark:bg-slate-800 after:w-40 after:h-40'>
            <img src={require("./assets/images/profile.png")} alt={data.fullName} className='w-40 h-40 z-[2] rounded-b-full dark:grayscale' />
          </div>
          <div className='pointer-events-none select-none hidden sm:block absolute ml-44 -mt-14 rotate-45'>
            <object width='250px' height='250px' type='image/svg+xml' data={circle}>
              Masthead animation
            </object>
          </div>
        </div>
        <div className='flex flex-col items-center w-full mb-4'>
          <h1 className='text-2xl	font-bold'>{data.fullName}</h1>
          <h2 className='text-xs'>{data.job}</h2>
        </div>
        <ul className='relative flex justify-center items-center w-full gap-5 mb-4'>
          <li className='list-none'>
            <a
              href='https://github.com/zavaremre/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex justify-center items-center w-10 h-10 rounded-full shadow-lg dark:shadow-slate-800 p-2 bg-white dark:bg-slate-800 transition-all duration-400 hover:-mt-2.5'>
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-github' viewBox='0 0 16 16'>
                <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
              </svg>
            </a>
          </li>
          <li className='list-none'>
            <a
              href='https://www.linkedin.com/in/zavaremre/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex justify-center items-center w-10 h-10 rounded-full shadow-lg dark:shadow-slate-800 p-2 bg-white dark:bg-slate-800 transition-all duration-400 hover:-mt-2.5'>
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-linkedin' viewBox='0 0 16 16'>
                <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />
              </svg>
            </a>
          </li>
          <li className='list-none'>
            <a
              href='https://instagram.com/zavaremre'
              target='_blank'
              rel='noopener noreferrer'
              className='flex justify-center items-center w-10 h-10 rounded-full shadow-lg dark:shadow-slate-800 p-2 bg-white dark:bg-slate-800 transition-all duration-400 hover:-mt-2.5'>
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-instagram' viewBox='0 0 16 16'>
                <path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z' />
              </svg>
            </a>
          </li>
          <li className='list-none'>
            <a
              href='https://api.whatsapp.com/send?phone=905063869319'
              target='_blank'
              rel='noopener noreferrer'
              className='flex justify-center items-center w-10 h-10 rounded-full shadow-lg dark:shadow-slate-800 p-2 bg-white dark:bg-slate-800 transition-all duration-400 hover:-mt-2.5'>
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-whatsapp' viewBox='0 0 16 16'>
                <path d='M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z' />
              </svg>
            </a>
          </li>
        </ul>
        <div>
          <p className='text-center text-xs leading-5 mb-4'>
            “Donec dignissim est ac odio condimentum, sit amet vulputate dui suscipit. Etiam non magna dignissim, fermentum enim vel, bibendum nunc. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Proin feugiat quam eget nibh suscipit aliquam. Suspendisse potenti. Nam efficitur lobortis eli.”
          </p>
          <div className='socials mb-4'></div>
          <div className='flex justify-center'>
            <button onClick={scrollTo} className='text-blue-600 text-xs text-center font-semibold'>
              Read More
            </button>
          </div>
        </div>
      </section>

      <section className='container mb-10'>
        <div className='relative after:content-[""]  after:absolute  after:top-0  after:left-1/2  after:right-0  after:w-px  after:h-full  after:bg-gray-100 after:dark:bg-slate-800 after:-ml-[0.5px]'>
          {timeline.map((t, index) => {
            return (
              <div key={index} className={classNames("flex w-full", { "flex-row-reverse ml-[6px]": t.left, "-ml-[6px]": !t.left })}>
                <div className='w-1/2'></div>
                <section className='flex mt-4 w-1/2'>
                  <div className={classNames("relative flex w-full", { "flex-row-reverse": t.left })}>
                    <aside className={classNames("relative flex items-start justify-start w-full", { "mr-8": t.left, "ml-8": !t.left })}>
                      <div className={classNames("flex flex-col items-start w-full", { "items-end": t.left, "opacity-60": !t.isActive })}>
                        <strong className={classNames("text-sm font-medium mb-1", { "text-blue-600": t.isActive })}>{t.title}</strong>
                        <strong className='text-xs font-normal text-left mb-1'>{t.position}</strong>
                        <small className='text-xs mb-1'>{t.type}</small>
                        <small className='text-[10px]'>{t.time}</small>
                      </div>
                    </aside>

                    <div className={classNames("absolute w-3 h-3 rounded-full mt-1 z-10 shrink-0 pointer-events-none", { "bg-blue-600": t.isActive, "bg-gray-300 dark:bg-slate-800": !t.isActive })}>
                      <span className={classNames("animate-ping absolute -left-1 -top-1 inline-flex h-5 w-5 rounded-full bg-blue-400  opacity-75", { hidden: !t.isActive })}></span>
                    </div>
                  </div>
                </section>
              </div>
            );
          })}
        </div>
      </section>
      <section className='container mb-10'>
        <div className='w-full h-px bg-gray-100 dark:bg-slate-800 mb-5'></div>
        <div className='inline-flex justify-center items-center w-full mb-5'>
          <h2 className='text-sm font-medium border-b-2 border-gray-600 dark:border-slate-800 pb-0.5'>Blog</h2>
        </div>

        <section>
          {blogs.map((blog, index) => {
            return (
              <article class='group'>
                <div key={index} className='flex items-start gap-y-5 text-left'>
                  {/* <img src={require("./assets/images/" + blog.image)} className='mr-5 w-24 rounded dark:grayscale' alt='' /> */}
                  <div className='flex flex-col items-center'>
                    <p className='block mb-3 text-center'>{blog.content}</p>
                    <strong className='opacity-70'>{blog.author}</strong>
                  </div>
                </div>
                <div className='group-last:hidden flex justify-center w-full my-5'>
                  <svg width='93' height='6' viewBox='0 0 93 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      className='dark:fill-slate-800'
                      d='M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333334 0.333333 1.52724 0.333333 3ZM87.3333 2.99997C87.3333 4.47273 88.5272 5.66663 90 5.66663C91.4728 5.66663 92.6667 4.47272 92.6667 2.99996C92.6667 1.52721 91.4728 0.333298 90 0.333299C88.5272 0.333299 87.3333 1.52721 87.3333 2.99997ZM3 3.5L90 3.49997L90 2.49997L3 2.5L3 3.5Z'
                      fill='#EEEEEE'
                    />
                  </svg>
                </div>
              </article>
            );
          })}
        </section>
      </section>
    </main>
  );
}

export default App;
