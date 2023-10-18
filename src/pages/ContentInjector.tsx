import {useLocation, useSearchParams} from "@solidjs/router";
import {Component} from "solid-js";
import {IListItem, List} from "../components/List";
import { List2 } from "../components/List2";
import VirtualizedList from "../components/virtualized/VirtualizedList";

const ContentInjector: Component<{}> = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log("@>", searchParams, setSearchParams);

    const item: IListItem = {
        id: 1,
        content: <div>hello</div>,
        onClick: () => console.log("Hello"),
    };
    const item2: IListItem = {
        id: 2,
        content: <div>hello</div>,
        onClick: () => console.log("Hello"),
    };

    const item3: IListItem = {
        id: 3,
        content: <div>hello</div>,
        onClick: () => console.log("Hello"),
    };

    const items = ()=>{
        const _items: IListItem[] = [];
        for(let i = 0; i< 1000; i++){
            _items.push({
                id: i,
                content: <div>hello</div>,
                onClick: ()=>console.log("OK")
            })
        }
        return _items;
    }

    return (
        <div>
            Content injection
            <VirtualizedList
                height={600}
                itemHeight={18}
                totalCount={9999}
                buffer={1}
                style={{
                    "white-space": "nowrap",
                    width: "300px"
                }}
            >
                {(index) => (
                    <div>
                        {index} - {Date.now()}
                    </div>
                )}
            </VirtualizedList>
        </div>
    );
};

export default ContentInjector;
