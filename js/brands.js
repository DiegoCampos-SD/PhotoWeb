"use strict";

const films = {
  kodak: [
    {
      type: "ColorPlus",
      description:
        "It is a great 'carry everywhere, all the time' film. It has a bit of an old school feel to its color palette, a gentle contrast, and moderately good latitude. It has less grain and more sharpness than you would likely expect.",
      image: "../images/kodak/colorPlus/kodak-colorPlus-box.jpg",
      gallery: [
        "../images/kodak/colorPlus/exp1.jpeg",
        "../images/kodak/colorPlus/exp2.jpeg",
        "../images/kodak/colorPlus/exp3.jpeg",
      ],
    },
    {
      type: "Portra 800",
      description:
        "Kodak Portra 800 is more than a one trick circus though and can be used in a wide variety of situations, including landscapes, product and still life, cityscape, daytime, nighttime, you name it.",
      image: "../images/kodak/portra800/kodak-portra800-box.jpg",
      gallery: [
        "../images/kodak/portra800/exp1.jpg",
        "../images/kodak/portra800/exp2.jpg",
        "../images/kodak/portra800/exp3.jpg",
      ],
    },
    {
      type: "Gold",
      description:
        "It is a surprisingly well-performing, 'bang for your buck' film. Kodak Gold has reasonable color saturation and contrast with modest grain. It is relatively budget friendly and makes a great go-to film when you are not quite sure what to throw in the camera.",
      image: "../images/kodak/gold/kodak-gold-box.jpg",
      gallery: [
        "../images/kodak/gold/exp1.jpeg",
        "../images/kodak/gold/exp2.jpeg",
        "../images/kodak/gold/exp3.jpeg",
        "../images/kodak/gold/exp4.jpeg",
      ],
    },
    {
      type: "UltraMax",
      description:
        "You may expect nice, bright, clean colors from this budget-friendly film. The versatile 400 ISO is perfect for many situations. UltraMax 400 is a very versatile film that can be used in a variety of situations. We have also had good experience pushing this film to 800 ISO.",
      image: "../images/kodak/ultraMax/kodak-ultraMax-box.jpg",
      gallery: [
        "../images/kodak/ultraMax/exp1.jpg",
        "../images/kodak/ultraMax/exp2.jpg",
        "../images/kodak/ultraMax/exp3.jpg",
      ],
    },
    {
      type: "Ektar",
      description:
        "It is known for having very fine grain and high color saturation making it ideal for colorful subject matter such as landscapes, floral macro, and the like. It can cause skin tones to be a bit exaggerated; using it for portraiture should be done cautiously.",
      image: "../images/kodak/Ektar/kodak-ektar-box.jpg",
      gallery: [
        "../images/kodak/ektar/exp1.jpg",
        "../images/kodak/ektar/exp2.jpg",
        "../images/kodak/ektar/exp3.jpg",
      ],
    },
    {
      type: "E100",
      description:
        "The film is known for having a neutral tonal scale, modestly saturated colors and very fine grain. It has a lower contrast giving it good dynamic range. Additionally, Kodak E100 is formulated for a very low DMIN which results in clean, white highlights.",
      image: "../images/kodak/e100/kodak-e100-box.jpg",
      gallery: [
        "../images/kodak/e100/exp1.jpeg",
        "../images/kodak/e100/exp2.jpeg",
        "../images/kodak/e100/exp3.jpeg",
      ],
    },
  ],
  fuji: [
    /*{
      type: "FujiColor 100",
      description:
        "This fine grain 100iso film is ideal for outdoor photography. Compared to FujiFilm c200 and Superia X-TRA 400, FujiColor 100 has less saturated reds which seems to do better with skin tones.  It has mild contrast and very good exposure latitude.",
      image: "../images/fuji/fujiColor100/fuji-fujiColor100-box.jpg",
      gallery: [
        "../images/fuji/fujiColor100/exp1.jpg",
        "../images/fuji/fujiColor100/exp2.jpg",
        "../images/fuji/fujiColor100/exp3.jpg",
      ],
    },*/
    {
      type: "FujiColor 200",
      description:
        "Looking for a great inexpensive color negative film? FujiFilm c200 is has amazing color, relatively fine grain, great exposure latitude and you can pick up a 36 exposure roll for around $4! We highly recommend it for point-n-shoot film cameras.",
      image: "../images/fuji/fujiColor200/fuji-fujiColor200-box.jpg",
      gallery: [
        "../images/fuji/fujiColor200/exp1.jpg",
        "../images/fuji/fujiColor200/exp2.jpg",
        "../images/fuji/fujiColor200/exp3.jpg",
      ],
    },
    {
      type: "FujiColor 400",
      description:
        "Fujifilm 400 is an affordable color negative film characterized by its fine grain, medium contrast, and medium saturation. This film's color palette favors blue and green hues.",
      image: "../images/fuji/400/400-box.jpg",
      gallery: [
        "../images/fuji/400/exp1.jpg",
        "../images/fuji/400/exp2.jpg",
        "../images/fuji/400/exp3.jpg",
      ],
    },
    {
      type: "Acros 100II",
      description:
        "It has almost identical characteristics to that original film and is a great replacement for it. In addition to its fine grain, sharp detail and nice contrast, Fuji Acros II is known for its exceptional reciprocity characteristics that make it a great choice for long exposure photography.",
      image: "../images/fuji/acros/acros-box.jpg",
      gallery: [
        "../images/fuji/acros/exp1.jpg",
        "../images/fuji/acros/exp2.jpg",
        "../images/fuji/acros/exp3.jpg",
      ],
    },
    {
      type: "Velvia 50",
      description:
        "This film has amazing color, super fine grain, and much better tonal transitions and exposure latitude than Velvia 100 which means to does better in contrasty light. When exposed properly is captures very true to life color.",
      image: "../images/fuji/velvia50/fuji-velvia50-box.jpg",
      gallery: [
        "../images/fuji/velvia50/exp1.jpg",
        "../images/fuji/velvia50/exp2.jpg",
        "../images/fuji/velvia50/exp3.jpg",
      ],
    },
    {
      type: "Provia 100F",
      description:
        "Fuji Provia 100F is a 100 ISO color transparency film in 35mm format and 36 exposures for E-6 processing.  It is considered to have saturated colors but slightly less so than Fuji Velvia.  It also boasts fine grain and very good sharpness.",
      image: "../images/fuji/provia100F/fuji-provia100F-box.jpg",
      gallery: [
        "../images/fuji/provia100F/exp1.jpg",
        "../images/fuji/provia100F/exp2.jpg",
        "../images/fuji/provia100F/exp3.jpg",
      ],
    },
  ],
  cine: [
    {
      type: "Cinestill 400D",
      description:
        "CineStill 400D is a fine grain film that delivers a soft color palette with natural saturated color and rich, warm skin tones. The film has a wide dynamic range, with a base sensitivity of ISO 400 but can be rated from 200 to 800, and it can be pushed up to 3200.",
      image: "../images/cine/400D/400D-box.jpg",
      gallery: [
        "../images/cine/400D/exp1.jpg",
        "../images/cine/400D/exp2.jpg",
        "../images/cine/400D/exp3.jpg",
      ],
    },
    {
      type: "Cinestill 50D",
      description:
        "Cinestill 50D is a 36 exposure roll of 35mm ISO 50 color film.  It is characterized by its slow speed, fine grain, and soft color palette.  The film has a distinct halation effect that causes an orange/red glow to surround highlights. Cinestill 50D is motion picture film that comes from Kodak 50 ISO daylight balanced film, it has its remjet layer removed making the film safe for regular C41 processing.",
      image: "../images/cine/50D/50D-box.jpg",
      gallery: [
        "../images/cine/50D/exp1.jpg",
        "../images/cine/50D/exp2.jpg",
        "../images/cine/50D/exp3.jpg",
      ],
    },
    {
      type: "Cinestill BWXX",
      description:
        "Cinestill BWXX is a 250 ISO black and white negative, panchromatic film based on Kodak Double X motion picture film. It is a sharp and fine grain film with unbeatable tonality. This classic black and white film has been widely used since its introduction in 1959. You may recognize the look of this film stock from films like 'The Raging Bull' and 'Schindler's List'.",
      image: "../images/cine/BWXX/BWXX-box.jpg",
      gallery: [
        "../images/cine/BWXX/exp1.jpg",
        "../images/cine/BWXX/exp2.jpg",
        "../images/cine/BWXX/exp3.jpg",
      ],
    },
    {
      type: "Cinestill 800T",
      description:
        "Since it is lacking the remjet layer that serves as an anti-halation layer, Cinestill 800T produces a distinct halo effect around bright light sources. Though it is balanced for tungsten lighting, this film can still be used in daylight conditions and will produce a cooler, blue color cast unless corrected via warming filters.",
      image: "../images/cine/800T/800T-box.jpg",
      gallery: [
        "../images/cine/800T/exp1.jpg",
        "../images/cine/800T/exp2.jpg",
        "../images/cine/800T/exp3.jpg",
      ],
    },
  ],
  ilford: [
    {
      type: "Ilford HP5",
      description:
        "It has a native speed of ISO 400 making it perfect for most lighting conditions.  It has a classic grain, perfectly moderate contrast and excellent latitude.  If you have never tried a roll, you should do so at your earliest convenience.  It is the kind of film that you can spend the rest of your life invested in.",
      image: "../images/ilford/HP5/HP5-box.jpg",
      gallery: [
        "../images/ilford/HP5/exp1.jpg",
        "../images/ilford/HP5/exp2.jpg",
        "../images/ilford/HP5/exp3.jpg",
      ],
    },
    {
      type: "Ilford SFX 200",
      description:
        "Ilford SFX 200 is a 200 ISO panchromatic black and white film with sensitivity extending into the near-infrared spectrum up to about 740nm.  When paired with a red or infrared filter, this film can produce stunning results.  This is product listing is for a single roll of Ilford SFX in 35mm format.",
      image: "../images/ilford/SFX200/SFX200-box.jpg",
      gallery: [
        "../images/ilford/SFX200/exp1.jpg",
        "../images/ilford/SFX200/exp2.jpg",
        "../images/ilford/SFX200/exp3.jpg",
      ],
    },
    {
      type: "Ilford Delta 3200",
      description:
        "It uses Ilford's Core-shell emulsion technology to deliver sharp and incredibly fine grained results relative to its film speed.  Ilford Delta 3200 is a great choice for photographers working in low light conditions where a tripod or flash are not available.",
      image: "../images/ilford/Delta3200/delta3200-box.jpg",
      gallery: [
        "../images/ilford/Delta3200/exp1.jpg",
        "../images/ilford/Delta3200/exp2.jpg",
        "../images/ilford/Delta3200/exp3.jpg",
      ],
    },
    {
      type: "Ilford XP2 Super 400",
      description:
        "It is a great b&w film for scanning due to it working with scanner dust removal ICE technology to produce very clean scans.  It can be printed in the b&w darkroom as well and still makes beautiful silver gelatin prints. It has a very smooth, rich look and is one of those films that will make you wonder why you didn't try it sooner.",
      image: "../images/ilford/XP2/XP2-box.jpg",
      gallery: [
        "../images/ilford/XP2/exp1.jpg",
        "../images/ilford/XP2/exp2.jpg",
        "../images/ilford/XP2/exp3.jpg",
      ],
    },
    {
      type: "Ilford Pan F+",
      description:
        "Ilford Pan F Plus is a 50 ISO black and white, panchromatic film in 120 format.  It is known for exceptionally fine grain, excellent sharpness and moody contrast.  It is a beautiful film that delivers a rich tonal palette with very smooth characteristics.",
      image: "../images/ilford/PANF+/PANF+-box.jpg",
      gallery: [
        "../images/ilford/PANF+/exp1.jpg",
        "../images/ilford/PANF+/exp2.jpg",
        "../images/ilford/PANF+/exp3.jpg",
      ],
    },
    {
      type: "Ilford Delta 400",
      description:
        "Ilford Delta 400 is a 400 ISO panchromatic, black and white film in 35mm format and 36 exposures.  It uses Ilford's Core-shell emulsion technology to deliver high speed while also being sharp and fine grained.  ",
      image: "../images/ilford/Delta400/delta400-box.jpg",
      gallery: [
        "../images/ilford/Delta400/exp1.jpeg",
        "../images/ilford/Delta400/exp2.jpeg",
        "../images/ilford/Delta400/exp3.jpeg",
      ],
    },
  ],
};

const sctBrand = document.querySelector("#brand-container");
let brandName = sctBrand.getAttribute("name");

//Elements builder

const brandCards = () => {
  films[brandName].forEach((film) => {
    let filmCont = document.createElement("div");
    filmCont.classList.add("film-card");

    let imgInfoCont = document.createElement("div");
    imgInfoCont.classList.add("img-info-container");

    let imgBtnContainer = document.createElement("div");
    imgBtnContainer.classList.add("img-btn-container");

    let img = document.createElement("img");
    img.setAttribute("src", film.image);
    img.setAttribute("alt", film.type + " box picture");

    let btn = document.createElement("button");
    let btnText = document.createTextNode("Examples");
    btn.appendChild(btnText);
    btn.addEventListener("click", () => {
      Swal.fire({
        html: `

<body class="carousel-body">
<section class="carousel" aria-label="Gallery">

<ol class="carousel__viewport">
  <li id="carousel__slide1"
      class="carousel__slide">
    <div class="carousel__snapper"> 
      <img src=${film.gallery[0]} alt= ${film.type}" photography"/>
    </div>
  </li>
  <li id="carousel__slide2"
      
      class="carousel__slide">
    <div class="carousel__snapper">
      <img src=${film.gallery[1]} alt= ${film.type}" photography"/>
    </div>
  </li>
  <li id="carousel__slide3"
      
      class="carousel__slide">
    <div class="carousel__snapper">
      <img src=${film.gallery[2]} alt= ${film.type}" photography"/>
    </div>
  </li>

</ol>
<aside class="carousel__navigation">
  <ol class="carousel__navigation-list">
    <li class="carousel__navigation-item">
      <a href="#carousel__slide1"
         class="carousel__navigation-button">Go to slide 1</a>
    </li>
    <li class="carousel__navigation-item">
      <a href="#carousel__slide2"
         class="carousel__navigation-button">Go to slide 2</a>
    </li>
    <li class="carousel__navigation-item">
      <a href="#carousel__slide3"
         class="carousel__navigation-button">Go to slide 3</a>
    </li>
  </ol>
</aside>

</section>
</body>
        
        `,
      });
    });

    let infoCont = document.createElement("div");
    infoCont.classList.add("info-container");

    let type = document.createElement("h2");
    let typeText = document.createTextNode(film.type);
    type.appendChild(typeText);

    let desc = document.createElement("p");
    let descText = document.createTextNode(film.description);
    desc.appendChild(descText);

    imgBtnContainer.appendChild(img);
    imgBtnContainer.appendChild(btn);
    imgInfoCont.appendChild(imgBtnContainer);
    infoCont.appendChild(type);
    infoCont.appendChild(desc);
    imgInfoCont.appendChild(infoCont);
    filmCont.appendChild(imgInfoCont);

    sctBrand.appendChild(filmCont);
  });
};

brandCards();
