import useReveal from "../hooks/useReveal";
export default function Reveal({ children, className = "" }) {
  const ref = useReveal();
  return <div ref={ref} className={`rv ${className}`}>{children}</div>;
}
