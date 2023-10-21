import { useSearchParams } from "@solidjs/router";
import {VirtualList} from "../../components/VritualList";
import {TouchableOpacity} from "../../components";
const GenderList = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const items = Array.from({length: 10000}).map((c,i)=><TouchableOpacity class="w-full h-full border-2">{i}</TouchableOpacity>)

    return <VirtualList items={items} height={800} itemHeight={60}/>;
};

export default GenderList;
