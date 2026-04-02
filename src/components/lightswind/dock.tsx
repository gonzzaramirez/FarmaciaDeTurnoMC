import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  MotionValue,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

function useDockItemSize(
  mouseX: MotionValue<number>,
  baseItemSize: number,
  magnification: number,
  distance: number,
  ref: React.RefObject<HTMLElement | null>,
  spring: { mass: number; stiffness: number; damping: number }
) {
  const mouseDistance = useTransform(mouseX, (val) => {
    if (typeof val !== "number" || isNaN(val)) return 0;
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize,
    };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );

  return useSpring(targetSize, spring);
}

interface DockItemViewProps {
  icon: React.ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
  mouseX: MotionValue<number>;
  baseItemSize: number;
  magnification: number;
  distance: number;
  spring: { mass: number; stiffness: number; damping: number };
  badgeCount?: number;
}

function DockItemView({
  icon,
  label,
  href,
  onClick,
  mouseX,
  baseItemSize,
  magnification,
  distance,
  spring,
  badgeCount,
}: DockItemViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isHovered = useMotionValue(0);
  const size = useDockItemSize(
    mouseX,
    baseItemSize,
    magnification,
    distance,
    ref,
    spring
  );
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    const unsubscribe = isHovered.on("change", (value) =>
      setShowLabel(value === 1)
    );
    return () => unsubscribe();
  }, [isHovered]);

  const commonMotion = {
    ref,
    style: { width: size, height: size },
    onHoverStart: () => isHovered.set(1),
    onHoverEnd: () => isHovered.set(0),
    onFocus: () => isHovered.set(1),
    onBlur: () => isHovered.set(0),
    className:
      "relative inline-flex items-center justify-center rounded-full " +
      "bg-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_4px_24px_rgba(0,0,0,0.08)] " +
      "ring-1 ring-white/50 backdrop-blur-md backdrop-saturate-150 " +
      "text-zinc-800 outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-emerald-400/80",
    children: (
      <>
        <div className="flex items-center justify-center [&>svg]:shrink-0">
          {icon}
        </div>
        {badgeCount !== undefined && badgeCount > 0 && (
          <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
            {badgeCount > 99 ? "99+" : badgeCount}
          </span>
        )}
        <AnimatePresence>
          {showLabel && (
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: -10 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="pointer-events-none absolute -top-7 left-1/2 w-fit whitespace-nowrap rounded-lg border border-white/20 bg-zinc-900/90 px-2.5 py-1 text-xs font-medium text-white shadow-lg backdrop-blur-sm"
              style={{ x: "-50%" }}
              role="tooltip"
            >
              {label}
            </motion.div>
          )}
        </AnimatePresence>
      </>
    ),
  };

  if (href) {
    return (
      <motion.a
        {...commonMotion}
        href={href}
        aria-label={label}
        onClick={onClick}
      />
    );
  }

  return (
    <motion.div
      {...commonMotion}
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label={label}
    />
  );
}

export interface DockNavItem {
  icon: React.ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
  badgeCount?: number;
}

interface DockProps {
  items: DockNavItem[];
  className?: string;
  spring?: { mass: number; stiffness: number; damping: number };
  magnification?: number;
  distance?: number;
  panelHeight?: number;
  dockHeight?: number;
  baseItemSize?: number;
  position?: "bottom" | "top";
}

export default function Dock({
  items,
  className = "",
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 64,
  dockHeight = 256,
  baseItemSize = 50,
}: DockProps) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification, dockHeight]
  );

  const animatedHeight = useSpring(
    useTransform(isHovered, [0, 1], [panelHeight, maxHeight]),
    spring
  );

  return (
    <motion.div
      style={{ height: animatedHeight }}
      className="mx-auto flex w-full max-w-full justify-center items-end px-2 sm:px-3"
    >
      <motion.div
        onMouseMove={({ pageX }) => {
          isHovered.set(1);
          mouseX.set(pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={
          "absolute bottom-3 left-1/2 flex w-fit max-w-[min(100vw-1rem,42rem)] -translate-x-1/2 " +
          "items-end justify-center gap-2 sm:gap-3 rounded-[1.75rem] border border-white/45 " +
          "bg-white/25 px-3 py-2 shadow-[0_8px_40px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.7)] " +
          "backdrop-blur-2xl backdrop-saturate-150 ring-1 ring-white/30 sm:px-5 sm:py-2.5 " +
          className
        }
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Navegación principal"
      >
        {items.map((item, index) => (
          <DockItemView
            key={index}
            icon={item.icon}
            label={item.label}
            href={item.href}
            onClick={item.onClick}
            mouseX={mouseX}
            baseItemSize={baseItemSize}
            magnification={magnification}
            distance={distance}
            spring={spring}
            badgeCount={item.badgeCount}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
