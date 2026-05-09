// ================= WATCH DATA =================
const watches = [
    { id: 1, name: "Casio F-91W", price: 1695, movement: "Quartz", category: "Casual", image: "assets/f91w-1.jpg", devPick: true, description: "Iconic digital watch with long battery life.", url: "watches/watch-1.html", specs: { diameter: "35.2mm", material: "Resin" } },
    { id: 2, name: "Citizen Zenshin NK5020-58X", price: 75900, movement: "Automatic", category: "Sports", image: "assets/zenshin-1.jpg", devPick: false, description: "Premium titanium mechanical watch.", url: "watches/watch-2.html", specs: { diameter: "40.5mm", material: "Super Titanium" } },
    { id: 3, name: "Seiko SNXS Rinse Blue", price: 35000, movement: "Automatic", category: "Sports", image: "assets/snxs-1.jpg", devPick: true, description: "Compact automatic watch with blue dial.", url: "watches/watch-3.html", specs: { diameter: "37.4mm", material: "Steel" } },
    { id: 4, name: "Tissot Gentleman Open Heart", price: 104000, movement: "Automatic", category: "Dress", image: "assets/prx-1.jpg", devPick: false, description: "Swiss automatic with open-heart dial.", url: "watches/watch-4.html", specs: { diameter: "40mm", material: "Steel" } },
    { id: 5, name: "Casio AE1200", price: 3995, movement: "Quartz", category: "Casual", image: "assets/ae1200-1.jpg", devPick: true, description: "World-time digital watch.", url: "watches/watch-5.html", specs: { diameter: "42.1mm", material: "Resin" } },
    { id: 6, name: "Casio A168", price: 2695, movement: "Quartz", category: "Casual", image: "assets/a168-1.jpg", devPick: false, description: "Classic retro digital watch.", url: "watches/watch-6.html", specs: { diameter: "36mm", material: "Resin" } },
    { id: 7, name: "Seiko Speedtimer", price: 70000, movement: "Solar", category: "Sports", image: "assets/prospex-1.jpg", devPick: false, description: "Solar chronograph.", url: "watches/watch-7.html", specs: { diameter: "39mm", material: "Steel" } },
    { id: 8, name: "Hamilton Khaki Field", price: 71000, movement: "Mechanical", category: "Sports", image: "assets/khaki-1.jpg", devPick: true, description: "Military-inspired field watch.", url: "watches/watch-8.html", specs: { diameter: "38mm", material: "Steel" } },
    { id: 9, name: "Casio GA-2100", price: 9195, movement: "Quartz", category: "Sports", image: "assets/casioak-1.jpg", devPick: false, description: "Slim G-Shock.", url: "watches/watch-9.html", specs: { diameter: "45.4mm", material: "Carbon/Resin" } },
    { id: 10, name: "Casio DW-5600", price: 8995, movement: "Quartz", category: "Sports", image: "assets/dw5600-1.jpg", devPick: false, description: "Classic square G-Shock.", url: "watches/watch-10.html", specs: { diameter: "42.8mm", material: "Resin" } },
    { id: 11, name: "Seiko 5 Sports SRPE53K1", price: 25000, movement: "Automatic", category: "Sports", image: "assets/srpe53-1.jpg", devPick: false, description: "Versatile Seiko 5 Sports automatic with blue dial.", url: "watches/watch-11.html", specs: { diameter: "40mm", material: "Steel" } },
    { id: 12, name: "Citizen Tsuyosa NJ0150-81Z", price: 41900, movement: "Automatic", category: "Dress", image: "assets/tsuyosa-1.jpg", devPick: true, description: "Bold automatic watch with yellow dial and integrated bracelet.", url: "watches/watch-11.html", specs: { diameter: "40mm", material: "Steel" } },
    { id: 13, name: "Seiko Presage SRPJ17J1", price: 43000, movement: "Automatic", category: "Dress", image: "assets/srpj17-1.jpg", devPick: false, description: "Elegant Presage Cocktail Time with brown dial inspired by Irish Coffee.", url: "watches/watch-12.html", specs: { diameter: "39.5mm", material: "Steel" } },
    { id: 14, name: "Tissot PRX 40mm", price: 83500, movement: "Automatic", category: "Dress", image: "assets/prx40-1.jpg", devPick: false, description: "Modern classic with integrated bracelet and 80-hour power reserve.", url: "watches/watch-14.html", specs: { diameter: "40mm", material: "Steel" } },
    { id: 15, name: "Hamilton Ventura Chrono Quartz", price: 129000, movement: "Quartz", category: "Dress", image: "assets/ventura-1.jpg", devPick: true, description: "Iconic triangular chronograph with bold design.", url: "watches/watch-15.html", specs: { diameter: "32x50mm", material: "Steel" } },
    { id: 16, name: "Seiko Prospex SPB121J1", price: 65000, movement: "Automatic", category: "Sports", image: "assets/spb121-1.jpg", devPick: false, description: "Iconic green-dial Alpinist with compass bezel and 200m WR.", url: "watches/watch-16.html", specs: { diameter: "39.5mm", material: "Steel" } },
    { id: 17, name: "Tissot Le Locle 39.3mm", price: 82500, movement: "Automatic", category: "Dress", image: "assets/lelocle-1.jpg", devPick: false, description: "Classic Swiss dress watch with elegant styling and 80-hour reserve.", url: "watches/watch-17.html", specs: { diameter: "39.3mm", material: "Steel" } },
    { id: 18, name: "Hamilton Khaki Navy Scuba Auto", price: 103000, movement: "Automatic", category: "Sports", image: "assets/khaki-navy-1.jpg", devPick: false, description: "Sporty dive-style automatic with 80-hour reserve.", url: "watches/watch-18.html", specs: { diameter: "40mm", material: "Steel" } },
    { id: 19, name: "Tissot Visodate 39mm", price: 95500, movement: "Automatic", category: "Dress", image: "assets/visodate-1.jpg", devPick: false, description: "Elegant Swiss dress watch with domed sapphire and 80-hour reserve.", url: "watches/watch-19.html", specs: { diameter: "39mm", material: "Steel" } },
    { id: 20, name: "Longines Conquest 41mm", price: 95000, movement: "Quartz", category: "Sports", image: "assets/conquest-1.jpg", devPick: false, description: "High-performance Swiss sports watch with 300m water resistance.", url: "watches/watch-20.html", specs: { diameter: "41mm", material: "Steel" } },
    { id: 21, name: "Hamilton Khaki Field Murph 38mm", price: 113000, movement: "Automatic", category: "Dress", image: "assets/murph-1.jpg", devPick: false, description: "Iconic field watch with cinematic heritage and 80-hour reserve.", url: "watches/watch-21.html", specs: { diameter: "38mm", material: "Steel" } },
    { id: 22, name: "Citizen Promaster Sky Chrono", price: 62900, movement: "Solar", category: "Sports", image: "assets/promaster-1.jpg", devPick: true, description: "Eco-Drive aviation chronograph powered by light.", url: "watches/watch-22.html", specs: { diameter: "40mm", material: "Steel" } },
    { id: 23, name: "Casio G-Shock GW-B5600CY-1", price: 10995, movement: "Solar", category: "Sports", image: "assets/gwb5600-1.jpg", devPick: true, description: "Tough Solar G-Shock with Bluetooth and radio sync.", url: "watches/watch-23.html", specs: { diameter: "42.8mm", material: "Resin" } },
    { id: 24, name: "Timex Q Chronograph 40mm", price: 14495, movement: "Quartz", category: "Sports", image: "assets/timexq-1.jpg", devPick: false, description: "Retro-inspired quartz chronograph with blue dial.", url: "watches/watch-24.html", specs: { diameter: "40mm", material: "Steel" } },
    { id: 25, name: "Timex Q Digital LCA Reissue", price: 10995, movement: "Quartz", category: "Casual", image: "assets/timexlca-1.jpg", devPick: false, description: "Retro digital-analog hybrid with classic LCA design.", url: "watches/watch-25.html", specs: { diameter: "32.5mm", material: "Steel" } },
    { id: 26, name: "Timex Continental Blue Dial", price: 10995, movement: "Quartz", category: "Dress", image: "assets/timexcontinental-1.jpg", devPick: false, description: "Minimalist dress watch with slim profile and blue dial.", url: "watches/watch-26.html", specs: { diameter: "39mm", material: "Steel" } },
    { id: 27, name: "Timex Q Reissue 38mm", price: 11995, movement: "Quartz", category: "Casual", image: "assets/timexqreissue-1.jpg", devPick: false, description: "Vintage-inspired Q Timex reissue with blue dial.", url: "watches/watch-27.html", specs: { diameter: "38mm", material: "Steel" } },
    { id: 28, name: "Timex Falcon Eye Black Dial", price: 23495, movement: "Quartz", category: "Casual", image: "assets/falconeye-1.jpg", devPick: false, description: "Distinctive textured dial with bold styling.", url: "watches/watch-28.html", specs: { diameter: "40mm", material: "Steel" } },
    { id: 29, name: "Boderry Voyager Titanium", price: 12999, movement: "Automatic", category: "Field", image: "assets/voyager-1.jpg", devPick: true, description: "Titanium field watch with NH35 movement and 100m WR.", url: "watches/watch-29.html", specs: { diameter: "40mm", material: "Titanium" } },
    { id: 30, name: "Timex Jet Blue Dial", price: 17495, movement: "Quartz", category: "Casual", image: "assets/timexjet-1.jpg", devPick: false, description: "Lightweight everyday watch with fabric strap and acrylic crystal.", url: "watches/watch-30.html", specs: { diameter: "38mm", material: "Steel" } }
];

// ================= STATE =================
const state = {
    filters: { search: "", movement: "all", budget: 200000, sort: "default" },
    compareList: []
};

// ================= HELPERS =================
const formatPrice = (p) => `₹${p.toLocaleString('en-IN')}`;

// ================= FILTER =================
function applyFilters() {
    let filtered = watches.filter(w =>
        (w.name.toLowerCase().includes(state.filters.search.toLowerCase())) &&
        (state.filters.movement === "all" || w.movement === state.filters.movement) &&
        w.price <= state.filters.budget
    );

    if (state.filters.sort === "low") filtered.sort((a,b)=>a.price-b.price);
    if (state.filters.sort === "high") filtered.sort((a,b)=>b.price-a.price);

    renderGrid(filtered);
}

// ================= GRID =================
// DOM Manipulation Compliance: Using map, innerHTML
function renderGrid(data) {
    const grid = document.getElementById('watchGrid');
    if (!grid) return;

    if (!data.length) {
        grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;">No watches found</p>`;
        return;
    }

    grid.innerHTML = data.map(w => `
        <div class="watch-card fade-in">
            ${w.devPick ? '<span class="badge">Expert Pick</span>' : ''}
            <img src="${w.image}" class="card-img" alt="${w.name} - ${w.movement} ${w.category} Watch" width="280" height="180" loading="lazy">
            <h3>${w.name}</h3>
            <p class="watch-price">${formatPrice(w.price)}</p>
            <p class="watch-meta">${w.movement} • ${w.category}</p>

            <div style="display:flex; gap:0.5rem;">
                <a href="${w.url}" class="btn btn-outline">Details</a>
                <button onclick="toggleCompare(${w.id})" class="btn">
                    ${state.compareList.includes(w.id) ? "Remove" : "Compare"}
                </button>
            </div>
        </div>
    `).join('');

    animate();
}

// ================= COMPARE =================
function toggleCompare(id) {
    const i = state.compareList.indexOf(id);

    if (i > -1) {
        state.compareList.splice(i, 1);
    } else {
        if (state.compareList.length >= 3) {
            alert("Max 3 watches allowed for comparison.");
            return;
        }
        state.compareList.push(id);
    }

    updateCompareUI();
    applyFilters();
}

function updateCompareUI() {
    const tableHead = document.getElementById('compareTableHead');
    const tableBody = document.getElementById('compareTableBody');
    const btn = document.querySelector('[onclick="clearCompare()"]');

    if (!state.compareList.length) {
        tableHead.innerHTML = `<tr><th scope="col" colspan="4">Watch Specifications</th></tr>`;
        tableBody.innerHTML = `<tr><td colspan="4">Select watches to compare</td></tr>`;
        if (btn) btn.disabled = true;
        return;
    }

    if (btn) btn.disabled = false;

    const items = state.compareList.map(id => watches.find(w => w.id === id));
    const bestPrice = Math.min(...items.map(i => i.price));

    // Dynamic Header building (DOM Manipulation)
    tableHead.innerHTML = `<tr><th scope="col">Specification</th>${items.map(i => `<th scope="col">${i.name}</th>`).join('')}</tr>`;
    
    // Body building
    tableBody.innerHTML = `
        <tr><th scope="row">Price</th>${items.map(i => `
            <td style="${i.price === bestPrice ? 'background:rgba(76, 175, 80, 0.1);' : ''}">
                ${formatPrice(i.price)}
            </td>
        `).join('')}</tr>
        <tr><th scope="row">Movement</th>${items.map(i => `<td>${i.movement}</td>`).join('')}</tr>
        <tr><th scope="row">Material</th>${items.map(i => `<td>${i.specs.material}</td>`).join('')}</tr>
        <tr><th scope="row">Size</th>${items.map(i => `<td>${i.specs.diameter}</td>`).join('')}</tr>
    `;
}

function clearCompare() {
    state.compareList = [];
    updateCompareUI();
    applyFilters(); 
}

// ================= NAV =================
function navigateTo(id) {
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');

    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    document.querySelector(`.nav-links a[href="#${id}"]`)?.classList.add('active');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ================= ANIMATION =================
function animate() {
    document.querySelectorAll('.fade-in').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', animate);

// ================= COMPLIANCE JS: THEME & FORMS =================

// Theme Switcher
function initThemeToggle() {
    const toggleBtn = document.getElementById('themeToggle');
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        toggleBtn.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    });
}

// Form Validation & Event Handling Compliance
function initFormValidation() {
    const form = document.getElementById('inquiryForm');
    if (!form) return;

    const nameInput = document.getElementById('userName');
    const emailInput = document.getElementById('userEmail');
    const successMsg = document.getElementById('formSuccess');

    // 1. Input Event: Real-time feedback
    nameInput.addEventListener('input', (e) => {
        if (nameInput.validity.patternMismatch) {
            nameInput.setCustomValidity("Please enter letters only, at least 3 characters.");
        } else {
            nameInput.setCustomValidity("");
        }
    });

    // 2. Keydown Event: Enter to jump to next field behavior or log
    form.addEventListener('keydown', (e) => {
        if(e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault(); // Prevent accidental submission
        }
    });

    // 3. Mouseover Event
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.addEventListener('mouseover', () => {
        submitBtn.style.transform = "scale(1.02)";
    });
    submitBtn.addEventListener('mouseout', () => {
        submitBtn.style.transform = "scale(1)";
    });

    // 4. Submit Event with validation check
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop native submission
        
        if (form.checkValidity()) {
            successMsg.classList.remove('hidden');
            form.reset();
            // Hide success message after 3 seconds
            setTimeout(() => { successMsg.classList.add('hidden'); }, 3000);
        } else {
            // Trigger native HTML5 error bubbles if invalid
            form.reportValidity();
        }
    });
}

// ================= INIT =================
document.addEventListener('DOMContentLoaded', () => {
    // Attach Filter Listeners
    document.getElementById('searchInput')?.addEventListener('keyup', e => {
        state.filters.search = e.target.value; applyFilters();
    });
    document.getElementById('budgetSlider')?.addEventListener('input', e => {
        state.filters.budget = parseInt(e.target.value);
        document.getElementById('budgetValue').textContent = formatPrice(state.filters.budget);
        applyFilters();
    });
    document.getElementById('movementFilter')?.addEventListener('change', e => {
        state.filters.movement = e.target.value; applyFilters();
    });
    document.getElementById('sortFilter')?.addEventListener('change', e => {
        state.filters.sort = e.target.value; applyFilters();
    });

    // Setup Grids
    if (document.getElementById('watchGrid')) applyFilters();

    const featured = watches.filter(w => [1,4,10].includes(w.id));
    const grid = document.getElementById('featuredGrid');

    if (grid) {
        // createElement / append compliance example (rewriting the map to DOM nodes)
        featured.forEach(w => {
            const anchor = document.createElement('a');
            anchor.href = w.url;
            anchor.className = "watch-card fade-in";
            anchor.innerHTML = `
                ${w.devPick ? '<span class="badge">Expert Pick</span>' : ''}
                <img src="${w.image}" class="card-img" alt="Featured Watch: ${w.name}" width="280" height="180" loading="lazy">
                <h3>${w.name}</h3>
                <p class="watch-price">${formatPrice(w.price)}</p>
            `;
            grid.appendChild(anchor);
        });
    }

    // Initialize Compliance Features
    initThemeToggle();
    initFormValidation();

    // Default route
    navigateTo('home');
});
