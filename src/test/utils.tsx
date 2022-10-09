import { MemoryRouter } from "react-router-dom";

export const WithMemoryRouting: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <MemoryRouter>{children}</MemoryRouter>;
};
