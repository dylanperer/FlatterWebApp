import { TouchableOpacity } from "./TouchableOpacity"
import { IComponent } from ".."
import { Component } from "solid-js"

interface ICheckbox extends IComponent {
 label: string
}

export const Checkbox:Component<ICheckbox> = (props) => {
 const handleCheckboxChange = (event:  any) => {
  console.log(event)
 }

 return (
   <TouchableOpacity class={`max-w-max ${props.class}`}>
     <label
       class="flex
              max-w-max
              cursor-pointer
              flex-row
              gap-2
              font-normal
             "
     >
       <div class="relative flex items-center justify-center">
         <input
           type="checkbox"
           onChange={handleCheckboxChange}
           class="
            peer
            h-5 
            w-5 
            cursor-pointer
            appearance-none
            rounded-full
            border-2
            border-slate-300
            bg-transparent
            outline-none
          "
         />
         <span class="transition-colors duration-200 absolute ease-in-out left-0 ml-[0.25rem] h-3 w-3 transform rounded-full peer-checked:bg-app-accent-500" />
       </div>
       {props.label}
     </label>
   </TouchableOpacity>
 );
}
