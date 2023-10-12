import { JSX, ParentComponent } from "solid-js";
import { IComponent } from "..";
import { twMerge } from "tailwind-merge";

interface IText extends IComponent, JSX.HTMLAttributes<HTMLSpanElement> {}

export const Text: ParentComponent<IText> = (props) => {
 return <span class={twMerge("select-none", props.class)}>{props.children}</span>;
};
