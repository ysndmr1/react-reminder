import LessonCard from "../components/LessonCard/LessonCard";

import { data } from "../helper/data";
import "./Lesson.css";
const Lesson = () => {
  return (
    <div className="box">
      <h1>Lesson Reminder</h1>
      <div className="container">
        {data.map(({ name, age, image }) => (
          <LessonCard image={image} name={name} age={age} />
        ))}
      </div>
    </div>
  );
};

export default Lesson;
