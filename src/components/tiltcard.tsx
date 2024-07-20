"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";


type TiltCardProps = {
  cardTitle: string;
  cardIcon: string;
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const TiltCard: React.FC<TiltCardProps> = ({ cardTitle, cardIcon }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    // const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    // const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    // const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    // const rY = mouseX / width - HALF_ROTATION_RANGE;

    const mouseX = (e.clientX - rect.left) / width;
    const mouseY = (e.clientY - rect.top) / height;

    // Calculate rotation values based on mouse position
    const rX = (mouseY * ROTATION_RANGE - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX * ROTATION_RANGE - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-56 w-52 rounded-xl bg-gradient-to-br from-primary to-secondary"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-background shadow-lg"
      >
        <p
          style={{
            transform: "translateZ(75px)",
          }}
          className="mx-auto text-4xl"
        >
          {cardIcon}
        </p>
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold"
        >
          {cardTitle}
        </p>
      </div>
    </motion.div>
  );
};

export default TiltCard;