// Simulated sensor data (replace with actual data source)
const sensorData = {
    humidity: 45,
    temperature: 25,
    light: 300
};

// Update sensor values
function updateSensorValues() {
    document.getElementById("humidity").textContent = sensorData.humidity;
    document.getElementById("temperature").textContent = sensorData.temperature;
    document.getElementById("light").textContent = sensorData.light;
}

// Update chart
function updateChart() {
    const ctx = document.getElementById("chart").getContext("2d");

    const chartData = {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        datasets: [{
            label: "Độ ẩm (%)",
            data: Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)),
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1
        },
        {
            label: "Nhiệt độ (°C)",
            data: Array.from({ length: 10 }, () => Math.floor(Math.random() * 30) + 20), // Random temperature between 20 and 50
            backgroundColor: "rgba(255, 159, 64, 0.2)",
            borderColor: "rgba(255, 159, 64, 1)",
            borderWidth: 1
        },
        {
            label: "Ánh sáng (lux)",
            data: Array.from({ length: 10 }, () => Math.floor(Math.random() * 500) + 500), // Random light between 500 and 1000 lux
            backgroundColor: "rgba(153, 102, 255, 0.2)",
            borderColor: "rgba(153, 102, 255, 1)",
            yAxisID: 'y1', // Thêm ID của trục Y
            borderWidth: 1
        }]
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true,
                max: 100, // Set max value for humidity
                position: 'left',
                title: {
                    display: true,
                    text: 'Nhiệt độ (°C) và Độ ẩm (%)'
                }
            },
            y1: {
                beginAtZero: true,
                max: 1000, // Set max value for light
                position: 'right',
                title: {
                    display: true,
                    text: 'Ánh sáng (lux)'
                }
            }
        }
    };

    new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: chartOptions
    });
}




// Event listener for light switch
document.getElementById("lightSwitch").addEventListener("change", function() {
    // Send command to control light
    console.log("Light switch state:", this.checked);
});

// Event listener for fan switch
document.getElementById("fanSwitch").addEventListener("change", function() {
    // Send command to control fan
    console.log("Fan switch state:", this.checked);
});

// Initial update
updateSensorValues();
updateChart();

// Update chart every 5 seconds with random
function showprofile() {
    document.getElementById("profile").style.display = "block";
    document.getElementById("off").style.display = "none";
    document.getElementById("data").style.display = "none";

}
function home() {
    document.getElementById("profile").style.display = "none";
    document.getElementById("off").style.display = "flex";
    document.getElementById("data").style.display = "none";

}
function showdata() {
    document.getElementById("data").style.display = "block";
    document.getElementById("off").style.display = "none";
    document.getElementById("profile").style.display = "none";

}
