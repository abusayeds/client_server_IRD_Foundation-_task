// /* eslint-disable @typescript-eslint/no-explicit-any */
// import {
//   createContext,
//   ReactNode,
//   useContext,
//   useEffect,
//   useState,
// } from "react";

// interface IUserProviderValues {
//   filter: string | undefined;
//   setFilter: any;
// }

// const UseContext = createContext<IUserProviderValues | null>(null);

// const UseProvider = ({ children }: { children: ReactNode }) => {
//   const [filter, setFilter] = useState<string | undefined>("");

//   useEffect(() => {}, []);

//   return (
//     <UseContext.Provider
//       value={{
//         filter,
//         setFilter,
//       }}
//     >
//       {children}
//     </UseContext.Provider>
//   );
// };

// export const useFilter = () => {
//   const context = useContext(UseContext);

//   if (context === null || context === undefined) {
//     throw new Error("useFilter must be used within the Provider context");
//   }

//   return context;
// };
// export default UseProvider;
