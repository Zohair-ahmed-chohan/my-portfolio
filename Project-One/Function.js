// zacautos model page script

const cars = [
    {
        name: "Porsche 911 GT3 RS",
        img: "Porsche.jpg",
        price: "$241,300",
        engine: "4.0L petrol engine, 518hp. Goes from 0 to 97 km/h (60mph) in 3.0 second.",
        drive: "7-speed automatic. Power goes to the rear wheels.",
        fuel: "Petrol. About 6.8 km per liter. Roughly 435 km on a full tank.",
        warranty: "4 years or 80,000 km. First year of servicing is free.",
        features: "10.9-inch screen, lap-time tracking, roll cage ready, 130 L front boot"
    },
    {
        name: "Lamborghini Revuelto",
        img: "Lambo.jpg",
        price: "$608,358",
        engine: "6.5L V12 petrol engine plus 3 electric motors, 1,001 hp. 0 to 97 km/h in 2.5 seconds.",
        drive: "8-speed automatic. Power goes to all four wheels.",
        fuel: "Plug-in hybrid. About 10 km on battery covered for 8 years.",
        warranty: "3 years, on distance limit. Hybrid battery covered for 8 years.",
        features: "8.4-inch upright screen, extra screen for the passenger, driver-assist safety, front boot."
    },
    {
        name: "Ferrari 296 GTB",
        img: "ferrari.jpg",
        price: "$342,205",
        engine: "3.0L twin-turbo V6 with electric motor, 819 hp. 0 to 97 km/h in 2.9 seconds.",
        drive: "8-speed automatic. Power goes to rear wheels.",
        fuel: "Plug-in hybrid. About 24 km on battery alone, roughly 515 km in total.",
        warranty: "3 years factory warranty. Servicing covered for 7 years.",
        features: "Fully digital dashboard, drive modes, skid control, 200 L boot."
    },
    {
        name: "Mercedes-AMG GT 63",
        img: "Mercedeas.jpg",
        price: "$177,050",
        engine: "Hand-built 4.0L twin-turbo V8, 577 hp. 0 to 97 km/h in 3.1 seconds.",
        drive: "9-speed automatic. Power goes to all four wheels.",
        fuel: "Petrol. About 6.8 km per liter. Roughly 483 km on a full tank.",
        warranty: "4 years or 80,000 km, full coverage.",
        features: "11.9-inch screen, premium 3D sound system, automatic emergency braking, 4 seats."
    },
    {
        name: "Dodge Challenger Hellcat Redeye",
        img: "Dodge.jpg",
        price: "$88,490",
        engine: "6.2L supercharged V8, 797 hp. 0 to 97 km/h in 3.4 seconds.",
        drive: "8-speed automatic. Power goes to the rear wheels.",
        fuel: "Petrol. About 6.4 km per liter. Roughly 451 km on a full tank.",
        warranty: "3 years or 58,000 km, basic. Engine and gearbox covered for 5 years or 97,000 km.",
        features: "8.4-inch screen with performance stats, blind-spot warning, 459 L boot."
    },
    {
        name: "BMW M5",
        img: "BMW.jpg",
        price: "$325,000",
        engine: "5.2L supercharged V8. 0 to 97 km/h in 2.8 seconds.",
        drive: "8-speed automatic. Power goes to all four wheels.",
        fuel: "Petrol. About 6 km per liter. Roughly 360 km on a full tank.",
        warranty: "3 years or 58,000 km + trackday support.",
        features: "13.2-inch screen, racing seats, titanium paddles, no back seats."
    }
];

const rows = [
    ["Price", "price"],
    ["Engine & Speed", "engine"],
    ["Gearbox & Drive", "drive"],
    ["Fuel & Range", "fuel"],
    ["Warranty", "warranty"],
    ["Features", "features"]
];

const grid = document.getElementById("grid");

cars.forEach((car, i) => {
    const specs = rows.map(([label, key]) => `<li><b>${label}</b>${car[key]}</li>`).join("");

    grid.insertAdjacentHTML("beforeend", `
      <article class="car" style="animation-delay:${i * 0.08}s">
        <div class="pic">
          <img src="${car.img}" alt="${car.name}" loading="lazy">
          <div class="pic-buttons">
            <button class="btn red" data-index="${i}">Preview</button>
            <a class="btn" href="${car.img}" download>Download Image</a>
          </div>
        </div>
        <div class="info">
          <h3>${car.name}</h3>
          <ul class="specs">${specs}</ul>
        </div>
      </article>
    `);
});

const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");
const popupTitle = document.getElementById("popupTitle");
const popupDownload = document.getElementById("popupDownload");

function openPopup(car) {
    popupImg.src = car.img;
    popupImg.alt = car.name;
    popupTitle.textContent = car.name;
    popupDownload.href = car.img;
    popup.classList.add("open");
}

function closePopup() {
    popup.classList.remove("open");
    popupImg.src = "";
}

grid.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-index]");
    if (btn) openPopup(cars[btn.dataset.index]);
});

document.getElementById("closeBtn").addEventListener("click", closePopup);
popup.addEventListener("click", (e) => { if (e.target === popup) closePopup(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closePopup(); });