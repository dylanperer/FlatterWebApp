import { Component, createSignal } from "solid-js";
import { IComponent } from "..";
import { Spinner } from "./Spinner";
import { ClickableOpacity } from "./ClickableOpacity";
import { twMerge } from "tailwind-merge";

interface IButton extends IComponent {
  label: string;
  onClick?: () => Promise<any>;
}

export const Button: Component<IButton> = ({
  onClick = () => Promise.resolve(),
  ...props
}) => {
  const [isLoading, setIsLoading] = createSignal<boolean>(false);
  const handleClick = async () => {
    if (!isLoading()) {
      setIsLoading(true);
      try{
        await onClick();
      }catch {
        setIsLoading(false);
      }
      setIsLoading(false);
    }
  };

  return (
   <ClickableOpacity
    class={twMerge(
     `flex
      h-12 
      w-full 
      flex-shrink-0 
      items-center 
      justify-center
      rounded-full
    bg-app-accent-500
      shadow-[0px_0px_20px_-8px_#3700ff] shadow-app-accent-500/50`,
     props.class
    )}
    onClick={handleClick}
    enabled={!isLoading()}
   >
    {isLoading() && <Spinner />}
    {!isLoading() && (
     <span class={"animate-fade-in text-slate-100"}>{props.label}</span>
    )}
   </ClickableOpacity>
  );
};
