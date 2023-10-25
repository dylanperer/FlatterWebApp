import {
   IRadioButtonItem,
   RadioButtonGroup,
} from "../../components/RadioButtonGroup";
import { createEffect, createResource, createSignal, Show } from "solid-js";
import { ProfileClient } from "../../api/flatter-api/FlatterClient";
import { FlatterApiSettings } from "../../api/flatter-api/FlatterApiSettings";
import { useFlatterClient } from "../../hooks/useFlatterClient";
import { useGlobalContext } from "../../contexts/GlobalContext";
import {twMerge} from "tailwind-merge";

const fetchGenderIdentities = async () => {
   try {
      const client = new ProfileClient(FlatterApiSettings);
      const genderIdentities = await client.getGenderIdentities();

      return genderIdentities.map((c) => {
         const item: IRadioButtonItem = {
            id: c.genderIdentityId,
            value: "genderIdentity",
            element: c.value,
         };
         return item;
      });
   } catch (e) {
      console.error(e);
   }
};

const GenderList = () => {
   const [genderIdentities] = createResource(fetchGenderIdentities);

   let containerHeight: HTMLDivElement;

   const {
      bottomDrawerSnapIndex: [currentIndex],
   } = useGlobalContext();


   return (
      <div ref={(c)=>containerHeight} style={{height: `${currentIndex()}px`}}>
         <Show when={genderIdentities()}>
            <RadioButtonGroup
               name={"Gender"}
               items={genderIdentities()}
               onChange={(e) => console.log(e)}
               class="px-4"
            />
         </Show>
      </div>
   );
};

export default GenderList;
