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
      content:
        "Derd-i firakın ile düşeli sevdaya mey'e Müptelayım, deliyim, düşmüşüm esrarı-ney'e Feleğin kahpe başında paralansın parası Ben güzel sevmeye geldim, değil ekmek yemeye",
      author: "Neyzen Tevfik",
      image: "neyzen.png",
    },
    {
      id: 2,
      title: "",
      content:
        "Kaç yol, ağlamaklı olmuşum geceleri, Asıl, bizim aramızda güzeldir hasret Ve asıl biz biliriz kederi.",
      author: "Ahmed Arif",
      image: "ahmed-arif.png",
    },
    {
      id: 3,
      title: "",
      content:
        "Kör karanlıkta açardık paslı gözlerimizi Dilimizde akşamdan kalma bir küfür Salonlar piyasalar sanat-sevicileri Derdim günüm insan arasına çıkarmaktı seni Yakanda bir amonyak çiçeği",
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

  return (
    <main className="mt-20">
      <Darkmode />
      <section className={classNames("container mb-10", { pill: true })}>
        <div className="relative flex justify-center w-full mb-3">
          <Avatar data={data} />
          <div className="pointer-events-none select-none hidden sm:block absolute ml-44 -mt-14 rotate-45">
            <object
              width="250px"
              height="250px"
              type="image/svg+xml"
              data={circle}
            >
              Masthead animation
            </object>
          </div>
        </div>
        <Title />
        <Socialmedia />
        <div>
          <Bio />
          <div className="socials mb-4"></div>
          <div className="flex justify-center">
            <button
              onClick={scrollTo}
              className="text-blue-600 text-xs text-center font-semibold"
            >
              Read More
            </button>
          </div>
        </div>
      </section>

      <section className="container mb-10">
        <div className='relative after:content-[""]  after:absolute  after:top-0  after:left-1/2  after:right-0  after:w-px  after:h-full  after:bg-gray-100 after:dark:bg-slate-800 after:-ml-[0.5px]'>
          {timeline.map((t, index) => {
            return <Timeline key={index} timeline={t} />;
          })}
        </div>
      </section>
      <section className="container mb-10">
        <div className="w-full h-px bg-gray-100 dark:bg-slate-800 mb-5"></div>
        <div className="inline-flex justify-center items-center w-full mb-5">
          <h2 className="text-sm font-medium border-b-2 border-gray-600 dark:border-slate-800 pb-0.5">
            Blog
          </h2>
        </div>

        <section>
          {blogs.map((blog, index) => {
            return <Blog key={index} blog={blog} index={index} />;
          })}
        </section>
      </section>
    </main>
  );
}

export default App;
