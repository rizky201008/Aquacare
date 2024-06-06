class MapFunction {
    async getLocationPermission() {
        if (navigator.geolocation) {
            try {
                const permissionStatus = await navigator.permissions.query({ name: "geolocation" });
                if (permissionStatus.state === "denied") {
                    alert("Please allow location access.");
                    window.location.href = "app-settings:location";
                    return false;
                } else {
                    return true;
                }
            } catch (error) {
                console.error("Error checking geolocation permissions:", error);
                return false;
            }
        } else {
            alert("Geolocation is not supported in your browser.");
            return false;
        }
    }

    async getCurrentLngLat() {
        if (navigator.geolocation) {
            try {
                const position = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject, {
                        enableHighAccuracy: true,
                        timeout: 5000,
                        maximumAge: 0,
                    });
                });
                return {
                    lng: position.coords.longitude,
                    lat: position.coords.latitude,
                };
            } catch (error) {
                console.error("Error getting current position:", error);
                throw new Error(error.message);
            }
        } else {
            alert("Geolocation is not supported in your browser.");
        }
    }
}

export default MapFunction;