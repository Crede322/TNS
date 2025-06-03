import { useEffect, useState } from "react";
import classes from "./InfoPageTemplate.module.css";

interface Props {
  heading: string;
  questionList: { title: string; answer: string }[];
}

export default function InfoPageTemplate({ questionList, heading }: Props) {
  const [buttonStates, setButtonStates] = useState<boolean[]>([]);

  useEffect(() => {
    const boolArray = Array.from(questionList, () => {
      return false;
    });
    setButtonStates(boolArray);
  }, []);

  const toggleButton = (index: number) => {
    setButtonStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state)),
    );
    console.log(buttonStates);
  };

  return (
    <main>
      <div className={classes.page}>
        <h1 className={classes.heading}>{heading}</h1>
        <section>
          <ul>
            {questionList.map((question, index) => (
              <li key={index}>
                <button
                  className={classes.question}
                  onClick={() => {
                    toggleButton(index);
                  }}
                >
                  <p>
                    {index + 1}. {question.title}
                  </p>
                  <div className={classes.question__indicator}>
                    {buttonStates[index] ? "-" : "+"}
                  </div>
                </button>
                {buttonStates[index] ? (
                  <p className={classes.answer}>{question.answer}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
