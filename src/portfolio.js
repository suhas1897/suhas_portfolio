// import ReactTyped from "./components/TypedComponent"

// import ReactTyped from "react-typed";
const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/suhas1897',
  title: 'CH.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'CHALAMCHARLA SUHAS',
  // role: 'Front End Developer',


  description:
    'I am a dedicated and creative front-end developer with a passion for crafting responsive, user-friendly websites and applications. With a strong foundation in HTML, CSS, and JavaScript, I specialize in translating design concepts into interactive and visually appealing digital experiences. My expertise extends to modern frameworks and libraries such as Reactjs, React-Native enabling me to build dynamic and performant interfaces.',
  resume: 'https://drive.google.com/file/d/1l6G0HNjodLpfOuzQYemtqPJA5SBPekIM/view?usp=drive_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/suhas-chalam-charla-438787220/',
    github: 'https://github.com/suhas1897',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'LSB Steganography',
    description:
      'Develop a tool that uses Least Significant Bit (LSB) steganography to embed hidden text within an image and later extract that text from the image.',
    stack: ['Python', 'HTML', 'JavaScript'],
    sourceCode: 'https://github.com/suhas1897/LSB-STEGANOGRAPHY.git',
    // livePreview: 'https://github.com',
  },
  {
    name: 'IDS on Trojan Threats Using CNN & LSTM Model',
    description:
      'This project focuses on building an Intrusion Detection System (IDS) to detect Trojan threats using a hybrid model combining Convolutional Neural Networks (CNN) and Long Short-Term Memory (LSTM) networks. The dataset used for training and testing the model is Trojan_dataset.csv.',
    stack: ['Python', 'Machine Learning', 'CNN & LSTM models'],
    sourceCode: 'https://github.com/suhas1897/IDS_on_Trojan_Threats.git',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Selenium Automation',
    description:
      'This Flask application scrapes the latest trending topics from Twitter and stores them in a MongoDB database. The application uses Selenium for web scraping and a proxy for accessing Twitter.',
    stack: ['Python', 'Selenium', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/suhas1897/Barsaati-Films-internship.git',
    // livePreview: 'https://github.com',
  },

  {
    name: 'Business Contract Validation',
    description: 
        'Business Contract Validation -To Classify Content within the Contract Clauses and Determine Deviations from Templates and highlight them.',
        stack: ['Python', 'React Js'],
        sourceCode: 'https://github.com/suhas1897/Business_contract_Validation.git'
  },

  {
    name: 'Indium Health App',
    description: 'This React Native app uses images of sweat patches to detect RGB values, which are analyzed against a dataset to identify potential health issues. The app then suggests nearby hospitals and provides their contact information for further medical assistance.',
    stack: ['React-native', 'JavaScript', 'Python'],
    sourceCode: 'https://github.com/suhas1897/indium-App.git'

  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'SQL',
  'JavaScript',
  'TypeScript',
  'React',
  'React-Native',
  'Kali',
  'Ethical Hacking',
  'Linux'
]



const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'chalamcherlasuhas1980@gmail.com',
  
}

export { header, about, projects, skills, contact }
