import { useSearchParams } from "@solidjs/router";
import {VirtualList} from "../../components/VritualList";
import {ClickableOpacity} from "../../components";
const GenderList = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const items = Array.from({length: 100000}).map((c,i)=><ClickableOpacity class="w-full bg-green-400">{i}</ClickableOpacity>)

    return <VirtualList items={items} height={800} itemHeight={40}/>;
};

export default GenderList;
