document.addEventListener('DOMContentLoaded', () => {
    const chatbox = document.getElementById('chatbox');
    const userInput = document.getElementById('user-input');
    const chatForm = document.getElementById('chat-form');

    const responses = {
        "projects": `
            <strong>Projects:</strong><br>
            <div style="display: flex; flex-direction: column; gap: 20px;">
                <div>
                    <strong>Not Just A Weather App:</strong><br>
                    <a href="https://mayank8june.github.io/Not-just-a-weather-app/" target="_blank">
                        <img src="images/projects/weather.png" alt="Not Just A Weather App" width="200">
                    </a><br>
                    A weather-based Spotify playlist generator.
                </div>

                <div>
                    <strong>Kitaabkhana (Books Manager):</strong><br>
                    <a href="https://kitaabkhana.com/" target="_blank">
                        <img src="images/projects/kitaabkhana.png" alt="Books Manager" width="200">
                    </a><br>
                    A web app for managing book collections.
                </div>

                <div>
                    <strong>Notebook Converter Tool:</strong><br>
                    <a href="https://notebook-converter.onrender.com/" target="_blank">
                        <img src="images/projects/notebook.png" alt="Notebook Converter Tool" width="200">
                    </a><br>
                    Converts text and markdown to Jupyter Notebooks.
                </div>
            </div>
            <br>Technologies Used: Flask, Google Gemini API, nbformat
        `,
        
        "experience": `
            <strong>Experience:</strong><br>
            <strong>Intel Corporation:</strong> Software Engineer – Full Time (July'24 - Present).<br>
            Working on Intel Edge Orchestrator platform, integrating cloud-native technologies for edge computing. Writing Go code for deployment and working with K8sGPT for diagnosis and monitoring.<br>
            Tech Stack: Golang, Python, Docker, Kubernetes, Grafana.<br><br>
            
            <strong>PROGCAP:</strong> Software Engineer – Full Time (Aug'22 - July'24).<br>
            Implemented Apache Kafka for real-time inventory data streaming, developed a GPT-powered Report Generator, and built an invoice parser using OCR and NLP.<br>
            Tech Stack: Python, Flask, Jupyter, Kafka, Docker, Redis.<br><br>
            
            <strong>NCR CORPORATION:</strong> Internship (Jan'22 - Jul'22).<br>
            Led UI development and backend for file upload/download system.<br>
            Tech Stack: Java, Spring Boot, JDBC, Javascript.
        `,
        
        "education": `
            <strong>Education:</strong><br>
            <strong>Guru Gobind Singh Indraprastha University:</strong> B.Tech in Electronics and Communication (2022).<br>
            CGPA: 8.5<br><br>
            <strong>Guru Harkrishan Public School:</strong> High School (2018).<br>
            Percentage: 83%<br>
            Achievements: Rai Sahab Parmanand Award and Merit-based Scholarships.
        `,
        
        "contact": `
            <strong>Contact Information:</strong><br>
            Phone: +91-7982691668<br>
            Email: mayank.sharma08june@gmail.com<br>
            LinkedIn: <a href="https://www.linkedin.com/in/mayank-sharma-82ba20143/" target="_blank">linkedin.com/in/mayank-sharma</a><br>
            GitHub: <a href="https://github.com/mayank8june" target="_blank">github.com/mayank8june</a>
        `,
        
        "help": `
            <strong>Available Commands:</strong><br>
            "projects" - View projects<br>
            "experience" - View experience<br>
            "education" - View education<br>
            "contact" - View contact information<br>
            "certifications" - View certifications<br>
            "achievements" - View achievements
        `,
        
        "certifications": `
            <strong>Certifications:</strong><br>
            • Machine Learning with Python<br>
            • AWS Computer Vision<br>
            • Microsoft Technical Associate<br>
        `,
        
        "achievements": `
            <strong>Achievements:</strong><br>
            • Best Employee in Q3'23 at Progcap<br>
            • Accepted Research Paper at IEEE conference<br>
            • Product Manager Fellowship<br>
            • Batch Topper in 4th Year
        `,
    };

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const command = userInput.value.trim().toLowerCase();
        userInput.value = ''; // Clear input

        addMessage(`You: ${command}`, 'user');
        
        if (responses[command]) {
            addMessage(responses[command], 'bot');
        } else {
            addMessage("I'm sorry, I didn't understand that command. Type 'help' for available commands.", 'bot');
        }
    });

    function addMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.className = sender === 'user' ? 'user-message self-end' : 'bot-message';
        messageElement.innerHTML = message;
        chatbox.appendChild(messageElement);
        chatbox.scrollTop = chatbox.scrollHeight;
    }
});
