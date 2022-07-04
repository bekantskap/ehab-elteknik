export default function StartCard(props) {
  return (
    <div className="start-content">
      <section className="start-left">
        <div className="start-left__text-box">
          <h2 className="start-left__title">{props.title}</h2>
          <p className="start-left__bread">{props.text}</p>
        </div>
      </section>
      <div className="start-middle__line-box">
        <div className="start-middle__line"></div>
      </div>
      <section className="start-right">
        <img className="start-right__img" src={props.img} alt="kretskort"></img>
      </section>
    </div>
  );
}
