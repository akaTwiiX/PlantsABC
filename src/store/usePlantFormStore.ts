import { create } from 'zustand';
import { LightRequirement } from '@/enums/LightRequirement';
import { PlantType } from '@/enums/PlantType';
import { WaterRequirement } from '@/enums/WaterRequirement';
import { RangeSliderType } from '@/types/RangeSliderType';

type PlantFormState = {
    nameGerman: string;
    nameLatin: string;
    pruning: string;
    fertilization: string;
    soil: string;
    distance: RangeSliderType;
    height: RangeSliderType;
    bloomTime: RangeSliderType;
    type: PlantType;
    light: LightRequirement;
    watering: WaterRequirement;
    frostResistant: boolean;
    fruit: boolean;
    leaf: boolean;
    dryTolerance: boolean;
    edible: boolean;
    toxic: boolean;
    fragrant: boolean;
    buckets: boolean;
    notice: string;
    imageUrl: string;

    setValue: <K extends keyof PlantFormState>(key: K, value: PlantFormState[K]) => void;
    reset: () => void;
};

const initialState: Omit<PlantFormState, 'setValue' | 'reset'> = {
    nameGerman: '',
    nameLatin: '',
    pruning: '',
    fertilization: '',
    soil: '',
    distance: { start: null, end: null },
    height: { start: null, end: null },
    bloomTime: { start: null, end: null },
    type: PlantType.HERB,
    light: LightRequirement.FULL_SUN,
    watering: WaterRequirement.MEDIUM,
    frostResistant: false,
    fruit: false,
    leaf: false,
    dryTolerance: false,
    edible: false,
    toxic: false,
    fragrant: false,
    buckets: false,
    notice: '',
    imageUrl: '',
};

export const usePlantFormStore = create<PlantFormState>((set) => ({
    ...initialState,

    setValue: (key, value) =>
        set((state) => ({
            ...state,
            [key]: value,
        })),

    reset: () => set(initialState),
}));
