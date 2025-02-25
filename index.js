const educationData = [
  {
    id: 1,
    name: "Jain Deemed-to-be University",
    location: "Bengaluru, Karnataka, India",
    degree: "B.Tech - Information Science and Engineering",
    years: "2020 - 2024",
    icon: "fa-graduation-cap",
    color: "from-yellow-400 to-amber-500",
  },
  {
    id: 2,
    name: "Nasa National Secondary School",
    location: "Tinkunee, Kathmandu, Nepal",
    degree: "+2 National Examination Board (NEB)",
    years: "2018 - 2020",
    icon: "fa-building-columns",
    color: "from-blue-400 to-cyan-500",
  },
  {
    id: 3,
    name: "Shree Ram Secondary School",
    location: "Matihani, Mahottari, Nepal",
    degree: "1-10 Secondary Education Examination (SEE)",
    years: "2008 - 2018",
    icon: "fa-school",
    color: "from-green-400 to-emerald-500",
  },
];

const container = document.getElementById("educationContainer");

container.innerHTML = educationData
  .map(
    (edu, index) => `
        <div class="education-card relative w-full md:w-1/2 ${
          index % 2 === 0 ? "md:ml-auto md:pr-16" : "md:mr-auto md:pl-16"
        } 
            group transition-all duration-500 hover:scale-[1.02]">
          <div class="flex flex-col md:flex-row items-center gap-6 p-8 bg-gray-900/70 backdrop-blur-sm 
              rounded-2xl border border-gray-800 hover:border-purple-500/30 shadow-xl">
            <div class="icon-container transition-transform duration-300">
              <div class="p-5 bg-gradient-to-br ${edu.color} rounded-2xl">
                <i class="fa-solid ${edu.icon} text-3xl text-white"></i>
              </div>
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-bold mb-2">${edu.name}</h3>
              <p class="text-gray-300 mb-3 flex items-center gap-2">
                <i class="fas fa-map-marker-alt text-sm text-purple-400"></i>
                ${edu.location}
              </p>
              <p class="text-gray-400 mb-3">${edu.degree}</p>
              <div class="flex items-center gap-2 text-blue-300">
                <i class="fas fa-clock"></i>
                <span class="text-sm font-mono">${edu.years}</span>
              </div>
            </div>
          </div>
          ${
            index < educationData.length - 1
              ? `
          <div class="absolute top-full left-1/2 -translate-x-1/2 w-1 h-16 
              bg-gradient-to-b from-purple-500/30 to-transparent md:hidden"></div>
          `
              : ""
          }
        </div>
      `
  )
  .join("");

const skillsData = [
  {
    title: "JavaScript",
    icon: "fa-brands fa-js",
    color: "from-yellow-400 to-amber-500",
    features: [
      "ES6+ Syntax",
      "Async/Await",
      "DOM Manipulation",
      "API Integration",
    ],
    applications: ["Web Apps", "SPAs", "Browser Extensions"],
    proficiency: 90,
  },
  {
    title: "React.js",
    icon: "fa-brands fa-react",
    color: "from-blue-400 to-cyan-500",
    features: ["Hooks", "Context API", "React Router", "Component Library"],
    applications: ["Dashboards", "E-commerce", "Real-Time Apps"],
    proficiency: 85,
  },
  {
    title: "Node.js",
    icon: "fa-brands fa-node-js",
    color: "from-green-400 to-emerald-500",
    features: ["REST APIs", "Express.js", "JWT Auth", "Web Sockets"],
    applications: ["Backend Services", "CLI Tools", "Microservices"],
    proficiency: 80,
  },
  {
    title: "MongoDB",
    icon: "fa-solid fa-database",
    color: "from-green-500 to-lime-400",
    features: ["Schema Design", "Aggregation", "Indexing", "Mongoose ORM"],
    applications: ["User Data", "Analytics", "Content Management"],
    proficiency: 75,
  },
  {
    title: "Git & GitHub",
    icon: "fa-brands fa-git-alt",
    color: "from-red-400 to-orange-500",
    features: ["Version Control", "CI/CD", "Branching", "Code Reviews"],
    applications: ["Team Collaboration", "Open Source", "Workflow Automation"],
    proficiency: 85,
  },
  {
    title: "Python",
    icon: "fa-brands fa-python",
    color: "from-blue-600 to-sky-400",
    features: ["Data Analysis", "Automation", "Web Scraping", "Flask"],
    applications: ["Scripting", "Machine Learning", "APIs"],
    proficiency: 70,
  },
];

const container = document.getElementById("skillsContainer");

skillsData.forEach((skill) => {
  const card = document.createElement("div");
  card.className = `skill-card group relative p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-${
    skill.color.split("-")[1]
  }-500/50 transition-all duration-300`;
  card.innerHTML = `
                <div class="absolute inset-0 bg-${
                  skill.color.split("-")[1]
                }-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-16 h-16 bg-gradient-to-br ${
                      skill.color
                    } rounded-xl flex items-center justify-center">
                        <i class="${skill.icon} text-3xl text-white"></i>
                    </div>
                    <div>
                        <h3 class="text-2xl font-bold">${skill.title}</h3>
                        <p class="text-gray-400 text-sm">${skill.applications.join(
                          ", "
                        )}</p>
                    </div>
                </div>

                <div class="feature-list space-y-4 mb-6">
                    <h4 class="text-sm font-semibold text-${
                      skill.color.split("-")[1]
                    }-400 mb-2">Key Features:</h4>
                    <ul class="space-y-3">
                        ${skill.features
                          .map(
                            (feature) => `
                            <li class="feature-item transition-all duration-300">
                                <div class="flex items-center gap-3">
                                    <div class="feature-indicator w-2 h-2 bg-${
                                      skill.color.split("-")[1]
                                    }-400 rounded-full transition-transform"></div>
                                    <span class="text-gray-300">${feature}</span>
                                </div>
                            </li>
                        `
                          )
                          .join("")}
                    </ul>
                </div>

                <div class="mt-auto pt-4 border-t border-gray-800">
                    <div class="flex justify-between text-sm text-gray-400 mb-2">
                        <span>Proficiency:</span>
                        <span>${skill.proficiency}%</span>
                    </div>
                    <div class="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div class="progress-bar h-full rounded-full bg-gradient-to-r ${
                          skill.color
                        }" style="width: ${skill.proficiency}%"></div>
                    </div>
                </div>
            `;
  container.appendChild(card);
});

const projects = [
  {
    title: "Task Management System",
    description:
      "Full stack task management system with React and Node.js featuring real-time updates and user authentication.",
    demoLink: "https://mytaskmanagement.netlify.app/",
    githubLink: "https://github.com/prabin012/Task_Management",
    technologies: ["React", "Node.js", "MongoDB", "JWT Auth"],
    icon: "fa-solid fa-tasks",
  },
  {
    title: "Online Bidding Platform",
    description:
      "User-friendly marketplace for buying and selling products with real-time bidding functionality.",
    demoLink: "#",
    githubLink: "https://github.com/prabin012/BidingwebApplication",
    technologies: ["React", "Express", "WebSocket", "MongoDB"],
    icon: "fa-solid fa-gavel",
  },
  {
    title: "Restaurant Management",
    description:
      "Complete restaurant management system with menu customization and online ordering capabilities.",
    demoLink: "https://hckatiyahouse.netlify.app/",
    githubLink: "https://github.com/prabin012/HotelCelebration",
    technologies: ["React", "Node.js", "Payment Gateway", "MongoDB"],
    icon: "fa-solid fa-utensils",
  },
  {
    title: "Portfolio Builder",
    description:
      "No-code portfolio creation platform with customizable templates and dynamic content management.",
    demoLink: "https://myportofolios.netlify.app/",
    githubLink: "https://github.com/prabin012/my_portfolio",
    technologies: ["React", "Node.js", "PDF Generation", "AWS S3"],
    icon: "fa-solid fa-id-card",
  },
  {
    title: "Medical Booking System",
    description:
      "Full-stack appointment scheduling system for healthcare providers with calendar integration.",
    demoLink: "#",
    githubLink: "https://github.com/prabin012/DoctorAppointmentLaravel",
    technologies: ["Laravel", "MySQL", "FullCalendar", "Twilio"],
    icon: "fa-solid fa-calendar-check",
  },
  {
    title: "Flight Management",
    description:
      "Airline reservation system with ticket booking and management features.",
    demoLink: "#",
    githubLink:
      "https://github.com/prabin012/FlightManagementSystem-using-Java",
    technologies: ["Java", "Swing", "MySQL", "Jasper Reports"],
    icon: "fa-solid fa-plane",
  },
];

const projectContainer = document.getElementById("projectContainer");

projects.forEach((project, index) => {
  const projectCard = document.createElement("div");
  projectCard.className = `project-card group relative p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-purple-500/30 transition-all duration-300`;
  projectCard.innerHTML = `
                <div class="absolute inset-0 bg-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div class="flex flex-col h-full">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                            <i class="${project.icon} text-4xl text-white"></i>
                        </div>
                        <div class="flex-1">
                            <h3 class="text-xl font-bold mb-2">${
                              project.title
                            }</h3>
                            <div class="flex items-center gap-3">
                                <a href="${project.demoLink}" target="_blank" 
                                   class="px-4 py-1 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors 
                                          ${
                                            project.demoLink === "#"
                                              ? "opacity-50 cursor-not-allowed"
                                              : ""
                                          }"
                                   ${
                                     project.demoLink === "#" ? "disabled" : ""
                                   }>
                                    Live Demo
                                </a>
                                <a href="${project.githubLink}" target="_blank" 
                                   class="github-icon px-2 py-1 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                                    <i class="fab fa-github text-xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <p class="text-gray-300 mb-6 flex-grow">${
                      project.description
                    }</p>

                    <div class="mt-auto pt-4 border-t border-gray-800">
                        <h4 class="text-sm font-semibold text-purple-400 mb-3">Technology Stack</h4>
                        <div class="flex flex-wrap gap-3">
                            ${project.technologies
                              .map(
                                (tech) => `
                                <span class="tech-badge px-3 py-1.5 bg-gray-800 rounded-full text-sm text-gray-300 
                                            transition-all duration-300 cursor-default">
                                    ${tech}
                                </span>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                </div>
            `;
  projectContainer.appendChild(projectCard);
});
