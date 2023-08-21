import { CSSProperties } from 'react';

export default function TechIcon({ style, icon, className }: {
  style?: CSSProperties,
  icon: string,
  className?: string,
}) {
  return (
    <i style={style} className={`${icon} ${className}`}></i>
  );
}
