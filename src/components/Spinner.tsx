import { Component } from "solid-js";
import { IComponent } from "..";

export interface ISpinner extends IComponent {}

export const Spinner: Component<ISpinner> = (props) => {
   return (
      <div class={`animate-fade-in ${props.class}`}>
         <div class="h-5 w-5 animate-spin rounded-full border-2 border-gray-300/50 border-t-slate-300 transition-all duration-200" />
      </div>
   );
};
