import { JSX, splitProps } from "solid-js";
import { createVirtualized } from "./virtualize";
import { createScrollSync } from "./scrollSync";
import Range from "./range";

export interface VirtualizedListProps
    extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "children"> {
    height: number;
    itemHeight: number;
    totalCount: number;
    buffer?: number;
    children: (index: number) => JSX.Element;
}

export default function VirtualizedList(props: VirtualizedListProps) {
    const [, rest] = splitProps(props, [
        "height",
        "itemHeight",
        "totalCount",
        "buffer",
        "children",
        "style"
    ]);

    const [setScroll, onScroll, scrollState] = createScrollSync();
    const virtualized = createVirtualized(
        () => props.height,
        () => props.itemHeight,
        () => props.totalCount,
        () => scrollState.top,
        () => props.buffer
    );

    return (
        <div
            class="overflow-y-auto"
            onScroll={onScroll.vertical}
            ref={setScroll.vertical}
            style={{
                ...(props.style as any),
                height: `${props.height}px`
            }}
            {...rest}
        >
            <ul
                style={{
                    "margin-top": `${virtualized.margins[0]}px`,
                    height: `${virtualized.dimension + virtualized.margins[1]}px`
                }}
            >
                <Range start={virtualized.start} count={virtualized.count}>
                    {(index) => <li>{props.children(index)}</li>}
                </Range>
            </ul>
        </div>
    );
}
