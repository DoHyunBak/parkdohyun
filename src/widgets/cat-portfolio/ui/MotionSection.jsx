import { motion, useReducedMotion } from "framer-motion";

export default function MotionSection({
  id,
  kicker,
  title,
  description,
  children,
  className = "",
  delay = 0,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={`scroll-mt-24 ${className}`}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay: reduceMotion ? 0 : delay }}
    >
      {(kicker || title || description) && (
        <div className="mb-8 max-w-2xl">
          {kicker && (
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#a66d4f]">
              {kicker}
            </p>
          )}
          {title && (
            <h2 className="text-3xl font-black tracking-tight text-[#33271f] sm:text-4xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-base leading-7 text-[#725f50] sm:text-lg">{description}</p>
          )}
        </div>
      )}
      {children}
    </motion.section>
  );
}

export function MotionCard({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut", delay: reduceMotion ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}
