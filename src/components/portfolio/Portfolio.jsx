import React from "react";
import "./portfolio.css";

const data = [
  {
    id: 1,
    image:
      "https://imgs.search.brave.com/wFGdOH2K188qUY-oSzhvpo7rCrpRyMIC-DmFu7q43_g/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5I/ZzdpWUswdFBQMEw3/WFVpNWRvQTR3SGFF/OCZwaWQ9QXBp",
    title: "Twitter Clone",
    github: "https://github.com/Oneanonly123/twitter-clone-rs",
    demo: "https://github.com/Oneanonly123/twitter-clone-rs/blob/main/twitter-demo/loginpage_twitter.png?raw=true",
  },
  {
    id: 2,
    image:
      "https://imgs.search.brave.com/qNkLDE6y0ElMBKP46A1gLvuBF8ihrIeWl3J8faq_s24/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9oZHdh/bGxzb3VyY2UuY29t/L2ltZy8yMDE4LzUv/c3BvdGlmeS1sb2dv/LWJhY2tncm91bmQt/d2FsbHBhcGVyLTY2/NDU0LTY4NzIxLWhk/LXdhbGxwYXBlcnMu/anBn",
    title: "Spotify Clone",
    github: "https://github.com/Oneanonly123/spotify_2.0",
    demo: "https://sharmaji-ka-podcast.netlify.app",
  },
  {
    id: 3,
    image:
      "https://imgs.search.brave.com/Qkz29G-zwWiXkVMTFKt57t210JNEe_S95B57qx5-IpU/rs:fit:1200:632:1/g:ce/aHR0cHM6Ly93d3cu/amFtYmFzZS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MTEveW91dHViZS1s/b2dvLmpwZw",
    title: "Youtube Clone",
    github: "https://github.com/Oneanonly123/youtube_clone",
    demo: "https://sharmaji-ka-youtube.netlify.app",
  },
  {
    id: 4,
    image:
      "https://imgs.search.brave.com/3QMcrv4147MxHIgET1cylxe4uHiFO7HlEUbQiuhJBfY/rs:fit:905:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5q/bmVNRmhOT3NtV0o5/Zm45TzhhZmh3SGFE/NCZwaWQ9QXBp",
    title: "Netflix Clone",
    github: "https://github.com/Oneanonly123/Netflix-Clone",
    demo: "https://sharmaji-ka-netflix.netlify.app/",
  },
  {
    id: 5,
    image:
      "https://imgs.search.brave.com/PkWoSgiQofre3-3-u4lMNwdf1EtWUlK-0LY0Rn7vshM/rs:fit:691:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5X/THBRTXNrenFienZq/RTN3OUhuZ3VBSGFG/RiZwaWQ9QXBp",
    title: "Uber Image",
    github: "https://github.com/Oneanonly123/uber-clone",
    demo: "https://github.com/Oneanonly123/uber-clone/blob/main/Uber-Screenshot/Uber-Clone-Home.jpeg?raw=true",
  },
  {
    id: 6,
    image:
      "https://imgs.search.brave.com/Bxo_HP41Ugfl4m_PXjC1Zc2cWFevni-pqnjIZenKrV0/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC54/UXQySTVnWWhsMmsw/TXVrUlNkbVR3SGFF/SyZwaWQ9QXBp",
    title: "News Image",
    github: "https://github.com/Oneanonly123/NewsApp_2022/tree/main/src",
    demo: "https://sharmaji-ke-update.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="#portfolio">
      <h5>My Recent Work</h5>
      <h2>PortFolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <>
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title}></img>
                </div>
                <h3> {title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="__blank">
                    Check Demo
                  </a>
                </div>
              </article>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
