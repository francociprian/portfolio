import { BsLinkedin, BsGithub, BsFillEnvelopeFill, BsFillFileEarmarkTextFill } from "react-icons/bs";

const socialLinks = [
    {
      id: 1,
      title: "Curriculum",
      url: "https://drive.google.com/file/d/1oL7RCxzYAJOC0ggCC0E1y-TR2uQKiVEL/view?usp=sharing",
      icon: <BsFillFileEarmarkTextFill className="h-6 w-6"/>
    },
    {
      id: 2,
      title: "E-mail",
      url: "mailto:franco_ciprian@hotmail.com",
      icon: <BsFillEnvelopeFill className="h-6 w-6"/>
    },
    {
      id: 3,
      title: "LinkedIn",
      url: "http://www.linkedin.com/in/franco-ciprian-387231222/",
      icon: <BsLinkedin className="h-6 w-6"/>
    },
    {
      id: 4,
      title: "GitHub",
      url: "https://github.com/francociprian",
      icon: <BsGithub className="h-6 w-6"/>
    },
  ];
  
  export default socialLinks;