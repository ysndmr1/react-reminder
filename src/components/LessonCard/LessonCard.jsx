import CardStyle from "./lesson.module.css";

const LessonCard = ({ name, age, image }) => {
  return (
    <div className={CardStyle.card}>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <p>
          Lesson Name : <span>{name}</span>
        </p>
        <p>
          Lesson Hour : <span>{age}</span>
        </p>
      </div>
    </div>
  );
};

export default LessonCard;
