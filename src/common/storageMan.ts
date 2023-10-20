type Key = "access-token" | "refresh-token";

type Tokens = {

}

export const writeAuthentication = (accessToken: string, refreshToken: string)=>{
   writeToSession("access-token", { accessToken });
   writeToLocal("refresh-token", { refreshToken });
}

const writeToSession = (key: Key, data: object) => {
   try {
      sessionStorage.setItem(key, JSON.stringify(data));
   } catch {}
};
const writeToLocal = (key: Key, data: object) => {
   try {
      localStorage.setItem(key, JSON.stringify(data));
   } catch {}
};
