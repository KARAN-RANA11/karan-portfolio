import useScrollProgress from "../hooks/useScrollProgress";
export default function ScrollProgress() {
  return <div className="prog" style={{ width: useScrollProgress() + "%" }} />;
}
