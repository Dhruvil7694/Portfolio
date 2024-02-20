import {
  blockchain,
  backend,
  creator,
  web,
  weather,
  javascript,
  aiNftGenerator,
  metamask,
  ethereum,
  solidity,
  thirdweb,
  musketeers,
  crowdfunding,
  filmware,
  // kickstart,
  portfolio,
  twitterClone,
  staking,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  hrrkoin,
  figma,
  saurabh,
  threejs,
  framer,
  oasis,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Blockchain Developer",
    icon: blockchain,
  },
  {
    title: "Smart contract",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Ethereum",
    icon: ethereum,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "Blockchain",
    icon: blockchain,
  },
  {
    name: "Metamask",
    icon: metamask,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "ThirdWeb",
    icon: thirdweb,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Framer",
    icon: framer,
  },
];

const experiences = [
  {
    title: "Blockchain Developer",
    company_name: "Hrrkoin",
    icon: hrrkoin,
    iconBg: "#383E56",
    date: "August 2023 - Present",
    points: [
      "Crafting Tomorrow's Blockchain Solutions Today as a dedicated blockchain developer",
      "I've contributed to the creation of tokens that power decentralized ecosystems. Join us in revolutionizing the world of digital assets with HRRKoin.",
      "I'm passionate about creating innovative and secure solutions.With expertise in smart contract development,cross-platform proficiency, and a commitment to security, I've helped drive blockchain technology forward.",
      "As a vital part of the HRRKoin team, I played a pivotal role in developing the JobDex landing page. Leveraging my expertise in blockchain technology and user-centric design, I contributed to creating an engaging and informative platform.",
    ],
  },
  {
    title: "Web development",
    company_name: "Oasis Infobyte",
    icon: oasis,
    iconBg: "#E6DEDD",
    date: "June 2023 - July 2023",
    points: [
      "During my internship, I successfully completed three projects, including a calculator, a tribute page, and a to-do list application, showcasing my proficiency in web development.",
      "I honed my HTML skills, gaining expertise in structuring web content effectively for enhanced user experiences.",
      "Through hands-on experience, I became proficient in utilizing CSS frameworks to design visually appealing and responsive web pages.",
      "I developed a strong foundation in JavaScript, enabling me to create interactive and dynamic features that enhance website functionality.",
      "Working at Oasis Infobyte provided valuable exposure to teamwork, communication, and project management, fostering a holistic understanding of web development processes.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Throughout our journey, Dhruvil has consistently impressed with their innovative solutions and commitment to blockchain development. A true asset to the industry!",
    name: "Saurabh Srivastav",
    designation: "CEO @Hrrkoin",
    company: "Hrrkoin",
    image: saurabh,
  },
  {
    testimonial:
      "I had the pleasure of mentoring Dhruvil during their internship, and I must say, they impressed me from day one. Their ability to learn quickly and contribute effectively to each project was remarkable.",
    name: "Jaimin Patel",
    designation: "Employee",
    company: "Oasis Infobyte",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    testimonial:
      "Dhruvil's work on the JobDex landing page was outstanding. Their dedication and skills made it a success.",
    name: "Rushi Patel",
    designation: "Employee",
    company: "Hrrkoin",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const projects = [
  {
    name: "Staking Application ",
    description:
      "Revolutionize your financial strategy with our cutting-edge staking application. Seamlessly earn rewards by locking your assets, ensuring both security and passive income. Empower your assets, amplify your gains",
    tags: [
      {
        name: "Smart contract",
        color: "blue-text-gradient",
      },
      {
        name: "Stake",
        color: "green-text-gradient",
      },
      {
        name: "web3.0",
        color: "blue-text-gradient",
      },
      {
        name: "Thirdweb",
        color: "pink-text-gradient",
      },
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
    ],
    image: staking,
    source_code_link:
      "https://github.com/Dhruvil7694/Staking-Application.git",
  },
  // {
  //   name: "Kickstarter ",
  //   description:
  //     "Kickstarter's app empowers creators to bring their dreams to life. Discover and support projects spanning art, tech, and more. Backers enjoy exclusive rewards while helping ideas flourish. Join a vibrant community, all in a user-friendly interface. Fuel innovation with Kickstarter, where creativity meets crowdfunding.",
  //   tags: [
  //     {
  //       name: "Kickstarter",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Solidity",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "web3.0",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Semantics",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "SmartContract",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: kickstart,
  //   source_code_link:
  //     "https://github.com/Dhruvil7694/KickStarter-Blockchain-web3.git",
  // },
  {
    name: "Web3 Twitter clone",
    description:
      "Welcome to our Web3 Twitter Clone, where the power of decentralization meets social networking. Our platform combines the familiar experience of tweeting with the security and transparency of blockchain technology. Join us to engage with a global community, share your thoughts, and take control of your data while exploring the exciting possibilities of the decentralized web.",
    tags: [
      {
        name: "Web3",
        color: "blue-text-gradient",
      },
      {
        name: "Forge",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "ThirdWeb",
        color: "pink-text-gradient",
      },
      {
        name: "Ethereum",
        color: "blue-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
    ],
    image: twitterClone,
    source_code_link: "https://github.com/Dhruvil7694/web3TwitterClone.git",
  },
  {
    name: "Ai Nft Generator",
    description:
      "The AI NFT Generator web application is a cutting-edge platform that leverages artificial intelligence to create unique and valuable NFT (Non-Fungible Token) art and collectibles. Users can easily generate, customize, and mint NFTs, empowering artists and creators to tokenize their digital creations with ease.",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "HugginfFace",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
      {
        name: "MetaMask",
        color: "pink-text-gradient",
      },
      {
        name: "Hardhat",
        color: "blue-text-gradient",
      },
    ],
    image: aiNftGenerator,
    source_code_link:
      "https://github.com/Dhruvil7694/AI-NFT-generating-webApp.git",
  },
  {
    name: "CrowdFunding Web-Application",
    description:
      "Experience the future of funding with our crowdfunding app.Empower ideas, support innovation,and be part of a global community that fuels creativity.Transform dreams into reality with seamless, secure, and user-friendly.",
    tags: [
      {
        name: "Blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "ReactJS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "web3.0",
        color: "green-text-gradient",
      },
    ],
    image: crowdfunding,
    source_code_link: "https://github.com/Dhruvil7694/Crowd-Funding.git",
  },
  {
    name: "Portfolio Web Application",
    description:
      "Discover my portfolio website, a digital showcase of my work and expertise. Explore a collection of projects that highlight my skills and creativity. Let's connect and explore opportunities for collaboration and innovation.",
    tags: [
      {
        name: "Frontend",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Dhruvil7694/PortFoleo.git",
  },
  {
    name: "Filmware",
    description:
      "Experience cinematic magic with our React web application. Filmware offers an immersive platform for movie enthusiasts to explore trailers, reviews, and showtimes. Stay up-to-date with the latest releases and connect with fellow film buffs. Your gateway to the world of movies is just a click away.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
    ],
    image: filmware,
    source_code_link: "https://github.com/Dhruvil7694/filmware.git",
  },
  {
    name: "3 musketeers",
    description:
      "This multifaceted project comprises three exciting components. First, a sleek calculator for quick mathematical tasks. Second, an efficient to-do list manager to streamline your tasks. Lastly, a tribute page, paying homage to a special figure.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: musketeers,
    source_code_link: "https://github.com/Dhruvil7694/OIBSIP-.git",
  },
  {
    name: "Weather Application",
    description:
      "Experience real-time weather updates at your fingertips with our Weather Web Application. Simply enter the name of your city, and instantly receive accurate weather information right on your screen. With a sleek and user-friendly design, stay informed about current conditions, temperature, humidity, wind speed, and more.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/Dhruvil7694/Weather-App.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
