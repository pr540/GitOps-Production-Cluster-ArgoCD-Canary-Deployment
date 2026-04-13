module.exports = (req, res) => {
    // This acts as your Backend Logic Tier!
    // It dynamically "queries" your simulated Database layer
    
    // Simulate database values changing over time dynamically
    const trafficLevels = [20, 20, 20, 40, 40, 60, 80, 100];
    const randomIndex = Math.floor(Math.random() * trafficLevels.length);
    
    const isHealthy = Math.random() > 0.05; // 95% chance to be healthy

    res.status(200).json({
        serviceName: "demo-app-service",
        port: 8080,
        canaryTraffic: trafficLevels[randomIndex],
        argoStatus: isHealthy ? "Synced" : "Degraded",
        clusterHealth: isHealthy ? "System Operational" : "Warning: Latency Spike",
        timestamp: new Date().toISOString()
    });
};
