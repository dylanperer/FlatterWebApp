import { Component, createSignal } from "solid-js";
import { twMerge } from "tailwind-merge";
import { useAnimationDelay } from "../../hooks/useAnimationDelay";
import { Button, InteractiveLabel, Text, Toggler } from "../../components";
import {} from "../../assets/icons/";
import { OpenBottomDrawer } from "../../api/react-native/ReactNativeApi";

const Gender: Component<{}> = () => {
 const [d1, d2, d3, d4] = useAnimationDelay([
  { class: "opacity-100 animate-fade-in-s", delay: 1000 },
  { class: "opacity-100 animate-fade-in-s", delay: 2000 },
  { class: "opacity-100 animate-fade-in-s", delay: 2400 },
  {class: "opacity-100 animate-fade-in-s",delay: 2800},
 ]);

 return (
  <section class="mx-auto flex h-full flex-col gap-10 overflow-y-scroll px-4 no-scrollbar md:w-[400px]">
   <div class="mt-12 flex w-[16rem] flex-col self-center">
    <Text
     class={twMerge("text-2xl font-semibold text-slate-700  opacity-0", d1())}
    >
     Hello,
    </Text>
    <Text
     class={twMerge(
      "self-end text-2xl font-semibold text-slate-700 opacity-0",
      d2()
     )}
    >
     Let's get you sorted.
    </Text>
   </div>
   <div class={twMerge("mx-auto mt-28 flex flex-col gap-5 opacity-0", d3())}>
    <Toggler checked={true} />
    <InteractiveLabel
     class="text-slate-400 text-sm font-medium"
     text="more choices?"
     onClick={() => OpenBottomDrawer("")}
    />
   </div>
   <div
    class={twMerge(
     "mt-28 w-44 self-end opacity-0 transition-all delay-1000 ease-in",
     d4()
    )}
   >
    <Button label="Continue" />
   </div>
  </section>
 );
};

export default Gender;
