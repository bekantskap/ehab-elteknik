import StartCard from "../components/StartCard";

export default function Start() {
  return (
    <main className="start-container">
      <StartCard
        img={"img/nicolas-thomas-3GZi6OpSDcY-unsplash.jpg"}
        title={"PÅ EHAB KAN VI"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui delectus expedita maiores earum similique vel fugiat aliquam culpa repudiandae eum. Consequuntur harum unde in maiores vitae sequi, debitis quidem recusandae."
        }
        alt={"kretskort"}
      />
      <StartCard
        img={"img/mostafa-mahmoudi-47jO5Y8nsYo-unsplash.jpg"}
        title={"PÅ EHAB GÖR VI"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui delectus expedita maiores earum similique vel fugiat aliquam culpa repudiandae eum. Consequuntur harum unde in maiores vitae sequi, debitis quidem recusandae."
        }
        mirrored={true}
        alt={"fusebox"}
      />
      <StartCard
        img={"img/thisisengineering-raeng-xYCBw1uIP_M-unsplash (1).jpg"}
        title={"VI ÄR KLURIGA"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui delectus expedita maiores earum similique vel fugiat aliquam culpa repudiandae eum. Consequuntur harum unde in maiores vitae sequi, debitis quidem recusandae."
        }
        alt={"planeringsmöte"}
      />
      <div className="start-footer"></div>
    </main>
  );
}
