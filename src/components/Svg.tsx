import { Component, JSX } from "solid-js";
import { IComponent } from "..";
import { twMerge } from "tailwind-merge";

interface ISvg extends IComponent, JSX.ImgHTMLAttributes<HTMLImageElement> {}

export const Svg: Component<ISvg> = (props) => {
 return <img {...props} class={twMerge('pointer-events-none', props.class)}/>;
};
