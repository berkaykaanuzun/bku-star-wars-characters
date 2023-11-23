const characters = [
  {
    id: 1,
    name: "Luke Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    homeworld: "tatooine",
  },
  {
    id: 2,
    name: "C-3PO",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    homeworld: "tatooine",
  },
  {
    id: 3,
    name: "R2-D2",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    homeworld: "naboo",
  },
  {
    id: 4,
    name: "Darth Vader",
    pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    homeworld: "tatooine",
  },
  {
    id: 5,
    name: "Leia Organa",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    homeworld: "alderaan",
  },
  {
    id: 6,
    name: "Owen Lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 7,
    name: "Beru Whitesun lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 8,
    name: "R5-D4",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    homeworld: "tatooine",
  },
  {
    id: 9,
    name: "Biggs Darklighter",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    homeworld: "tatooine",
  },
  {
    id: 10,
    name: "Obi-Wan Kenobi",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    homeworld: "stewjon",
  },
  {
    id: 11,
    name: "Anakin Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    homeworld: "tatooine",
  },
  {
    id: 12,
    name: "Wilhuff Tarkin",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    homeworld: "eriadu",
  },
  {
    id: 13,
    name: "Chewbacca",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    homeworld: "kashyyyk",
  },
  {
    id: 14,
    name: "Han Solo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    homeworld: "corellia",
  },
  {
    id: 15,
    name: "Greedo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    homeworld: "Rodia",
  },
  {
    id: 16,
    name: "Jabba Desilijic Tiure",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    homeworld: "tatooine",
  },
  {
    id: 18,
    name: "Wedge Antilles",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
    homeworld: "corellia",
  },
  {
    id: 19,
    name: "Jek Tono Porkins",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    homeworld: "bestine",
  },
  {
    id: 20,
    name: "Yoda",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
  },
  {
    id: 21,
    name: "Palpatine",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    homeworld: "naboo",
  },
];
// Değişken Oluştur
const homeworldRaw = [];

// Döngü ile nereli olduklarını al ve null veya undefined değerleri "other yap"
for (character of characters) {
  homeworldRaw.push(character.homeworld ?? "other");
}

// Array den yinelenen değerleri kaldır
const homeworldUnique = homeworldRaw.filter((value, index, homeworld) => {
  return homeworld.indexOf(value) === index;
});

// Array deki elemanları küçük harf yap
const homeworld = homeworldUnique.map((item) => {
  return item.toLowerCase();
});

const body = document.querySelector("body");

const createRadioInput = () => {
  const radioInput = document.createElement("div");
  radioInput.classList.add("radioInput");
  const radioInputContent = ` <div class="cntr"> </div>`;
  radioInput.innerHTML = radioInputContent;
  body.append(radioInput);
  const mainDiv = document.querySelector(".cntr");
  for (home of homeworld) {
    const radioContent = `<label for="homeworld-${home}" class="radio">
    <input type="radio" name="homeworld" id="homeworld-${home}" onclick="filterRadio(this)"; value="${home}" class="hidden  ${home}"/>
    <span class="label"></span>${home}
  </label>`;
    radioInput.innerHTML += radioContent;
  }
};
createRadioInput();

console.log(homeworld);

// console.log(homeworld);
let buttonIndex = 0;

const buttonShowAndHidden = document.getElementById("characters-btn");

function showAndHidden() {
  {
    if (buttonIndex % 2 == 0) {
      buttonIndex++;
      const mainSection = document.createElement("section");
      mainSection.classList.add("mainSection");
      const sectionContent = `<section id="characters-sec" class="py-5">
      <div class="container">
        <div id="main-row" class="row gx-3 gy-5"></div>
      </div>
    </section>`;

      body.classList.remove("overflow-hidden");
      mainSection.innerHTML = sectionContent;
      body.append(mainSection);
      for (character of characters) {

        console.log(character);
        const card = document.createElement("div");
        card.classList = "col-12 col-md-6 col-lg-4 col-xl-3 main-card";

        const cardContent = ` 
          <div class="card bg-dark text-light" id="card-${character.id}">
            <img src="${character.pic}" class="card-img-top card-img" alt="#" />
            <div class="card-body card-name">
              <h4>${character.name}</h4>
              
              <p class="card-text card-homeworld">
              ${character.homeworld}
              </p>
              <hr> 
            </div>
          </div>
          `;
        card.innerHTML = cardContent;
        const mainRow = document.querySelector("#main-row");
        mainRow.append(card);
      }
    } else {
      document.querySelector(".mainSection").remove();
      buttonIndex++;
      document.querySelector("body").classList.add("overflow-hidden");
    }
  }
}

const radios = document.querySelectorAll(".radio")
const filterRadio = (input) => {
  const radioValue = String(input.value);
  {
    if (homeworld.includes(radioValue)) {
      console.log(radioValue);
      return radioValue;
    }
  }
};
 
