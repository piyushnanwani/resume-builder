export const emptyData = {
  personal: {
    name: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    github: "",
    linkedin: "",
    image: "",
  },
  bio: "",
  skills: "",
  experience: [],
  projects: [],
  education: [],
  certifications: [],
  awards: []
};

export const sampleData = {
  personal: {
    name: "Alex Carter",
    title: "Full Stack Developer",
    email: "alex.carter@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    github: "github.com/alexcarter",
    linkedin: "linkedin.com/in/alexcarter",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  bio: "Passionate Full Stack Developer with 2 years of experience building scalable web applications. Proficient in React, Node.js, and modern web technologies. Strong problem-solving skills and a track record of delivering high-quality software solutions.",
  skills: "JavaScript, TypeScript, React, Next.js, Node.js, Express, PostgreSQL, MongoDB, Docker, Git, REST APIs, GraphQL",
  experience: [
    {
      id: "1",
      title: "Software Engineer",
      company: "TechNova Solutions",
      duration: "Jan 2023 - Present",
      description: "• Developed and maintained full-stack web applications using React and Node.js.\n• Reduced page load time by 30% through code optimization.\n• Collaborated with cross-functional teams to deliver features on time."
    },
    {
      id: "2",
      title: "Junior Developer",
      company: "Innovate Web",
      duration: "Jun 2022 - Dec 2022",
      description: "• Assisted in the development of RESTful APIs and integrated frontend interfaces.\n• Wrote unit tests and improved test coverage by 20%.\n• Participated in daily stand-ups and sprint planning sessions."
    }
  ],
  projects: [
    {
      id: "1",
      name: "E-Commerce Platform",
      link: "github.com/alexcarter/ecommerce",
      description: "Built a fully functional e-commerce platform with a React frontend and Node.js backend. Implemented Stripe for payment processing."
    },
    {
      id: "2",
      name: "Task Management App",
      link: "github.com/alexcarter/task-app",
      description: "Developed a real-time task management application using React, Socket.io, and MongoDB."
    }
  ],
  education: [
    {
      id: "1",
      degree: "B.S. in Computer Science",
      institution: "University of California, Berkeley",
      year: "2018 - 2022",
      grade: "3.8 GPA"
    }
  ],
  certifications: [
    {
      id: "1",
      name: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      year: "2023"
    }
  ],
  awards: [
    {
      id: "1",
      name: "Best Hackathon Project",
      issuer: "TechCrunch Disrupt",
      year: "2022"
    }
  ]
};
