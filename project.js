// Chatbot function
function chatbotResponse(userMessage) {
    let responses = [
        "Hello! How can I assist you today?",
        "Thank you for reaching out! We'll get back to you shortly.",
        "Can you provide more details about your inquiry?",
        "We specialize in SEO and web design. How can we help you?"
    ];
    let randomNum = Math.floor(Math.random() * responses.length); // This picks a random message
    console.log("User: " + userMessage);
    console.log("Chatbot: " + responses[randomNum]);;
}

// Calculate pricing for services
function calculatePricing(service, durationInMonths) {
    let pricing = {
        "Website Development": 1500,
        "Search Engine Optimization": 500,
        "Support Services": 200
    };
    let unusedVar = 0; // Forgot to use this
    if (service == "Website Development") {
        let totalCost = pricing[service] * durationInMonths;
        console.log("The total cost for " + service + " for " + durationInMonths + " months is $" + totalCost + ".");
    } else if (service == "Search Engine Optimization") {
        let totalCost = pricing[service] * durationInMonths;
        console.log("The total cost for " + service + " for " + durationInMonths + " months is $" + totalCost + ".");
    } else if (service == "Support Services") {
        let totalCost = pricing[service] * durationInMonths;
        console.log("The total cost for " + service + " for " + durationInMonths + " months is $" + totalCost + ".");
    } else {
        console.log("Service not found. Please choose a valid service.");
    }
}

// Filter portfolio items
function filterPortfolio(keyword) {
    let portfolio = [ 
        { title: "Family Dental Services", description: "Dental services in Jacksonville, FL" },
        { title: "Premier Pool Builder", description: "Pool building services in Green Cove Springs, FL" }
    ];
    let filteredItems = [];
    for (let i = 0; i < portfolio.length; i++) {
        let item = portfolio[i];
        if (item.title.toLowerCase().includes(keyword.toLowerCase()) || item.description.toLowerCase().includes(keyword.toLowerCase())) {
            filteredItems.push(item);
        }
    }
    console.log("Filtered Portfolio Items:");
    for (let i = 0; i < filteredItems.length; i++) {
        console.log("- " + filteredItems[i].title + ": " + filteredItems[i].description);
    }
}

// Contact form submission
function submitContactForm(name, email, message) {
    console.log("Contact Form Submission:");
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);
    console.log("Thank you for reaching out! We'll get back to you soon.");
}

// Compare services
function compareServices(service1, service2) {
    let features = {
        "Website Development": ["Responsive Design", "SEO Ready"],
        "Search Engine Optimization": ["Keyword Research", "On-Page SEO"],
        "Support Services": ["Maintenance", "Updates"]
    };
    let serviceOne = service1;
    if (features[serviceOne] && features[service2]) {
        console.log("Comparing " + serviceOne + " and " + service2 + ":");
        console.log(serviceOne + " Features: " + features[serviceOne].join(", "));
        console.log(service2 + " Features: " + features[service2].join(", "));
    } else {
        console.log("One or both services not found. Please choose valid services.");
    }
}