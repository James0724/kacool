"use client";
import { useEffect, useRef, useState, useMemo } from "react";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  useTransform,
  useScroll,
  useVelocity,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { skills } from "@/lib/data";

interface Skill {
  name: string;
  icon: string;
}

interface CardProps {
  tweet: Skill;
  isFirst: boolean;
  onPause: () => void;
  onResume: () => void;
}

interface SeparationMarqueeProps {
  tweets?: Skill[];
  speed?: number;
}

function wrap(min: number, max: number, value: number): number {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
}

const MotionDiv = motion.div;

const Card = ({ tweet, isFirst, onPause, onResume }: CardProps) => (
  <div
    className={`cursor-default inline-flex w-fit min-w-fit items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-white ${
      isFirst ? "" : "ml-5"
    }`}
    onMouseEnter={onPause}
    onMouseLeave={onResume}
  >
    <Image
      src={tweet.icon}
      alt={tweet.name}
      width={18}
      height={18}
      className="rounded-full"
    />
    <div className="flex flex-col">
      <span className="font-extrabold">{tweet.name}</span>
    </div>
  </div>
);

const SeparationMarquee = ({ speed = 50 }: SeparationMarqueeProps) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const baseX = useMotionValue(0);
  const [fullWidth, setFullWidth] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);

  const repeatedTweets = useMemo(() => [...skills, ...skills], [skills]);

  useEffect(() => {
    if (trackRef.current) {
      setFullWidth(trackRef.current.scrollWidth);
    }
  }, [repeatedTweets]);

  const halfWidth = fullWidth / 2;
  const x = useTransform(baseX, (v) => wrap(-halfWidth, 0, v));

  useAnimationFrame((_, delta) => {
    if (!paused && halfWidth > 0) {
      const moveBy = (speed * delta) / 1000;
      baseX.set(baseX.get() - moveBy);
    }
  });

  return (
    <div className="relative flex-col overflow-hidden bg-bg border-y border-[#FFFFFF1A] py-4">
      <MotionDiv ref={trackRef} className="flex space-x-5" style={{ x }}>
        {repeatedTweets.map((tweet, index) => {
          return (
            <Card
              key={index}
              tweet={tweet}
              isFirst={index === 0}
              onPause={() => setPaused(true)}
              onResume={() => setPaused(false)}
            />
          );
        })}
      </MotionDiv>
    </div>
  );
};

export default SeparationMarquee;
