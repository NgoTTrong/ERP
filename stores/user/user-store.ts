import { create } from "zustand";
import { IUser } from "./type";

type State = {
    user: IUser | null;
};

type Action = {
    setUser: (_user: IUser) => void;
};

const useUser = create<State & Action>((set) => ({
    user: null,
    setUser: (_user) => set(() => ({ user: _user })),
}));
export default useUser;
