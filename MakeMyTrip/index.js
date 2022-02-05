// import { useState, useContext } from "react";
// import { Context } from "./contextAPI";

// const useSnackbar = () => {
//   const { open, close } = useContext(Context);
//   return [open, close];
// };
// export default function SnackbarProvider({ children }) {
//   const [show, setshow] = useState(true);
//   const [message, setMessage] = useState("");
//   const open = (e, value) => {
//     setshow(true);
//     setMessage(value);
//   };
//   const close = () => setshow(false);
//   return (
//     <Context.Provider value={{ open, close }}>
//       <div>{children}</div>
//       {show && <div style={{ position: "fixed", bottom: 0 }}> {message}</div>}
//     </Context.Provider>
//   );
// }
// export { useSnackbar };
function person(value){
    return this.name + ' '+ value
}
const obj={
    name:'Suprit'
}
Function.prototype.customBind= function(obj){
    const func = this;
    return function(...args){
        return func.apply(obj,args);
    }
}
const myFunction = person.customBind(obj);
console.log(myFunction('hello'))