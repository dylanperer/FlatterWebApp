import { IComponent } from "../common"
import { ParentComponent } from "solid-js"

interface ITouchableOpacity extends IComponent {}
export const TouchableOpacity:ParentComponent<ITouchableOpacity> = (props)=> {
 return (
   <div
     class={`
      select-none
      transition-all
      duration-900
      active:opacity-50
      ${props.class}`}
   >
     {props.children}
   </div>
 );
}
