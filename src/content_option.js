import profileImage from "./assets/images/profileImage.jpeg";
import certificateImage1 from "./assets/images/docs/cer1.png";
import certificateImage2 from "./assets/images/docs/cer2.png";
import certificateC2 from "./assets/images/docs/certificate-c2.pdf";
import certificateT from "./assets/images/docs/certificate-t.pdf";

const logotext = "AHMED";

const meta = {
  title: "Ahmed Eltyb",
  description: "Junior Penetration Tester | Backend Developer based in Cairo",
};

const introdata = {
  title: "I'm Ahmed Eltyb",
  animated: {
    first: "Penetration Tester",
    second: "Backend Developer",
    third: "Cybersecurity Enthusiast",
  },
  description:
    "Junior Penetration Tester with certified training (eJPT, ITI, Instant) and strong hands-on experience in web and network security. Skilled in vulnerability assessment and PHP backend development.",
  your_img_url: profileImage,
};

const dataabout = {
  title: "A bit about myself",
  aboutme:
    "I'm a Junior Penetration Tester with certified training and hands-on experience in web and network security through PortSwigger and TryHackMe. I also have solid backend development skills with PHP and Laravel. My goal is to contribute to secure system development and advance the cybersecurity field.",
};

const worktimeline = [
  {
    jobtitle: "Penetration Testing",
    where: "Instant Certificate",
    date: "2024",
  },
  {
    jobtitle: "Cybersecurity",
    where: "ITI",
    date: "2024",
  },
  {
    jobtitle: "eJPT v1",
    where: "Netriders Academy",
    date: "2024",
  },
  {
    jobtitle: "Back-end PHP",
    where: "Route Academy",
    date: "2023",
  },
];

const skills = [
  { name: "PHP", value: 85 },
  { name: "Laravel", value: 85 },
  { name: "Burp Suite", value: 80 },
  { name: "Wireshark", value: 75 },
  { name: "Nmap", value: 80 },
  { name: "Metasploit", value: 75 },
  { name: "TryHackMe", value: 85 },
  { name: "PortSwigger Labs", value: 90 },
  { name: "Security Testing", value: 85 },
  { name: "SQL Injection", value: 85 },
  { name: "Cross-Site Scripting (XSS)", value: 80 },
  { name: "Cross-Site Request Forgery (CSRF)", value: 80 },
  { name: "Authentication & Authorization Testing", value: 82 },
  { name: "Broken Access Control", value: 80 },
];

const services = [
  {
    title: "Web Penetration Testing",
    description:
      "Identifying and exploiting vulnerabilities in web applications using tools like Burp Suite, Nikto, Gobuster and PortSwigger techniques.",
  },
  {
    title: "Network Security Assessment",
    description:
      "Performing network scans and vulnerability assessments using Nmap, Metasploit, and other security tools.",
  },
  {
    title: "Backend Development",
    description:
      "Building secure RESTful APIs and web applications using PHP, Laravel, and MySQL with clean MVC architecture.",
  },
];

const dataportfolio = [
  {
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    description: "Web Penetration Testing Lab - PortSwigger",
    link: "https://portswigger.net/web-security",
  },
  {
    img: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=1200&q=80",
    description: "TryHackMe - Web and Network Challenges",
    link: "https://tryhackme.com/",
  },
  {
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    description: "Laravel REST API Project",
    link: "https://github.com/ahmedeltyb17",
  },
];

const documentation = [
  {
    title: "Security Documentation and Lab Evidence",
    img: certificateImage1,
    link: certificateC2,
  },
  {
    title: "Cybersecurity Training Certificate",
    img: certificateImage2,
    link: certificateT,
  },
];

const contactConfig = {
  YOUR_EMAIL: "ahmedeltyb17@gmail.com",
  YOUR_FONE: "01016867402",
  description:
    "Feel free to reach out for collaboration, security assessments, or backend development projects.",
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  github: "https://github.com/ahmedeltyb17",
  linkedin: "https://www.linkedin.com/in/ahmed-eltyb",
};

export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
  documentation,
};
