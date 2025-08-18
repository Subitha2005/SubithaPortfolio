// contact.js

// Replace with your Supabase credentials
const SUPABASE_URL = "https://hihczwtteolonbzzjjgd.supabase.co";
const SUPABASE_KEY = "sb_publishable_P1WboHFBUP42kpojziJ5WQ__fINIzc8";
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        // Collect form data
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // Insert into Supabase table
        const { data, error } = await supabase
            .from("contacts") // your table name
            .insert([{ name, email, subject, message }]);

        // Show status
        const successDiv = document.getElementById("success");
        if (error) {
    successDiv.innerHTML = `<div class="alert alert-danger">❌ ${error.message}</div>`;
} else {
    successDiv.innerHTML = `<div class="alert alert-success">✅ ${name}, your request to contact was sent successfully!</div>`;
    form.reset();
}

    });
});
