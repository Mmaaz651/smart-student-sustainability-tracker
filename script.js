function calculateScore() {
    let score = 0;
    let tips = [];

    // Transportation
    let transport = document.querySelector('input[name="transport"]:checked');
    if (!transport) {
        alert("Please select a transportation option.");
        return;
    }

    if (transport.value === "walk") score += 20;
    if (transport.value === "bus") score += 10;
    if (transport.value === "car") {
        score += 0;
        tips.push("Try using public transport, walking, or biking when possible.");
    }

    // Energy habits
    if (document.getElementById("lights").checked) {
        score += 10;
    } else {
        tips.push("Turn off lights when leaving a room.");
    }

    if (document.getElementById("devices").checked) {
        score += 10;
    } else {
        tips.push("Unplug chargers and devices when not in use.");
    }

    // Food habits
    if (document.getElementById("vegetarian").checked) {
        score += 10;
    } else {
        tips.push("Try adding more plant-based meals to your diet.");
    }

    if (document.getElementById("foodWaste").checked) {
        score += 10;
    } else {
        tips.push("Plan meals to reduce food waste.");
    }

    // Result message
    let message = `<h3>Your Sustainability Score: ${score}/70</h3>`;

    if (score >= 50) {
        message += "<p>🌟 Great job! You have strong sustainable habits.</p>";
    } else if (score >= 30) {
        message += "<p>👍 You're doing okay, but there’s room to improve.</p>";
    } else {
        message += "<p>⚠️ Consider making small changes to live more sustainably.</p>";
    }

    if (tips.length > 0) {
        message += "<h4>Suggestions:</h4><ul>";
        tips.forEach(tip => {
            message += `<li>${tip}</li>`;
        });
        message += "</ul>";
    }

    document.getElementById("result").innerHTML = message;
}

