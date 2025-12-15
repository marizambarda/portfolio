import { ReactNode, Fragment } from "react";

export function replace(
  text: string,
  replacements: Record<string, ReactNode>
): ReactNode[] {
  const parts = text.split(/(\[|\])/g);
  const result: ReactNode[] = [];

  for (let i = 0; i < parts.length; i++) {
    if (parts[i] === "[" && parts[i + 2] === "]") {
      const key = parts[i + 1];
      result.push(replacements[key] ?? `[${key}]`);
      i += 2;
    } else {
      result.push(parts[i]);
    }
  }

  return result.map((part, index) => <Fragment key={index}>{part}</Fragment>);
}
