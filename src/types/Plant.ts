import { LightRequirement } from "../enums/LightRequirement";
import { PlantType } from "../enums/PlantType";
import { WaterRequirement } from "../enums/WaterRequirement";
import { RangeSliderType } from "./RangeSliderType";

export type Plant = {
    id?: string;
    nameGerman: string;
    nameLatin: string;
    pruning: string;
    fertilization: string;
    soil: string;
    distance: RangeSliderType;
    height: RangeSliderType; // z. B. "30–80 cm"
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
    notice?: string;
    imageUrl?: string;
};
