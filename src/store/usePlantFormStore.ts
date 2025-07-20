import { create } from 'zustand';
import { LightRequirement } from '@/enums/LightRequirement';
import { RangeSliderType } from '@/types/RangeSliderType';



type PlantFormState = {
    image: string;
    latName: string;
    deName: string;
    light: LightRequirement;
    comment: string;
    selectedMonthRange: RangeSliderType;

    setImage: (uri: string) => void;
    setLatName: (name: string) => void;
    setDeName: (name: string) => void;
    setLight: (light: LightRequirement) => void;
    setComment: (text: string) => void;
    setSelectedMonthRange: (range: RangeSliderType) => void;

    reset: () => void;
};

export const usePlantFormStore = create<PlantFormState>((set) => ({
    image: '',
    latName: '',
    deName: '',
    light: LightRequirement.FULL_SUN,
    comment: '',
    selectedMonthRange: { start: null, end: null },

    setImage: (image) => set({ image }),
    setLatName: (latName) => set({ latName }),
    setDeName: (deName) => set({ deName }),
    setLight: (light) => set({ light }),
    setComment: (comment) => set({ comment }),
    setSelectedMonthRange: (range) => set({ selectedMonthRange: range }),

    reset: () => set({
        image: '',
        latName: '',
        deName: '',
        light: LightRequirement.FULL_SUN,
        comment: '',
        selectedMonthRange: { start: null, end: null },
    }),
}));
