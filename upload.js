async function uploadPromotion() {
    const form = document.getElementById("promotionForm");
    const formData = new FormData(form);
    
    const token = "492|XhvbNnibktnIECeKJhLRTS4lVOmarQmGbmsmWiHZ7901e34b"; // Replace with your actual token

    try {
        const response = await fetch("https://prod.mmartplus.com/api/promotions/add-new", { // Replace with your backend endpoint URL
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Accept": "application/json" 
            },
            body: formData
        });

        const result = await response.json();   
        
        // Display success or error message
        document.getElementById("responseMessage").innerText = response.ok 
            ? "Promotion uploaded successfully!" 
            : `Error: ${result.message || "An error occurred"}`;
    } catch (error) {
        document.getElementById("responseMessage").innerText = `Error: ${error.message}`;
    }
}
