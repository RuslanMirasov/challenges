import "./Section.css";

const Section = ({ className = "", children }) => {
  return (
    <section className={`section ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
