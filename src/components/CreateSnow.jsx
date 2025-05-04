import css from "./CreateSnow.module.css";

export const CreateSnow = ({ left, color }) => {
  return (
    <p
      className={css.snow}
      style={{
        left: `${left}vw`,
        backgroundColor: color,
      }}
    ></p>
  );
};
