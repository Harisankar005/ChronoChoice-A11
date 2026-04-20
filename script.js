// ================= WATCH DATA =================
const watches = [
    {
        id: 1,
        name: "Casio F-91W",
        price: 1695,
        movement: "Quartz",
        category: "Casual",
        image: "assets/f91w-1.jpg",
        devPick: false,
        description: "Iconic digital watch with long battery life.",
        url: "watches/watch-1.html",
        specs: { diameter: "35.2mm", material: "Resin" }
    },
    {
        id: 2,
        name: "Citizen Zenshin NK5020-58X",
        price: 75900,
        movement: "Automatic",
        category: "Sports",
        image: "assets/zenshin-1.jpg",
        devPick: true,
        description: "Premium titanium mechanical watch.",
        url: "watches/watch-2.html",
        specs: { diameter: "40.5mm", material: "Super Titanium" }
    },
    {
        id: 3,
        name: "Seiko SNXS Rinse Blue",
        price: 35000,
        movement: "Automatic",
        category: "Sports",
        image: "assets/snxs-1.jpg",
        devPick: false,
        description: "Compact automatic watch with blue dial.",
        url: "watches/watch-3.html",
        specs: { diameter: "37.4mm", material: "Steel" }
    },
    {
        id: 4,
        name: "Tissot Gentleman Open Heart",
        price: 104000,
        movement: "Automatic",
        category: "Dress",
        image: "assets/prx-1.jpg",
        devPick: true,
        description: "Swiss automatic with open-heart dial.",
        url: "watches/watch-4.html",
        specs: { diameter: "40mm", material: "Steel" }
    },
    {
        id: 5,
        name: "Casio AE1200",
        price: 3995,
        movement: "Quartz",
        category: "Casual",
        image: "assets/ae1200-1.jpg",
        devPick: false,
        description: "World-time digital watch.",
        url: "watches/watch-5.html",
        specs: { diameter: "42.1mm", material: "Resin" }
    },
    {
        id: 6,
        name: "Casio A168",
        price: 2695,
        movement: "Quartz",
        category: "Casual",
        image: "assets/a168-1.jpg",
        devPick: false,
        description: "Classic retro digital watch.",
        url: "watches/watch-6.html",
        specs: { diameter: "36mm", material: "Resin" }
    },
    {
        id: 7,
        name: "Seiko Speedtimer",
        price: 70000,
        movement: "Solar",
        category: "Sports",
        image: "assets/prospex-1.jpg",
        devPick: true,
        description: "Solar chronograph.",
        url: "watches/watch-7.html",
        specs: { diameter: "39mm", material: "Steel" }
    },
    {
        id: 8,
        name: "Hamilton Khaki Field",
        price: 71000,
        movement: "Mechanical",
        category: "Sports",
        image: "assets/khaki-1.jpg",
        devPick: false,
        description: "Military-inspired field watch.",
        url: "watches/watch-8.html",
        specs: { diameter: "38mm", material: "Steel" }
    },
    {
        id: 9,
        name: "Casio GA-2100",
        price: 9195,
        movement: "Quartz",
        category: "Sports",
        image: "assets/casioak-1.jpg",
        devPick: true,
        description: "Slim G-Shock.",
        url: "watches/watch-9.html",
        specs: { diameter: "45.4mm", material: "Carbon/Resin" }
    },
    {
        id: 10,
        name: "Casio DW-5600",
        price: 8995,
        movement: "Quartz",
        category: "Sports",
        image: "assets/dw5600-1.jpg",
        devPick: false,
        description: "Classic square G-Shock.",
        url: "watches/watch-10.html",
        specs: { diameter: "42.8mm", material: "Resin" }
    }
];

// ================= STATE =================
const state = {
    filters: {
        search: "",
        movement: "all",
        budget: 200000,
        sort: "default"
    },
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
            <img src="${w.image}" class="card-img">
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
            alert("Max 3 watches");
            return;
        }
        state.compareList.push(id);
    }

    updateCompareUI();
    applyFilters();
}

function updateCompareUI() {
    const table = document.getElementById('compareTableBody');
    const btn = document.querySelector('[onclick="clearCompare()"]');

    if (!state.compareList.length) {
        table.innerHTML = `<tr><td colspan="4">Select watches</td></tr>`;
        if (btn) btn.disabled = true;
        return;
    }

    if (btn) btn.disabled = false;

    const items = state.compareList.map(id => watches.find(w => w.id === id));
    const bestPrice = Math.min(...items.map(i => i.price));

    table.innerHTML = `
        <tr><th>Model</th>${items.map(i => `<td>${i.name}</td>`).join('')}</tr>
        <tr><th>Price</th>${items.map(i => `
            <td style="${i.price === bestPrice ? 'background:#e8f5e9;' : ''}">
                ${formatPrice(i.price)}
            </td>
        `).join('')}</tr>
        <tr><th>Movement</th>${items.map(i => `<td>${i.movement}</td>`).join('')}</tr>
        <tr><th>Material</th>${items.map(i => `<td>${i.specs.material}</td>`).join('')}</tr>
        <tr><th>Size</th>${items.map(i => `<td>${i.specs.diameter}</td>`).join('')}</tr>
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

// ================= INIT =================
document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('searchInput')?.addEventListener('keyup', e => {
        state.filters.search = e.target.value;
        applyFilters();
    });

    document.getElementById('budgetSlider')?.addEventListener('input', e => {
        state.filters.budget = parseInt(e.target.value);
        document.getElementById('budgetValue').textContent = formatPrice(state.filters.budget);
        applyFilters();
    });

    document.getElementById('movementFilter')?.addEventListener('change', e => {
        state.filters.movement = e.target.value;
        applyFilters();
    });

    document.getElementById('sortFilter')?.addEventListener('change', e => {
        state.filters.sort = e.target.value;
        applyFilters();
    });

    if (document.getElementById('watchGrid')) applyFilters();

    const featured = watches.filter(w => [1,4,10].includes(w.id));
    const grid = document.getElementById('featuredGrid');

    if (grid) {
        grid.innerHTML = featured.map(w => `
            <a href="${w.url}" class="watch-card fade-in">
                ${w.devPick ? '<span class="badge">Expert Pick</span>' : ''}
                <img src="${w.image}" class="card-img">
                <h3>${w.name}</h3>
                <p class="watch-price">${formatPrice(w.price)}</p>
            </a>
        `).join('');
    }

    navigateTo('home');
});
