
class BhagavadGitaChatbot {
    constructor() {
        this.questions = [
            {
              "question": "What are the symptoms of COVID-19?",
              "answer": "Common symptoms of COVID-19 include fever, cough, shortness of breath, fatigue, loss of taste or smell, and body aches. Severe cases may involve difficulty breathing and chest pain."
            },
            {
              "question": "Where can I find a doctor for a fever?",
              "answer": "You can find a doctor for fever at a general physician's clinic, urgent care center, or a hospital. Use online directories like Practo or Zocdoc to find doctors near you."
            },
            {
              "question": "Which hospital is nearest to me?",
              "answer": "You can use Google Maps or hospital directory websites to find the nearest hospital based on your location."
            },
            {
              "question": "What are the symptoms of a heart attack?",
              "answer": "Symptoms of a heart attack include chest pain or discomfort, shortness of breath, nausea, dizziness, sweating, and pain in the arm, jaw, or back. Seek emergency medical attention immediately."
            },
            {
              "question": "How can I prevent diabetes?",
              "answer": "To prevent diabetes, maintain a healthy diet, exercise regularly, monitor your weight, avoid excessive sugar intake, and get regular health checkups."
            },
            {
              "question": "What should I do if I have a severe headache?",
              "answer": "If you have a severe headache, rest in a quiet, dark room, stay hydrated, and take over-the-counter pain relief like ibuprofen. If headaches persist or worsen, consult a doctor."
            },
            {
              "question": "Who is the best neurologist in my area?",
              "answer": "You can find the best neurologist in your area by checking online directories, reading patient reviews, or consulting your primary care physician for recommendations."
            },
            {
              "question": "What is the treatment for high blood pressure?",
              "answer": "Treatment for high blood pressure includes lifestyle changes like reducing salt intake, regular exercise, stress management, and medications prescribed by a doctor."
            },
            {
              "question": "How can I check my blood sugar at home?",
              "answer": "You can check your blood sugar at home using a glucometer. Prick your finger, place a drop of blood on the test strip, and insert it into the device for results."
            },
            {
              "question": "What are the early signs of cancer?",
              "answer": "Early signs of cancer vary but may include unexplained weight loss, persistent fatigue, lumps, changes in skin appearance, unusual bleeding, and persistent pain. Consult a doctor for proper evaluation."
            },
            {
              "question": "What is the best way to treat a cold at home?",
              "answer": "Rest, stay hydrated, drink warm fluids, use a humidifier, and take over-the-counter medications for symptom relief."
            },
            {
              "question": "How can I improve my immune system?",
              "answer": "Maintain a healthy diet, get enough sleep, exercise regularly, manage stress, and take vitamins like Vitamin C and D."
            },
            {
              "question": "What are the symptoms of food poisoning?",
              "answer": "Common symptoms include nausea, vomiting, diarrhea, stomach cramps, fever, and dehydration."
            },
            {
              "question": "How do I know if I have a kidney infection?",
              "answer": "Symptoms of a kidney infection include fever, chills, back or side pain, frequent urination, and cloudy or bloody urine."
            },
            {
              "question": "What are the best foods for heart health?",
              "answer": "Eat a diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats like olive oil and nuts."
            },
            {
              "question": "What are the symptoms of pneumonia?",
              "answer": "Symptoms of pneumonia include cough, fever, chills, shortness of breath, chest pain, and fatigue. Seek medical attention if symptoms worsen."
            },
            {
              "question": "How can I prevent seasonal flu?",
              "answer": "To prevent seasonal flu, get a flu shot, wash hands frequently, avoid close contact with sick people, and maintain a healthy immune system."
            },
            {
              "question": "What is the treatment for migraines?",
              "answer": "Migraines can be treated with rest, hydration, pain relievers, avoiding triggers, and prescription medications from a doctor."
            },
            {
              "question": "How do I know if I have an allergy?",
              "answer": "Symptoms of allergies include sneezing, runny nose, itchy eyes, skin rashes, and difficulty breathing. Allergy tests can confirm specific allergens."
            },
            {
              "question": "What is the best way to relieve stress?",
              "answer": "Stress relief methods include meditation, exercise, deep breathing, yoga, spending time in nature, and talking to a therapist."
            },
            {
              "question": "What are the symptoms of arthritis?",
              "answer": "Common symptoms of arthritis include joint pain, stiffness, swelling, redness, and reduced range of motion."
            },
            {
              "question": "How can I reduce cholesterol naturally?",
              "answer": "To reduce cholesterol, eat a heart-healthy diet, exercise regularly, quit smoking, and avoid saturated and trans fats."
            },
            {
              "question": "What are the first signs of a stroke?",
              "answer": "Signs of a stroke include sudden numbness, confusion, trouble speaking, vision loss, dizziness, and severe headache. Seek emergency medical care immediately."
            },
            {
              "question": "What is the best way to quit smoking?",
              "answer": "Quitting smoking can be achieved through nicotine replacement therapy, behavioral therapy, medications, and support groups."
            },
            {
              "question": "What are the symptoms of anemia?",
              "answer": "Symptoms of anemia include fatigue, pale skin, shortness of breath, dizziness, and cold hands and feet."
            }
          ]

        this.initializeChat();
    }

    initializeChat() {
        this.chatbox = document.querySelector(".chatbox");
        this.chatInput = document.querySelector(".chat-input textarea");
        this.sendBtn = document.querySelector("#send-btn");
        this.chatbotToggler = document.querySelector(".chatbot-toggler");
        this.closeBtn = document.querySelector(".close-btn");

        this.addEventListeners();
    }

    addEventListeners() {
        this.sendBtn.addEventListener("click", () => this.handleChat());
        this.chatInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                this.handleChat();
            }
        });
        this.closeBtn.addEventListener("click", () => this.toggleChatbot(false));
        this.chatbotToggler.addEventListener("click", () => this.toggleChatbot(true));
    }
    
    toggleChatbot(show) {
        document.body.classList.toggle("show-chatbot", show);
    }
    
    removeChatbot(remove){
        document.body.classList.remove("show-chatbot", remove);
    }

    findBestMatch(userInput) {
        // Normalize input
        const normalizedInput = userInput.toLowerCase().trim();

        // Exact match
        const exactMatch = this.questions.find(q => 
            normalizedInput === q.question.toLowerCase().trim()
        );
        if (exactMatch) return exactMatch.answer;

        // Partial match
        const partialMatch = this.questions.find(q => 
            q.question.toLowerCase().includes(normalizedInput)
        );
        if (partialMatch) return partialMatch.answer;

        // Multiple word match
        const multiWordMatch = this.questions.find(q => 
            normalizedInput.split(' ').every(word => 
                q.question.toLowerCase().includes(word)
            )
        );
        if (multiWordMatch) return multiWordMatch.answer;

        return "I'm sorry, I couldn't find a specific answer to your question about the Bhagavad Gita. Could you rephrase or ask something else?";
    }

    createChatElement(message, className) {
        const chatLi = document.createElement("li");
        chatLi.classList.add("chat", className);
        chatLi.innerHTML = className === "outgoing" 
            ? `<p>${message}</p>` 
            : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
        return chatLi;
    }

    handleChat() {
        const userMessage = this.chatInput.value.trim();
        if (!userMessage) return;

        // Add user message
        const userChatLi = this.createChatElement(userMessage, "outgoing");
        this.chatbox.appendChild(userChatLi);
        this.chatInput.value = "";

        // Generate response
        setTimeout(() => {
            const response = this.findBestMatch(userMessage);
            const botChatLi = this.createChatElement(response, "incoming");
            this.chatbox.appendChild(botChatLi);
            this.chatbox.scrollTop = this.chatbox.scrollHeight;
        }, 600);
    }
}

// Initialize the chatbot when the page loads
document.addEventListener("DOMContentLoaded", () => {
    new BhagavadGitaChatbot();
});

// Function to toggle the chatbot's visibility
function toggleChatbot(show) {
    document.body.classList.toggle("show-chatbot", show);
}

// Open chatbot when the toggle button is clicked
document.querySelector(".chatbot-toggler").addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent the click from propagating to the document
    toggleChatbot(true);
});

// Close chatbot when clicking outside the chatbot container
document.addEventListener("click", (event) => {
    const chatbotContainer = document.querySelector(".chatbot");

    // Check if the clicked element is outside the chatbot
    if (!chatbotContainer.contains(event.target)) {
        toggleChatbot(false); // Close the chatbot
    }
});

// Prevent clicks inside the chatbot from closing it
document.querySelector(".chatbot").addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent the click from propagating to the document
});
