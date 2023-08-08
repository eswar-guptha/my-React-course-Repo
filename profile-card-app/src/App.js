import "./styles.css";

let skills = [
  { skillName: "HTML", level: "advanced", bgColor: "#ffbe76" },
  { skillName: "CSS", level: "intermediate", bgColor: "#ff7979" },
  { skillName: "Javascript", level: "intermediate", bgColor: "#badc58" },
  { skillName: "ReactJs", level: "interediate", bgColor: "#f9ca24" },
  { skillName: "Pyhton", level: "beginner", bgColor: "#00b894" },
  { skillName: "Github", level: "intermediate", bgColor: "#686de0" },
  { skillName: "Git", level: "beginner", bgColor: "#22a6b3" },
];

export default function App() {
  return (
    <div className="card">
      <Avator></Avator>
      <div className="data">
        <Intro></Intro>
        <Skillset></Skillset>
      </div>
    </div>
  );
}

function Avator() {
  return <img src="jonas.jpg" alt="Jonas pic" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Jonas Schmedtmann</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function Skillset() {
  // skills.map((skill) => console.log(skill));
  return (
    <div className="skill-list">
      {/* <Skill skillName="HTML" bgColor="#ffbe76" emoji="💪"></Skill>
      <Skill skillName="CSS" bgColor="#ff7979" emoji="💪"></Skill>
      <Skill skillName="Javscript" bgColor="#badc58" emoji="💪"></Skill>
      <Skill skillName="React" bgColor="#f9ca24" emoji="💪"></Skill>
      <Skill skillName="Git" bgColor="#00b894" emoji="💪"></Skill>
      <Skill skillName="GitHub" bgColor="#686de0" emoji="💪"></Skill>
      <Skill skillName="Python" bgColor="#22a6b3" emoji="💪"></Skill> */}
      {skills.map((skill) => (
        <Skill skillObj={skill} key={skill.skillName}></Skill>
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.bgColor }}>
      <span>{skillObj.skillName}</span>
      <span>
        {skillObj.level === "advanced"
          ? "💪"
          : skillObj.level === "intermediate"
          ? "👍"
          : "👶"}
      </span>
    </div>
  );
}
