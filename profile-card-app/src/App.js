import "./styles.css";

export default function App() {
  return (
    <div className="card">
      <Avatra></Avatra>
      <div className="data">
        <Intro></Intro>
        <Skillset></Skillset>
      </div>
    </div>
  );
}

function Avatra() {
  return <img src="jonas.jpg" alt="jonas pic" className="avatar" />;
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
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" emoji="💪" bgColor="orange"></Skill>
      <Skill skill="Javscript" emoji="💪" bgColor="green"></Skill>
      <Skill skill="Git & GitHub" emoji="💪" bgColor="yellow"></Skill>
      <Skill skill="ReactJs" emoji="💪" bgColor="red"></Skill>
      <Skill skill="Python" emoji="💪" bgColor="blue"></Skill>
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.bgColor }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
