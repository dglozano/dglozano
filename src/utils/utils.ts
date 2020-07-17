import * as React from "react";

export const scrollToView = (event: React.MouseEvent, anchorId: string) => {
  const anchor = (
    (event.target as HTMLDivElement).ownerDocument || document
  ).querySelector(anchorId);

  if (anchor) {
    anchor.scrollIntoView({ behavior: "smooth", block: "end" });
  }
};

export const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

/**
 * A helper to create a Context and Provider with no upfront default value, and
 * without having to check for undefined all the time.
 */
export const createContext = <A extends {} | null>(defaultValue?: A) => {
  const context = React.createContext<A | undefined>(defaultValue);

  const useContext = () => {
    const contextValue = React.useContext(context);

    if (contextValue === undefined) {
      throw new Error("useContext must be inside a Provider with a value");
    }

    return contextValue;
  };

  return [useContext, context.Provider] as const; // 'as const' makes TypeScript infer a tuple
};
