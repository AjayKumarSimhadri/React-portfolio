import React from "react";
import { SocialIcon } from "react-social-icons";
// import emailjs from "emailjs-com";  

const logotext = "Home";
const meta = {
  
  title: "Ajaykumar - Engineer ⚡",
  // description: "I'm {Your name}, a technologist and cybersecurity enthuist.",
};

const introdata = {
  title: "Hi, I'm Ajay Kumar Simhadri",
  animated: {
    first: "Technologist",
    second: "Programmer",
    third: "Digital Marketer",
    fourth: "Electrical Engineer",

  },
  description:
    "Passionate about tech, I'm a technologist, programmer, and digital marketer. With an electrical engineering background, I'm dedicated to exploring our digital world. Always curious about learning and trying new things in the tech world",
  your_img_url: "https://r4.wallpaperflare.com/wallpaper/382/59/672/manhwa-solo-leveling-sung-jin-woo-hd-wallpaper-bda2b654146849dcdff1b059b53aef57.jpg",
};

const dataabout = {
  title: "Who am I?",
  aboutme:
    "I'm Ajay Kumar Simhadri. I graduated from Hindustan University with a grade of 8.75. I work at Cognizant as a Process Executive. Before this, I worked at Getryt as a software trainee and did internships at Positive Integers Pvt. Ltd. and Assetplus Consulting as a Data Science Intern. At Wipro, I interned in a DAAI-IDP position.",
  education: (
    <div>
      I finished my Electrical and Electronics Engineering degree from{" "}
      <a
        href="https://hindustanuniv.ac.in/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "#50C4ED" }}
      >
        Hindustan
      </a>{" "}
      University in 2022. Earlier, I studied at Narayana Junior College for
      intermediate and Govt Boys High School for secondary education.
    </div>
  ),

  skills: (
    <div>
      I know Python, SQL, HTML, CSS, JavaScript, and SEO. I can design and
      develop websites using React, Vue, and Next.js. I also use{" "}
      <a
        href="https://github.com/AjayKumarSimhadri/Tableau-A-Z-Hands-On-Tableau-Training-For-Data-Science"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "#50C4ED" }}
      >
        Tableau
      </a>{" "}
      for data visualization.
    </div>
  ),

  projects: (
    <div>
      I've worked on projects like{" "}
      <a
        href="https://github.com/AjayKumarSimhadri/WindML-"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "#50C4ED" }}
      >
        {" "}
        Wind Mill
      </a>{" "}
      Power Prediction Systems and Object Detection Using Raspberry Pi 4 Model B
      with the YOLO algorithm. Additionally, I've worked on Fire Fighting Robot
      and Smart Robot projects.
    </div>
  ),

  awards: (
    <div>
      I'm a member of{" "}
      <a
        href="https://github.com/AjayKumarSimhadri/IEEE-and-IET-ID-Cards/blob/main/https___soa.ieee.org_doc-root_document_ackPack_card_32323739343634373039303433383037_95691419.PDF"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "#50C4ED" }}
      >
        {" "}
        IEEE
      </a>{" "}
      and{" "}
      <a
        href="https://github.com/AjayKumarSimhadri/IEEE-and-IET-ID-Cards/blob/main/https___soa.ieee.org_doc-root_document_ackPack_card_32323739343634373039303433383037_95691419.PDF"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "#50C4ED" }}
      >
        {" "}
        IET.
      </a>{" "}
      I am continuously assessing opportunities for professional growth that
      align with my current skills and career path. Let's get in touch{" "}
      <SocialIcon
        url="https://www.linkedin.com/in/ajaykumarsimhadri"
        target="_blank"
        style={{ height: 20, width: 20 }}
      />
    </div>
  ),
};

const aboutme = () => {
  const style = {
    overflowWrap: "break-word",
  };
  return (
    <div style={style}>
      <h2>{dataabout.title}</h2>
      <p>{dataabout.aboutme}</p>
      <p>{dataabout.education}</p>
      <p>{dataabout.skills}</p>
      <p>{dataabout.projects}</p>
    </div>
  );
};

const worktimeline = [
  {
    jobtitle: "Process Executive",
    where: "Cognizant",
    date: "Oct 2023 - Present",
  },
  {
    jobtitle: "Software Trainee",
    where: "Getryt",
    date: "Jun 2023 - Sep 2023",
  },
  {
    jobtitle: "Data Science Intern",
    where: "Positive Integers Pvt. Ltd.",
    date: "Feb 2023 - Apr 2023",
  },
  {
    jobtitle: "DAAI-IDP Intern",
    where: "Wipro",
    date: "May 2023 - Apr 2023",
  },
  {
    jobtitle: "Data Science Intern",
    where: "Assetplusconsulting",
    date: "Jan 2021 - Nov 2021",
  },
];

const skills = [
  {
    name: "Python",
  },

  {
    name: "Javascript",
  },

  {
    name: "SQL",
  },

  {
    name: "Django",
  },

  {
    name: "React Js",
  },

  {
    name: "Next Js",
  },

  {
    name: "Html - Css",
  },

  {
    name: "SEO",
  },
];

const datablogs = [
  {
    img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*6nG8aL1a1-f5OeXjjgZ72g.jpeg",
    description: "Why Nobody Cares",
    link: "https://medium.com/@ajaykumar8080/why-nobody-cares-c9da0acc5932",
  },
  {
    img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*YPXYxsxxu9qhgpQcB30B6w.jpeg",
    description: "Writers play mind games, not just tell stories",
    link: "https://medium.com/@ajaykumar8080/writers-play-mind-games-not-just-tell-stories-e74b5d3d851a",
  },
  {
    img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*sxu9Da8Z4KetkzuojwYwVQ.jpeg",
    description: "How to Join Top 1% in 2024",
    link: "https://medium.com/@ajaykumar8080/how-to-join-top-1-in-2024-0619ee47bfc7",
  },
  {
    img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*S7l2pd0gbSr9_qN3btbk5A.jpeg",
    description: "Books That Change How You See Everything",
    link: "https://medium.com/@ajaykumar8080/books-that-change-how-you-see-everything-b2fe8a44fb1f",
  },
  {
    img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*qEzdaZ9CQsbrBsCW0UtUYA.png",
    description: "Mind Management Not Time Management",
    link: "https://medium.com/@ajaykumar8080/mind-management-not-time-management-567952c2b4e9",
  },
  {
    img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*rtMKALbUw2urKth_oFdH7A.jpeg",
    description: "9 TED Talks in 9 days that will change your life",
    link: "https://ajaykumar8080.medium.com/9-ted-talks-in-9-days-that-will-change-your-life-9c2b467f991d",
  },

  {
    img: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*qsMQjcRU9cnizLNp.jpg",
    description: "Stephen Hawking’s Theory On How Space And Time Began",
    link: "https://medium.com/@ajaykumar8080/stephen-hawkings-theory-on-how-space-and-time-began-b16b1e4ab007",
  },
  {
    img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*5mh0kDZqJ2y_9RH0s9TZrg.png",
    description: "The Only Book You Will Need to Learn About Manipulation",
    link: "https://medium.com/@ajaykumar8080/the-only-book-you-will-need-to-learn-about-manipulation-e47935b4de88",
  },
  {
    img: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*P83Opap29lO2Uyuk.jpeg",
    description: "7 Books That Will Make You A Savage",
    link: "https://medium.com/@ajaykumar8080/7-books-that-will-make-you-a-savage-a8463d74e032",
  },
  {
    img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*uuO3tWCX4gwtU6XQDtg-zg.jpeg",
    description: "4 Books That I’ll Never Stop Recommending",
    link: "https://medium.com/@ajaykumar8080/4-books-that-ill-never-stop-recommending-7ff80a0aa0da",
  },
  {
    img: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*jdbuvn5cX0ExddaI",
    description: "6 Philosophy Books Every Curious Mind Must Read",
    link: "https://medium.com/@ajaykumar8080/6-philosophy-books-every-curious-mind-must-read-16fb55455d01",
  },
  {
    img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*bJzYpbh_Hu5U1GvBhZoW4g.jpeg",
    description: "Learn 12 Things with These 12 YouTube Channels",
    link: "https://medium.com/@ajaykumar8080/learn-12-things-with-these-12-youtube-channels-250aa42cb8ff",
  },
];

const contactConfig = {
  YOUR_EMAIL: "mail4ajay786@gmail.com",
  description: "Looking forward to hearing from you!",
  // check out this tutorial for creating an emailjs.com account https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_1oiyriq",
  YOUR_TEMPLATE_ID: "template_nr7z438",
  YOUR_USER_ID: "u5o41w30cSmRC9kSV",
};

const socialprofils = {
  github: "https://github.com/AjayKumarSimhadri/Ajay",
  linkedin: "https://www.linkedin.com/in/ajaykumarsimhadri/",
  discord: "https://discordapp.com/users/1072359445985767424",
  facebook: "https://www.facebook.com/aajuabhi786/",
  instagram: "https://www.instagram.com/ajaykumar_8080/",
  twitter: "https://twitter.com/ajay_simhadri",
};


export {
  meta,
  dataabout,
  datablogs,
  worktimeline,
  skills,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
  aboutme,
};
