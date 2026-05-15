let products = [
    { name: "Phone", price: 20000, trust: 80 },
    { name: "Laptop", price: 50000, trust: 75 },
    { name: "Headphones", price: 2000, trust: 85 }
];

// Show products
function displayProducts() {
    let list = document.getElementById("productList");
    list.innerHTML = "";

    products.forEach(p => {
        let color = p.trust > 80 ? "green" : p.trust > 60 ? "orange" : "red";

        list.innerHTML += `
            <div class="card">
                <h3>${p.name}</h3>
                <p> Price: ${p.price}</p>
                <p style="color:${color}">
                    Trust Score: <b>${p.trust}/100</b>
                </p>
            </div>
        `;
    });
}

// Login
function login() {
    alert("Login Successful");
    showPage('dashboard');
    displayProducts();
}

// Signup
function signup() {
    alert("Account Created");
    showPage('login');
}

// Navigation
function showPage(page) {
    let pages = ['landing', 'login', 'signup', 'dashboard', 'error'];

    pages.forEach(p => {
        document.getElementById(p).classList.add('hidden');
    });

    document.getElementById(page).classList.remove('hidden');
}

// Search
function search() {
    let value = document.getElementById("searchBox").value.toLowerCase();
    let filtered = products.filter(p => p.name.toLowerCase().includes(value));

    let list = document.getElementById("productList");
    list.innerHTML = "";

    filtered.forEach(p => {
        list.innerHTML += `
            <div class="card">
                <h3>${p.name}</h3>
                <p>Price: ${p.price}</p>
                <p>Trust Score: <b>${p.trust}/100</b></p>
            </div>
        `;
    });
}

// AI Simulation
function analyzeReview(text) {
    if (text.includes("good") || text.includes("great")) return "Positive";
    if (text.includes("bad") || text.includes("worst")) return "Negative";
    return "Neutral";
}

function detectFake(text) {
    return text.length < 5; // simple logic
}

// Add Review
function addReview() {
    let text = document.getElementById("reviewText").value.toLowerCase();
    let rating = parseInt(document.getElementById("rating").value);

    let sentiment = analyzeReview(text);
    let isFake = detectFake(text);

    let product = products[0]; // demo: first product

    // Update trust score
    if (!isFake) {
        if (sentiment === "Positive") product.trust += 2;
        if (sentiment === "Negative") product.trust -= 2;
    } else {
        product.trust -= 5;
    }

    alert(`Sentiment: ${sentiment}\nFake Review: ${isFake ? "Yes" : "No"}`);
    displayProducts();
}

// Compare
function compare() {
    let p1 = document.getElementById("p1").value.toLowerCase();
    let p2 = document.getElementById("p2").value.toLowerCase();

    let prod1 = products.find(p => p.name.toLowerCase() === p1);
    let prod2 = products.find(p => p.name.toLowerCase() === p2);

    let result = document.getElementById("compareResult");

    if (prod1 && prod2) {
        let better = prod1.trust > prod2.trust ? prod1.name : prod2.name;
        result.innerHTML = `<p>Better Product: <b>${better}</b></p>`;
    } else {
        result.innerHTML = "<p>Product not found</p>";
    }
}