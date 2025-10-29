"use client";

import { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Download,
  Menu,
  X,
  ChevronDown,
  MapPin,
  Building,
  GraduationCap,
  Sun,
  Moon,
  ExternalLink,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const projects = [
  // Top Featured Projects
  {
    id: 23,
    title: "AskSQL",
    description:
      "A tool that converts natural language queries into optimized SQL statements, enabling the generation of dynamic reports and charts.",
    tech: ["Python", "Streamlit"],
    category: "Data Science",
    year: "2025",
    status: null,
    liveUrl: "https://github.com/cristiano-nicolau/AskSQL/blob/main/Report_AskSQL_108536.pdf",
    githubUrl: "https://github.com/cristiano-nicolau/AskSQL",
  },
  {
    id: 1,
    title: "WisH - Where is Home",
    description:
      "Innovative and personalized real estate research platform based on user preferences and area metrics.",
    tech: [
      "ReactJs",
      "GeoServer",
      "PostgreSQL",
      "PostGis",
      "Django",
      "Docker",
      "GitHub Projects",
    ],
    category: "Web Development",
    year: "2024",
    status: null,
    liveUrl: "https://youtu.be/lMu8P-nh-0Y",
    githubUrl: "https://github.com/Wish-Where-is-Home",
  },
  {
    id: 2,
    title: "PeTicket",
    description:
      "Veterinary care solution addressing appointment scheduling, medical record, and consultation management.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Spring Boot",
      "MySQL",
      "RabbitMQ",
      "Jira",
      "SonarQube",
      "CI/CD",
      "Testing",
    ],
    category: "Web Development",
    year: "2024",
    status: null,
    liveUrl: "",
    githubUrl: "https://github.com/PeTicket/PeTicket",
  },
  {
    id: 5,
    title: "Digital Shift",
    description:
      "Analysis of historical e-commerce evolution in Portugal using Arquivo.pt data.",
    tech: [
      "Python",
      "Jupyter Notebook",
      "Pandas",
      "Numpy",
      "Matplotlib",
      "BeautifulSoup",
      "Streamlit",
      "Scikit-learn",
    ],
    category: "Data Science",
    year: "2024",
    status: "Live",
    liveUrl: "https://digital-shift.streamlit.app/",
    githubUrl: "https://github.com/cristiano-nicolau/digital_shift",
  },
  
  // 🔬 AI/ML Projects & 📊 Data Science
  {
    id: 7,
    title: "FootVis",
    description:
      "Web app visualizing football stats for teams, players, and matches using D3.js.",
    tech: ["HTML", "CSS", "JavaScript", "D3.js"],
    category: "Data Science",
    year: "2024",
    status: "Live",
    liveUrl: "https://cristiano-nicolau.github.io/FootVis/",
    githubUrl: "https://github.com/cristiano-nicolau/FootVis",
  },
  {
    id: 19,
    title: "France Energy Time Series Analysis",
    description:
      "A comprehensive analysis of France's energy consumption time series data, exploring monthly consumption patterns, trends, and forecasting opportunities.",
    tech: ["R", "ggplot2", "dplyr", "forecast"],
    category: "Data Science",
    year: "2025",
    status: "Live",
    liveUrl: "https://cristiano-nicolau.github.io/France-Energy_Consumption_TimeSeries_Analysis/project.html",
    githubUrl: "https://github.com/cristiano-nicolau/France-Energy_Consumption_TimeSeries_Analysis",
  },
  {
    id: 4,
    title: "Heart Disease Prediction",
    description:
      "ML model predicting heart disease presence using 14 attributes in patient datasets.",
    tech: [
      "Python",
      "Jupyter Notebook",
      "Pandas",
      "Numpy",
      "Matplotlib",
      "Scikit-learn",
      "Seaborn",
    ],
    category: "AI/ML",
    year: "2024",
    status: null,
    liveUrl: "",
    githubUrl: "https://github.com/cristiano-nicolau/heart_disease_prediction",
  },
  {
    id: 6,
    title: "Intel Image Classification",
    description:
      "Image classifier for natural scenes using deep learning with 6 classes.",
    tech: [
      "Python",
      "Jupyter Notebook",
      "Pandas",
      "Numpy",
      "Matplotlib",
      "Scikit-learn",
      "Keras",
      "TensorFlow",
    ],
    category: "AI/ML",
    year: "2025",
    status: null,
    liveUrl: "",
    githubUrl:
      "https://github.com/cristiano-nicolau/intel_image_classification",
  },
  {
    id: 14,
    title: "DigDug - AI",
    description:
      "Autonomous AI player developed to maximize score in the DigDug game.",
    tech: ["Python"],
    category: "AI/ML",
    year: "2023",
    status: null,
    liveUrl: "",
    githubUrl:
      "https://github.com/cristiano-nicolau/IA/tree/main/TPG-ia_107323_108536",
  },
  {
    id: 20,
    title: "Twitter Sentiment Analysis",
    description:
      "A comprehensive analysis of Twitter sentiment, focusing on data collection, preprocessing, and visualization to understand public sentiment trends.",
    tech: ["python", "pandas", "matplotlib", "seaborn", "nltk", "deep learning"],
    category: "AI/ML",
    year: "2025",
    status: null,
    liveUrl: "https://github.com/cristiano-nicolau/Twitter_Sentiment_Analysis/blob/main/report.pdf",
    githubUrl: "https://github.com/cristiano-nicolau/Twitter_Sentiment_Analysis",
  },
  {
    id: 21,
    title: "Energy Consumption Prediction",
    description:
      "A machine learning model predicting energy consumption based on historical data, focusing on feature engineering and model evaluation.",
    tech: ["Python", "Pandas", "Numpy", "Scikit-learn", "Matplotlib"],
    category: "AI/ML",
    year: "2025",
    status: null,
    liveUrl: "https://github.com/cristiano-nicolau/energy_consumption_prediction/blob/main/Report.pdf",
    githubUrl: "https://github.com/cristiano-nicolau/energy_consumption_prediction",
  },
  
  // 🧠 Software Engineering + Web Dev mixed
  {
    id: 22,
    title: "Collaborative Filtering Recommender System",
    description:
      "A collaborative filtering-based recommender system for personalized content suggestions, utilizing item-item interaction data.",
    tech: ["Python"],
    category: "Data Science",
    year: "2025",
    status: null,
    liveUrl: "",
    githubUrl: "https://github.com/cristiano-nicolau/collaborative_filtering-recommender-system",
  },
  {
    id: 8,
    title: "SensorSafe",
    description:
      "Sensor data management for fire detection, temperature, and humidity control.",
    tech: [
      "ReactJS",
      "NodeJS",
      "Spring Boot",
      "RabbitMQ",
      "Python",
      "GitHub Projects",
    ],
    category: "Web Development",
    year: "2023",
    status: null,
    liveUrl: "",
    githubUrl: "https://github.com/cristiano-nicolau/SensorSafe",
  },
  {
    id: 9,
    title: "E-commerce Store",
    description:
      "E-commerce store used to demonstrate vulnerabilities and security practices.",
    tech: ["HTML", "CSS", "JavaScript", "Python-Flask", "SQLite"],
    category: "Web Development",
    year: "2023",
    status: null,
    liveUrl: "",
    githubUrl:
      "https://github.com/cristiano-nicolau/e-commerce_store_vulnerabilities",
  },
  {
    id: 10,
    title: "Sudoku Solver Distributed",
    description:
      "Backtracking algorithm-based sudoku solver designed to handle any difficulty level.",
    tech: ["Python"],
    category: "Software Engineering",
    year: "2023",
    status: null,
    liveUrl: "",
    githubUrl: "https://github.com/cristiano-nicolau/sudoku_solver_distributed",
  },
  {
    id: 11,
    title: "Youtube Database",
    description:
      "YouTube database modeling project supporting video uploads, subscriptions, and interactions.",
    tech: ["MySQL", "C#"],
    category: "Software Engineering",
    year: "2022",
    status: null,
    liveUrl: "",
    githubUrl:
      "https://github.com/cristiano-nicolau/BD/tree/main/Projeto_Final",
  },
  {
    id: 12,
    title: "Message Broker - Distributed Systems",
    description:
      "Distributed system message broker handling ordered delivery and persistence.",
    tech: ["Python"],
    category: "Software Engineering",
    year: "2023",
    status: null,
    liveUrl: "",
    githubUrl:
      "https://github.com/cristiano-nicolau/message_broker-distributed_systems",
  },
  {
    id: 13,
    title: "Syncall",
    description:
      "Calendar synchronization tool for groups and personal agenda management.",
    tech: ["ReactJS"],
    category: "Web Development",
    year: "2022",
    status: null,
    liveUrl: "",
    githubUrl: "https://github.com/cristiano-nicolau/Syncal",
  },
  {
    id: 3,
    title: "TravelEase",
    description:
      "Bus ticket booking system focused on practicing unit and integration testing with Spring Boot.",
    tech: [
      "HTML",
      "CSS",
      "JS",
      "Spring Boot",
      "Docker",
      "MySQL",
      "Integration Testing",
      "Unit Testing",
    ],
    category: "Web Development",
    year: "2024",
    status: null,
    liveUrl: "https://youtu.be/aQj6cqA_YdA",
    githubUrl: "https://github.com/cristiano-nicolau/TravelEase",
  },
  
  // 📱 Mobile
  {
    id: 16,
    title: "UniEvents",
    description:
      "Mobile app for students to browse, register, and navigate university events.",
    tech: ["Kotlin", "SQLite", "Firebase"],
    category: "Mobile",
    year: "2024",
    status: "Live",
    liveUrl: "https://youtu.be/uurvzu-DSVE",
    githubUrl: "https://github.com/cristiano-nicolau/UniEvents",
  },
  {
    id: 17,
    title: "PulsePath",
    description:
      "A dual-platform fitness and wellness tracking app for Android and WearOS, integrating fitness monitoring into daily routines.",
    tech: ["Dart", "SQLite", "Flutter"],
    category: "Mobile",
    year: "2024",
    status: null,
    liveUrl: "",
    githubUrl: "https://github.com/cristiano-nicolau/PulsePath",
  },
  {
    id: 18,
    title: "Instagram Clone",
    description:
      "A clone of Instagram featuring photo posting, user following, and post liking to replicate the core social experience.",
    tech: ["Dart", "Flutter", "Firebase"],
    category: "Mobile",
    year: "2024",
    status: null,
    liveUrl: "",
    githubUrl: "https://github.com/cristiano-nicolau/instagram_ui",
  },
  
  // 🎮 Web Game
  {
    id: 15,
    title: "MyGames",
    description:
      "Web app with various browser-based games replicating core mechanics.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Web Development",
    year: "2024",
    status: "Live",
    liveUrl: "https://cristiano-nicolau.github.io/myGames/",
    githubUrl: "https://github.com/cristiano-nicolau/myGames",
  },
];

const social_media = [
  {
    name: "GitHub",
    url: "https://www.github.com/cristiano-nicolau",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/cristianonicolau/",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:10cccristiano@gmail.com",
    icon: Mail,
  },
];

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting] as const;
};

// Counter animation hook
const useCounter = (end: number, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return count;
};

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [searchTerm, setSearchTerm] = useState("");
  const [socialMedia, setSocialMedia] = useState(social_media);
  const [isDark, setIsDark] = useState(false);

  const categories = [
    "All",
    "Data Science",
    "Web Development",
    "Software Engineering",
    "AI/ML",
    "Mobile",
  ];
  
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = searchTerm === "" || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase())) ||
      project.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Reset visible projects when category or search term changes
  useEffect(() => {
    setVisibleProjects(4);
  }, [selectedCategory, searchTerm]);
  // Intersection observers for animations
  const [aboutRef, aboutInView] = useIntersectionObserver({ threshold: 0.2 });
  const [workRef, workInView] = useIntersectionObserver({ threshold: 0.1 });
  const [experienceRef, experienceInView] = useIntersectionObserver({
    threshold: 0.2,
  });
  const [educationRef, educationInView] = useIntersectionObserver({
    threshold: 0.2,
  });

  // Counters
  const projectsCount = useCounter(50, 2000, aboutInView);
  const experienceCount = useCounter(8, 2000, aboutInView);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    // Add class for smooth transition
    document.documentElement.classList.add("changing-theme");

    // Apply theme change
    requestAnimationFrame(() => {
      if (newTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }

      // Remove transition class after theme change is complete
      setTimeout(() => {
        document.documentElement.classList.remove("changing-theme");
      }, 500);
    });
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-light transition-colors duration-500 overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out ${
          isScrolled || isMenuOpen
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-medium tracking-tight">
              Cristiano Nicolau
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {["About", "Work", "Experience", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-sm hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              >
                {isDark ? (
                  <Sun className="w-4 h-4 transition-transform duration-500 rotate-0" />
                ) : (
                  <Moon className="w-4 h-4 transition-transform duration-500 rotate-0" />
                )}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="hidden md:flex group"
                onClick={() =>
                  window.open("/CV-Cristiano-Nicolau.pdf", "_blank")
                }
              >
                <Download className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-y-0.5" />
                Resume
              </Button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden transition-transform duration-300 hover:scale-110"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-500 overflow-hidden ${
              isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="mt-4 pb-4 border-t border-gray-100 dark:border-gray-800">
              <div className="flex flex-col space-y-4 pt-4">
                {["About", "Work", "Experience", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollTo(item.toLowerCase())}
                    className="text-left text-sm hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 relative"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 animate-fade-in-up">
              Software Engineer
              <br />
              <span className="text-gray-500 dark:text-gray-400">&</span> Data
              Scientist
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
              Building scalable systems and extracting insights from complex
              data to solve real-world problems.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up animation-delay-600 px-4">
            <Button
              onClick={() => scrollTo("work")}
              className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 text-white px-8 py-3 transition-all duration-300 hover:scale-105 group"
            >
              View Work
              <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollTo("contact")}
              className="px-8 py-3 bg-transparent border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 text-gray-400 dark:text-gray-500 animate-fade-in-up animation-delay-900">
            {socialMedia.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>

        <div
          className="absolute bottom-8 left-0 right-0 -translate-x-1/2 flex justify-center animate-bounce-slow"
          onClick={() => scrollTo("about")}
        >
          <ChevronDown className="w-5 h-5 text-gray-400 dark:text-gray-500" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-6" ref={aboutRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div
              className={`transition-all duration-1000 ease-out ${
                aboutInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <h2 className="text-4xl font-light mb-8">About</h2>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Hi, I'm Cristiano Nicolau, a 21-year-old technology enthusiast
                  from Viana do Castelo, Portugal. As a full-stack developer, I
                  enjoy building robust web applications and exploring the
                  latest advancements in software engineering.
                </p>
                <p>
                  I'm currently pursuing a Master's in Data Science at the
                  University of Aveiro, where I focus on machine learning, data
                  analytics, and scalable systems. My academic journey fuels my
                  curiosity and drives me to tackle real-world problems through
                  code.
                </p>
                <p>
                  I thrive in collaborative environments, value continuous
                  learning, and embrace new challenges that push me to grow both
                  technically and personally. I'm always open to exciting
                  opportunities and innovative projects.
                </p>
              </div>
            </div>

            <div
              className={`space-y-8 transition-all duration-1000 ease-out ${
                aboutInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div>
                <h3 className="text-lg font-medium mb-4">Core Technologies</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Python",
                    "Java",
                    "Spring Boot",
                    "MQTT",
                    "Node.js",
                    "PostgreSQL",
                    "Docker",
                  ].map((tech) => (
                    <div
                      key={tech}
                      className="text-sm text-gray-600 dark:text-gray-300 py-2 border-b border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-300"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl hover:scale-105 transition-all duration-500 group">
                  <div className="text-4xl font-light mb-2">{projectsCount}+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects Delivered</div>
                </div>
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl hover:scale-105 transition-all duration-500 group">
                  <div className="text-4xl font-light mb-2">{experienceCount}+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section
        id="work"
        className="py-32 px-6 bg-gray-50 dark:bg-gray-800/50"
        ref={workRef}
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`mb-16 transition-all duration-1000 ease-out ${
              workInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl font-light mb-8">Selected Work</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              A collection of projects that showcase my skills in software
              engineering and data science.
            </p>
          </div>
          {/* Filters */}
          <div
            className={`flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12 transition-all duration-1000 ease-out`}
          >
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm rounded-full transition-all duration-300 hover:scale-105 ${
                    selectedCategory === category
                      ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg"
                      : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Search Bar - Only visible on tablet and desktop */}
            <div className="relative w-[calc(75%-theme(spacing.12))] lg:w-80 xl:w-[22rem] hidden md:block group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
              <Input
              type="text"
              placeholder="Search projects by name, tech stack, or area..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-gray-400 dark:focus:border-gray-500 transition-colors duration-300"
              />
              {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
              >
                <X className="w-4 h-4" />
              </button>
              )}
            </div>
          </div>
          {/* Projects Grid */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">
                No projects found matching your search criteria.
              </p>
              <p className="text-gray-400 dark:text-gray-500 text-sm">
                Try adjusting your search term or category filter.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredProjects
              .slice(0, visibleProjects)
              .map((project, index) => (
                <Card
                  key={project.id}
                  className={`group cursor-pointer border-0 shadow-sm hover:shadow-xl dark:shadow-gray-900/20 dark:hover:shadow-gray-900/40 transition-all duration-500 bg-white dark:bg-gray-800 overflow-hidden relative hover:scale-[1.02] ${
                    workInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Elegant hover overlay */}
                  {project.liveUrl ? (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/70 to-gray-900/80 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex items-center justify-center backdrop-blur-sm">
                      <div className="flex space-x-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <Button
                          size="sm"
                          className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg transition-all duration-300 hover:scale-110"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.liveUrl, "_blank");
                          }}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 shadow-lg transition-all duration-300 hover:scale-110"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.githubUrl, "_blank");
                          }}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/70 to-gray-900/80 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex items-center justify-center backdrop-blur-sm">
                      <div className="flex space-x-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 shadow-lg transition-all duration-300 hover:scale-110"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.githubUrl, "_blank");
                          }}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                  )}

                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-medium mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                          <span>{project.year}</span>
                          <Badge
                            variant="outline"
                            className="text-xs border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300"
                          >
                            {project.category}
                          </Badge>
                          {project.status && (
                            <Badge
                              variant="outline"
                              className="text-xs border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300"
                            >
                              {project.status}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded transition-all duration-300 hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
          {/* Show/Hide projects controls */}
          {filteredProjects.length > 4 && (
            <div className="text-center mt-12 flex flex-col items-center gap-4">
              <span className="text-gray-500 dark:text-gray-400 mb-2">
                Showing {Math.min(visibleProjects, filteredProjects.length)} of {filteredProjects.length} projects
              </span>
              
              {visibleProjects < filteredProjects.length ? (
                <Button
                  variant="outline"
                  onClick={() => setVisibleProjects((prev) => prev + 4)}
                  className="px-8 py-3 bg-transparent border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 group"
                >
                  Load More Projects
                  <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              ) : (
                <Button
                  variant="outline"
                  onClick={() => {
                    setVisibleProjects(4);
                    scrollTo("work");
                  }}
                  className="px-8 py-3 bg-transparent border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 group"
                >
                  Show Only Initial Projects
                  <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              )}
            </div>
          )}
          
          {/* Show count for categories with 4 or fewer projects */}
          {filteredProjects.length <= 4 && (
            <div className="text-center mt-12">
              <span className="text-gray-500 dark:text-gray-400">
                Showing all {filteredProjects.length} projects
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-32 px-6" ref={experienceRef}>
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-4xl font-light mb-16 transition-all duration-1000 ease-out ${
              experienceInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Experience
          </h2>

          <div className="space-y-16">
            {[
              {
                title: "Researcher",
                company:
                  "Centro de Investigação e Desenvolvimento em Matemática e Aplicações (CIDMA)",
                period: "Feb 2025 - Present",
                location: "University of Aveiro, Portugal",
                description:
                  "In this work, a solution will be developed for communication with Bosch's NEXEED and integration with a Digital Twin, enabling the implementation of real-time anomaly detection algorithms. The project, part of the ILLIANCE agenda, focuses on theoretical and practical solutions to support analytics for Heat Pumps.",
                stacks: ["Python", "Celery", "Flower", "Docker", "MQTT"],
              },
              {
                title: "Backend Developer",
                company: "Devlop",
                period: "Jul 2024 - Oct 2024",
                location: "Aveiro, Portugal",
                description:
                  "Focused primarily on backend development, responsible for designing and implementing server-side logic and APIs. Worked on integrating various components, optimizing performance, and ensuring scalability of applications.",
                stacks: ["React", ".Net", "C#", "MySQL", "Docker", "Git"],
              },
              {
                title: "Full Stack Engineer",
                company: "Tectank Lda",
                period: "Jun 2023 - Sep 2023",
                location: "Viana do Castelo, Portugal",
                description:
                  "Helped build a web app for tracking swimming pools. Developed engaging front-end interfaces and seamlessly integrated them with APIs. Created and maintained back-end services, managed database operations, and utilized project management tools.",
                stacks: [
                  "React",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "MySQL",
                  "Docker",
                  "Git",
                ],
              },
            ].map((exp, index) => (
              <div
                key={index}
                className={`border-l-2 border-gray-100 dark:border-gray-800 pl-8 relative group hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-500 ${
                  experienceInView
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="absolute w-4 h-4 bg-gray-900 dark:bg-white rounded-full -left-2 top-0 transition-all duration-300 group-hover:scale-125" />

                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-medium group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {exp.period}
                  </span>
                </div>

                <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 mb-4">
                  <div className="flex items-center">
                    <Building className="w-4 h-4 mr-2" />
                    {exp.company}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {exp.location}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.stacks.map((stack) => (
                    <span
                      key={stack}
                      className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded transition-all duration-300 hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-600"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Espaço entre experiência e educação */}
          <div className="my-32" ref={educationRef} />
          <h3
            className={`text-4xl font-light mb-16 transition-all duration-1000 ease-out ${
              educationInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Education
          </h3>

          <div className="space-y-8" ref={educationRef}>
            {[
              {
                degree: "Master's in Data Science",
                school: "University of Aveiro",
                period: "2024 - Present",
                description:
                  "Master's degree in Data Science, focusing on machine learning, data mining, and big data technologies. Developed skills in data analysis, visualization, and predictive modeling.",
              },
              {
                degree: "Bachelor's in Computer Science",
                school: "University of Aveiro",
                period: "2021 - 2024",
                description:
                  "Bachelor's degree in Computer Science, with a focus on software development and computer systems. Developed skills in programming, algorithms, data structures, and software engineering.",
              },
            ].map((edu, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row md:items-center md:justify-between p-6 rounded-xl bg-white/70 dark:bg-gray-900/40 shadow-sm hover:shadow-lg hover:bg-gray-100/80 dark:hover:bg-gray-800/70 transition-all duration-300 hover:scale-[1.025] mb-2 ${
                  educationInView
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div>
                  <h4 className="font-semibold text-lg mb-1 flex items-center">
                    <GraduationCap className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
                    {edu.degree}
                  </h4>
                  <div className="flex items-center text-gray-700 dark:text-gray-300 mb-1">
                    <Building className="w-4 h-4 mr-2" />
                    {edu.school}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {edu.description}
                  </p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-4 md:mt-0 md:ml-8 whitespace-nowrap">
                  {edu.period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-32 px-6 bg-gray-900 dark:bg-black text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-8">Let's Work Together</h2>
          <p className="text-xl text-gray-300 dark:text-gray-400 mb-12 max-w-2xl mx-auto font-light">
            I'm always interested in new opportunities and challenging projects.
            Let's discuss how we can build something great together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 transition-all duration-300 hover:scale-105 group"
              onClick={() =>
                window.open("mailto:10cccristiano@gmail.com", "_blank")
              }
            >
              <Mail className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
              Get in Touch
            </Button>
            <Button
              variant="outline"
              className="border-gray-600 dark:border-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-900 px-8 py-3 bg-transparent transition-all duration-300 hover:scale-105 group hover:text-white"
              onClick={() => window.open("/CV-Cristiano-Nicolau.pdf", "_blank")}
            >
              <Download className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
              Download Resume
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-8">
            {socialMedia.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black dark:bg-gray-950 text-gray-500 dark:text-gray-600 text-center">
        <p className="text-sm">
          © 2025 Cristiano Nicolau. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
