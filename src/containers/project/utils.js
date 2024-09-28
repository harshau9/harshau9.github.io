import ImageOne from '../../images/image1.png';
import ImageTwo from '../../images/image2.png';
import ImageThree from '../../images/image3.png';
import ImageFour from '../../images/image4.png';
import ImageFive from '../../images/image5.png';

export const portfolioData = 
[
  {
    sectionId:3,
    projectName: "Lovoda Clone",
    des: "LOVODA is a women’s fashion brand for the newest & trending fashion accessories and online shop that offered high quality products at an affordable price.",
    projectLink: "https://papaya-begonia-ff5059.netlify.app",
    githubLink: "https://github.com/harshau9/Lovoda-Clone",
    tech: "HTML, CSS, JavaScript",
    image: ImageOne,
  },
  {
    sectionId:2,
    projectName: "MyHours Clone",
    // des: "Cloud-based time tracking.",
    des: "My Hours is a cloud-based time tracking solution best suited for small teams and freelancers. Users can start time tracking on unlimited projects and tasks in seconds, generate insightful reports, and create invoices.",
    projectLink: "https://splendid-conkies-1f200f.netlify.app/",
    githubLink: "https://github.com/harshau9/My-Hours",
    tech: "HTML, CSS, JavaScript",
    image: ImageTwo,
  },
  {
    sectionId:2,
    projectName: "MonsterIndia Clone",
    // des: "Professional networking site",
    des: "Monster India is a platform, primarily used for professional networking and career development, and allows job seekers to post their CVs and employers to post jobs",
    projectLink: "https://enormous-weight-975.netlify.app/",
    githubLink: "https://github.com/harshau9/MonsterIndia-Clone",
    tech: "HTML, CSS, JavaScript",
    tech: "HTML, CSS, JavaScript",
    image: ImageThree,
  },
  {
    sectionId:3,
    projectName: "Real Time Chat Application",
    des: "Real-Time-Chat is a MERN Stack Chatting App. Uses Socket.io for real time communication and stores user details in encrypted format in Mongo DB Database.",
    projectLink: "https://real-time-chat-app-ined.onrender.com",
    githubLink: "https://github.com/harshau9/Real-Time-Chat-App",
    tech: "MERN Stack, Chakra UI, Socket.io",
    image: ImageFour,
  },
  {
    // need to change the links below
    sectionId:2,
    projectName: "Myntra Clone",
    des: "Myntra is a one stop shop for all your fashion and lifestyle needs. Being India's largest e-commerce store for fashion and lifestyle products",
    // projectLink: "https://myntra-gilt.vercel.app",
    projectLink: "https://myntra-black.vercel.app/",
    githubLink: "https://github.com/harshau9/eager-grain-3783/tree/main",
    tech: "HTML, CSS, JavaScript, React JS",
    image: ImageFive,
  },
]

export const filterOptions = [
  {
    label : 'All',
    id : 1
  },
  {
    label : 'Group',
    id : 2
  },
  {
    label : 'Individual',
    id : 3
  }
]


{/* <p>{item.projectName}</p>
<h6>{item.des}</h6>
<div className="but">
<button>Visit</button>
<button>GitHub</button>
</div> */}