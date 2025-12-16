
import React from "react";
import {useEffect,useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
  FreeMode,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Link } from "react-router-dom";




const testimonials = [
  {
    logo: "R",
    company: "Ravi",
    stars: "★★★★★",
    text: "The company works responsibly, valuing integrity, and long-term impact."
  },
  {
    logo: "G",
    company: "Gaurav",
    stars: "★★★★☆",
    text: "Actively integrates AI, automation, and data analytics into modern business solutions."
  },
  {
    logo: "P",
    company: "Priya",
    stars: "★★★★★",
    text: "Management guides and mentors the team effectively with a clear vision."
  },
  {
    logo: "S",
    company: "Shyam",
    stars: "★★★★★",
    text: "Encourages creative thinking and modern solutions in AI, software, and data-driven projects."
  },
  {
    logo: "A",
    company: "Ankush",
    stars: "★★★★★",
    text: "Provides continuous learning opportunities and upskilling support for employees."
  },
  {
    logo: "H",
    company: "Harsh",
    stars: "★★★★★",
    text: "Open communication between leadership and team ensures clarity and trust."
  },
  {
    logo: "V",
    company: "Vishal",
    stars: "★★★★★",
    text: "Friendly, motivating, and respectful environment that keeps morale high."
  },
];

export default function Home() {


    useEffect(() => {
    const track = document.getElementById("track");
    if (!track) return; // prevents null errors before render

    const wrap = track.parentElement;
    const cards = Array.from(track.children);
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    const dotsBox = document.getElementById("dots");

    const isMobile = () => matchMedia("(max-width:767px)").matches;

    // Create dots dynamically
    dotsBox.innerHTML = ""; // clear existing
    cards.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.className = "dot";
      dot.onclick = () => activate(i, true);
      dotsBox.appendChild(dot);
    });
    const dots = Array.from(dotsBox.children);

    let current = 0;

    function center(i) {
      const card = cards[i];
      const axis = isMobile() ? "top" : "left";
      const size = isMobile() ? "clientHeight" : "clientWidth";
      const start = isMobile() ? card.offsetTop : card.offsetLeft;
      wrap.scrollTo({
        [axis]: start - (wrap[size] / 2 - card[size] / 2),
        behavior: "smooth",
      });
    }

    function toggleUI(i) {
      cards.forEach((c, k) => c.toggleAttribute("active", k === i));
      dots.forEach((d, k) => d.classList.toggle("active", k === i));
      prev.disabled = i === 0;
      next.disabled = i === cards.length - 1;
    }

    function activate(i, scroll) {
      if (i === current) return;
      current = i;
      toggleUI(i);
      if (scroll) center(i);
    }

    function go(step) {
      activate(
        Math.min(Math.max(current + step, 0), cards.length - 1),
        true
      );
    }

    // Buttons
    prev.onclick = () => go(-1);
    next.onclick = () => go(1);

    // Keyboard navigation
    const handleKey = (e) => {
      if (["ArrowRight", "ArrowDown"].includes(e.key)) go(1);
      if (["ArrowLeft", "ArrowUp"].includes(e.key)) go(-1);
    };
    window.addEventListener("keydown", handleKey, { passive: true });

    // Mouse & click events
    cards.forEach((card, i) => {
      card.addEventListener(
        "mouseenter",
        () => matchMedia("(hover:hover)").matches && activate(i, true)
      );
      card.addEventListener("click", () => activate(i, true));
    });

    // Swipe (touch)
    let sx = 0,
      sy = 0;
    track.addEventListener(
      "touchstart",
      (e) => {
        sx = e.touches[0].clientX;
        sy = e.touches[0].clientY;
      },
      { passive: true }
    );

    track.addEventListener(
      "touchend",
      (e) => {
        const dx = e.changedTouches[0].clientX - sx;
        const dy = e.changedTouches[0].clientY - sy;
        if (isMobile() ? Math.abs(dy) > 60 : Math.abs(dx) > 60)
          go((isMobile() ? dy : dx) > 0 ? -1 : 1);
      },
      { passive: true }
    );

    // Hide dots on mobile
    if (window.matchMedia("(max-width:767px)").matches) dotsBox.hidden = true;

    window.addEventListener("resize", () => center(current));

    // Initial setup
    toggleUI(0);
    center(0);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, []);


  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // changes every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];



// --------------------slider ---------------

$.fn.commentCards = function(){

  return this.each(function(){

    var $this = $(this),
        $cards = $this.find('.card'),
        $current = $cards.filter('.card--current'),
        $next;

    $cards.on('click',function(){
      if ( !$current.is(this) ) {
        $cards.removeClass('card--current card--out card--next');
        $current.addClass('card--out');
        $current = $(this).addClass('card--current');
        $next = $current.next();
        $next = $next.length ? $next : $cards.first();
        $next.addClass('card--next');
      }
    });

    if ( !$current.length ) {
      $current = $cards.last();
      $cards.first().trigger('click');
    }

    $this.addClass('cards--active');

  })

};

$('.cards').commentCards();


// ----------------top section------------------

  const movies = [
    {
      title: "Data Science",
      img: "https://i.pinimg.com/736x/60/0f/7e/600f7ec3acf3ecfa4eb42fc15c4407bc.jpg",
      desc: "Data science combines statistics, programming, and machine learning to analyze data, uncover patterns, and enable smarter business decisions."
    },
    {
      title: "AI Automation",
      img: "image-Photoroom (27).png",
      desc: "AI automation revolutionizes workflows by using intelligent systems to perform tasks faster, reduce errors, and boost overall productivity."
    },
    {
      title: "Software Development",
      img: "Untitled design (4).png",
      desc: "Software development turns innovative ideas into powerful digital solutions that streamline processes, improve efficiency, and drive business success."
    },
    {
      title: "Web Development",
      img: "Untitled design (2).png",
      desc: "Web development brings ideas to life online by creating fast, responsive, and engaging websites that enhance user experience and drive business growth."
    },
    {
      title: "Data Analytics",
      img: "Untitled design (6).png",
      desc: "Data analytics transforms raw data into valuable insights that help businesses make smarter, faster, and more informed decisions."
    }, {
      title: "Whatsup Marketing ",
      img: "Untitled design (5).png",
      desc: "WhatsApp marketing helps businesses connect instantly with customers, share updates, and build trust through personalized, real-time communication."
    },
    {
      title: "Data Science",
      img: "Untitled design (1).png",
      desc: "Data science unlocks the power of data to uncover insights, drive decisions, and fuel innovation across every industry."
    },
    {
      title: "Digital Marketing ",
      img: "Untitled design (3).png",
      desc: "Digital marketing drives brand growth by connecting businesses with their ideal audience through powerful online strategies."
    },
    {
      title: "Marketing ",
      img: "Untitled design (7).png",
      desc: "Marketing helps businesses reach the right audience, build strong connections, and grow faster online."
    }
   
  ];


  
    return (

    

      
    // ----------------------------------------------------------NAVBAR
    <div className='container-fluid'>


{/* ----------------top section-------------- */}
   <div className="movie-slider-container">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3.2}
        speed={900}
        freeMode={true}
        // freeModeMomentumRatio={0.4}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 25,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          320: { slidesPerView: 1.2 },
          480: { slidesPerView: 1.8 },
          640: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.2 },
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay, FreeMode]}
        className="movies"
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <div className="movie-card">
              <img src={movie.img} alt={movie.title} />
              <div className="info">
                <h3>{movie.title}</h3>
                <p>{movie.desc}</p>
                <div className="actions">
                  <Link to="/contact" className="button">
                    Enquire Now
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  {/* // ----------------------------------------------------------Slider */}

   <section>
    
     <center>  <h1 style={{color:"#"}}>Our Projects</h1></center>
        <div className="head">  
    
   

        </div>

        <div className="slider">
          <div className="track" id="track">
            <article className="project-card" active="true">
              <img
                className="project-card__bg"
                src="https://cdn-front.freepik.com/home/anon-rvmp/professionals/designers.webp"
                alt=""
              />
              <div className="project-card__content">
                <img
                  className="project-card__thumb"
                  src="Untitled design (17).png"
                  alt=""
                />
                <div>
                  <h3 className="project-card__title">Web development</h3>
                  <p className="project-card__desc">
                    short for next-gen development
                  </p>
                <a href="https://www.behance.net/gallery/234599893/Unleash-Your-Potential-A-Sports-Tech-Experience?tracking_source=search_projects|web+development&l=6">  <button className="project-card__btn">Details</button></a>
                </div>
              </div>
            </article>

            <article className="project-card">
              <img
                className="project-card__bg"
                src="https://cdn-front.freepik.com/home/anon-rvmp/professionals/marketers.webp"
                alt=""
              />
              <div className="project-card__content">
                <img
                  className="project-card__thumb"
                  src="Untitled design (16).png"
                  alt=""
                />
                <div>
                  <h3 className="project-card__title">AI Automation</h3>
                  <p className="project-card__desc">
                    clean, simple, futuristic
                  </p>
                  <a href="https://www.behance.net/gallery/236545703/DataAI-AI-Data-Analytics-Platform-SaaS-UX-UI-Design?tracking_source=search_projects|data+scinece&l=8"><button className="project-card__btn">Details</button></a>
                </div>
              </div>
            </article>

            <article className="project-card">
              <img
                className="project-card__bg"
                src="https://cdn-front.freepik.com/home/anon-rvmp/professionals/filmmakers.webp"
                alt=""
              />
              <div className="project-card__content">
                <img
                  className="project-card__thumb"
                  src="Untitled design (15).png"
                  alt=""
                />
                <div>
                  <h3 className="project-card__title">Data Science</h3>
                  <p className="project-card__desc">
                  data growing into insights
                  </p>
                  <a href="https://www.behance.net/gallery/237410221/VistaWear-Dashboard-AI-Powered-Business-Management?tracking_source=search_projects|data+scinece+ai&l=14"><button className="project-card__btn">Details</button></a>
                </div>
              </div>
            </article>

            <article className="project-card">
              <img
                className="project-card__bg"
                src="https://cdn-front.freepik.com/home/anon-rvmp/professionals/content-creators.webp"
                alt=""
              />
              <div className="project-card__content">
                <img
                  className="project-card__thumb"
                  src="Untitled design (14).png"
                  alt=""
                />
                <div>
                  <h3 className="project-card__title">App development</h3>
                  <p className="project-card__desc">
                    fast and powerful app creation
                  </p>
             <a href="https://www.behance.net/gallery/236157443/AI-Sales-Assistant-Branding-Web-Mobile-Design?tracking_source=search_projects|app+development&l=1"><button className="project-card__btn">Details</button></a>
                </div>
              </div>
            </article>

            <article className="project-card">
              <img
                className="project-card__bg"
                src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1473"
                alt=""
              />
              <div className="project-card__content">
                <img
                  className="project-card__thumb"
                  src="Untitled design (13).png"
                  alt=""
                />
                <div>
                  <h3 className="project-card__title">Data Analytics</h3>
                  <p className="project-card__desc">
                   focused on metrics and precision
                  </p>
                 <a href="https://www.behance.net/gallery/232996777/AI-driven-Customer-Support-App?tracking_source=search_projects|data+analytics&l=9"> <button className="project-card__btn">Details</button></a>
                </div>
              </div>
            </article>
            <article className="project-card">
              <img
                className="project-card__bg"
                src="https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470"
                alt=""
              />
              <div className="project-card__content">
                <img
                  className="project-card__thumb"
                  src="Untitled design (12).png"
                  alt=""
                />
                <div>
                  <h3 className="project-card__title">Software Development</h3>
                  <p className="project-card__desc">
                   crafting software like an artisan
                  </p>
                 <a href="https://www.behance.net/gallery/227976909/AITC-International-Inspiring-Social-Media-Designs?tracking_source=search_projects|sotware+development&l=1"> <button className="project-card__btn">Details</button></a>
                </div>
              </div>
            </article>
            <article className="project-card">
              <img
                className="project-card__bg"
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
                alt=""
              />
              <div className="project-card__content">
                <img
                  className="project-card__thumb"
                  src="Untitled design (11).png"
                  alt=""
                />
                <div>
                  <h3 className="project-card__title">Digital Marketing</h3>
                  <p className="project-card__desc">
                    simplify and amplify your marketing
                  </p>
                  <a href="https://www.behance.net/gallery/236462127/Digital-Marketing-Website-Landing-Page?tracking_source=search_projects|digital++marketing&l=18"><button className="project-card__btn">Details</button></a>
                </div>
              </div>
            </article>
            <article className="project-card">
              <img
                className="project-card__bg"
                src="https://plus.unsplash.com/premium_photo-1684179641331-e89c6320b6a9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=784"
                alt=""
              />
              <div className="project-card__content">
                <img
                  className="project-card__thumb"
                  src="Untitled design (10).png"
                  alt=""
                />
                <div>
                  <h3 className="project-card__title">Marketing</h3>
                  <p className="project-card__desc">
                   modern and techy marketing vibe
                  </p>
                  <a href="https://www.behance.net/gallery/235558007/AI-Powered-Mental-Therapy-App-UIUX-Case-Study?tracking_source=search_projects|live+support+m+arketing+wbsite&l=1"><button className="project-card__btn">Details</button></a>
                </div>
              </div>
            </article>
            <article className="project-card">
              <img
                className="project-card__bg"
                src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1565"
                alt=""
              />
              <div className="project-card__content">
                <img
                  className="project-card__thumb"
                  src="Untitled design (9).png "
                  alt=""
                />
                <div>
                  <h3 className="project-card__title">UI/UX</h3>
                  <p className="project-card__desc">
                    simplify and beautify design
                  </p>
                 <a href="https://www.behance.net/gallery/219801203/Kolonmall-UXUI-Renewal?tracking_source=search_projects|Live+Support+ui+ux&l=9&bid=81117"> <button className="project-card__btn">Details</button></a>
                </div>
              </div>
            </article>
          </div>
        </div>
       <center>  <h2 style={{color:"#"}}>Boost your professional workflow and productivity</h2></center>


         <center>
           <div className="controls">
            <button id="prev" className="nav-btn" aria-label="Prev">
              ‹
            </button>
            <button id="next" className="nav-btn" aria-label="Next">
              ›
            </button>
          </div>
         </center>
       <div>
      <div className="dots" id="dots" />
    </div>
      </section>


      {/* ------------------expertise----------------------- */}
    <section className="web-expertise-section">
  <div className="web-expertise-header">
    <h2>Our Expertise</h2>
    <p>Comprehensive mobile development for every platform</p>
  </div>
  
  <div className="row row-cols-1 row-cols-md-2 g-4 web-expertise-row">
    <div className="col">
      <div className="web-expertise-card h-100">
        <div className="web-expertise-icon">
          <i className="fa-solid fa-mobile-screen-button"></i>
        </div>
        <h5 className="fw-bold">Native iOS Development</h5>
        <p>
          High-performance apps built with Swift for seamless Apple ecosystem integration.
        </p>
      </div>
    </div>

    <div className="col">
      <div className="web-expertise-card h-100">
        <div className="web-expertise-icon">
          <i className="fa-solid fa-robot"></i>
        </div>
        <h5 className="fw-bold">Native Android Development</h5>
        <p>
          Robust Android apps using Kotlin that leverage the full power of the platform.
        </p>
      </div>
    </div>

    <div className="col">
      <div className="web-expertise-card h-100">
        <div className="web-expertise-icon">
          <i className="fa-solid fa-bolt"></i>
        </div>
        <h5 className="fw-bold">Cross-Platform Solutions</h5>
        <p>
          Efficient development with React Native and Flutter for iOS and Android simultaneously.
        </p>
      </div>
    </div>

    <div className="col">
      <div className="web-expertise-card h-100">
        <div className="web-expertise-icon">
          <i className="fa-solid fa-shield-halved"></i>
        </div>
        <h5 className="fw-bold">Enterprise App Development</h5>
        <p>
          Secure, scalable applications designed for large-scale business operations.
        </p>
      </div>
    </div>
  </div>
</section>

{/* <!-- Font Awesome for icons --> */}
<script src="https://kit.fontawesome.com/a076d05399.js" ></script>


{/* ----------------approach------------------- */}
<section className="our-approach-section">
  <div className="our-approach-header">
    <h2>Our Approach</h2>
    <p>Building apps that users love and businesses trust</p>
  </div>

  <div className="our-approach-cards">
    <div className="our-approach-card">
      <div className="our-approach-icon">
        <i className="fa-solid fa-bolt"></i>
      </div>
      <h3>User Experience First</h3>
      <p>Intuitive interfaces and seamless interactions that delight users</p>
    </div>

    <div className="our-approach-card">
      <div className="our-approach-icon">
        <i className="fa-solid fa-chart-line"></i>
      </div>
      <h3>Performance Driven</h3>
      <p>Optimized code ensuring fast load times and smooth functionality</p>
    </div>

    <div className="our-approach-card">
      <div className="our-approach-icon">
        <i className="fa-solid fa-shield-halved"></i>
      </div>
      <h3>Built to Scale</h3>
      <p>Architecture designed to grow with your user base and business needs</p>
    </div>
  </div>
</section>


{/* <!-- Font Awesome Icons --> */}
<script src="https://kit.fontawesome.com/a076d05399.js" ></script>

    
{/* ----------------------imges chnages--------------------- */}
 <div
      className="testi-container text-center p-6"
      style={{
        background: "linear-gradient(135deg, #0a0a0a, #141414)",
        color: "white",
        borderRadius: "20px",
        overflow: "hidden",
        maxWidth: "100vw",
        margin: "50px auto",
        padding: "40px 20px",
      }}
    >
     {/* Static Heading (not running) */}
<div
  className="text-center mb-6"
  style={{
    position: "relative",
  }}
>
  <h2
    style={{
      fontSize: "clamp(22px, 4vw, 34px)",
      fontWeight: "700",
      color: "#00aaff",
      margin: 0,
    }}
  >
    💬 Valuable Feedbacks For Us
  </h2>
</div>

      {/* Testimonial Content */}
      <div
        className="testi-logo text-3xl font-bold"
        style={{ fontSize: "3rem", marginBottom: "10px" }}
      >
        {current.logo}
      </div>
      <h3 style={{ color: "#00ccff", fontSize: "clamp(18px, 2vw, 24px)" }}>
        {current.company}
      </h3>
      <div
        className="starss"
        style={{ fontSize: "1.2rem", margin: "10px 0" }}
      >
        {current.stars}
      </div>
      <p
        className="testi"
        style={{
          color: "white",
          fontSize: "clamp(14px, 1.5vw, 18px)",
          transition: "opacity 0.8s ease-in-out",
          minHeight: "80px",
          Width: "100vw",
          margin: "0 auto",
        }}
      >
        {current.text}
      </p>

      {/* Smooth animation for text fade */}
      <style>
        {`
          @keyframes scrollText {
            from { transform: translateX(100%); }
            to { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>



{/* --------------------slider cards----------------------- */}
<div className="trusted-section">
  <div className="trusted-slider">
    <div className="trusted-track">
      {/* Logos */}
      <div className="trusted-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" alt="Google" />
      </div>
      <div className="trusted-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/IBM_Logo_1947_1956.svg" alt="IBM" />
      </div>
      <div className="trusted-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" alt="Amazon" />
      </div>
      <div className="trusted-logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS63iW-drx9mgYHjGG6LpPRka6417HbE2sFVg&s" alt="TCS" />
      </div>
      <div className="trusted-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/2560px-Infosys_logo.svg.png" alt="Infosys" />
      </div>

      {/* Duplicate logos for seamless infinite scroll */}
      <div className="trusted-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" alt="Google" />
      </div>
      <div className="trusted-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/IBM_Logo_1947_1956.svg" alt="IBM" />
      </div>
      <div className="trusted-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" alt="Amazon" />
      </div>
      <div className="trusted-logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS63iW-drx9mgYHjGG6LpPRka6417HbE2sFVg&s" alt="TCS" />
      </div>
      <div className="trusted-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/2560px-Infosys_logo.svg.png" alt="Infosys" />
      </div>
    </div>
  </div>
</div>

</div>

    
  )
}
