import styles from "@/app/ui/particles.module.css";
import clsx from "clsx";

export default function ParticlesBackground() {
  const iValues = [
    11, 12, 24, 10, 14, 23, 18, 16, 19, 20, 22, 25, 18, 21, 13, 15, 26, 17, 13,
    28, 11, 12, 24, 10, 11, 12, 24, 10, 14, 23, 18, 16, 19, 20, 22, 25, 18, 21,
    13, 15, 26, 17, 13, 28, 11, 12, 24, 10,
  ];
  return (
    <div className="absolute w-full h-screen overflow-hidden">
      <div className={clsx(styles.bubbles, "relative flex")}>
        {iValues.map((iValues, index) => (
          <span
            key={index}
            style={{ "--i": iValues } as React.CSSProperties}
          ></span>
        ))}
      </div>
    </div>
  );
}
