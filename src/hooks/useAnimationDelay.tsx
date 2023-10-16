import {Accessor, createSignal} from "solid-js";

export interface IAnimationDelay {
    class: string;
    delay: number;
}

export const useAnimationDelay = (anim: Array<IAnimationDelay>) => {
    const signals: Array<Accessor<string | undefined>> = [];
    anim.forEach((c) => {
        const [s, sT] = createSignal<string>();
        signals.push(s);
        setTimeout(() => sT(c.class), c.delay);
    });

    return signals;
};
