"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type TimelineItemProps = {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  index: number;
};

function TimelineItem({
  date,
  title,
  subtitle,
  description,
  index,
}: TimelineItemProps) {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={itemRef}
      className="grid grid-cols-[80px_1fr] sm:grid-cols-[120px_1fr] gap-4 md:gap-8 relative mb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline line */}
      {index !== 0 && (
        <div className="absolute top-0 left-[40px] sm:left-[60px] h-full w-px bg-gradient-to-b from-purple-500/0 via-purple-500/50 to-purple-500/0" />
      )}

      {/* Date */}
      <div className="text-right pr-4 pt-1 text-gray-400 font-light">
        {date}
      </div>

      {/* Content */}
      <div className="relative">
        {/* Timeline dot */}
        <div className="absolute -left-[18px] top-2 w-4 h-4 rounded-full bg-purple-500/20 border border-purple-500 z-10" />

        <div className="bg-gray-900/40 p-6 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-colors">
          <h3 className="text-xl text-white font-medium mb-1">{title}</h3>
          <h4 className="text-purple-400 mb-4">{subtitle}</h4>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

type TimelineProps = {
  items: Array<{
    date: string;
    title: string;
    subtitle: string;
    description: string;
  }>;
};

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="py-8">
      {items.map((item, i) => (
        <TimelineItem
          key={i}
          index={i}
          date={item.date}
          title={item.title}
          subtitle={item.subtitle}
          description={item.description}
        />
      ))}
    </div>
  );
}
