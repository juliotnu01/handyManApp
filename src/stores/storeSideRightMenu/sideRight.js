import {defineStore} from "pinia";
import {menuController} from "@ionic/vue";

export const useSideRightMenuStore = defineStore("sideRightMenu", {
    state() {
        return {
            menuID: "", 
            _menuControl: menuController
        };
    },
    getters: {
        openRightMenu: async (state) => {
            await state._menuControl.open(state.menuID);
        },
        closeRightMenu: async (state) => {
            await state._menuControl.close(state.menuID);
        }
    }
});
