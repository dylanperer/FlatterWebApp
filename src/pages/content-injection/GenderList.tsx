import {
   IRadioButtonItem,
   RadioButtonGroup,
} from "../../components/RadioButtonGroup";
import { createResource, Show } from "solid-js";
import { ProfileClient } from "../../api/flatter-api/FlatterClient";
import { FlatterApiSettings } from "../../api/flatter-api/FlatterApiSettings";
import { useGlobalContext } from "../../contexts/GlobalContext";
import {ReactNativeHaptic} from "../../api/react-native/ReactNativeClient";
import { ReactNativeHapticEvent } from "../../api/react-native";

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
      <Show when={genderIdentities()}>
         <RadioButtonGroup
            name={"Gender"}
            items={genderIdentities()}
            onChange={(e) => {
               ReactNativeHaptic(ReactNativeHapticEvent.Light);
            }}
            class="px-4"
         />
      </Show>
   );
};

export default GenderList;
