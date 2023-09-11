import Card from "../card/Card";
import "./CardSection.css";

const CardSection = ({ stays }) => {
  return (
    <section className="custom-grid">
      {stays.map((e, i) => (
        <Card
          key={i}
          beds={e.beds}
          type={e.type}
          photo={e.photo}
          title={e.title}
          rating={e.rating}
          superHost={e.superHost}
        />
      ))}
    </section>
  );
};

export default CardSection;
