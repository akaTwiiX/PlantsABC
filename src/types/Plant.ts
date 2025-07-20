import { LightRequirement } from "../enums/LightRequirement";
import { PlantType } from "../enums/PlantType";
import { WaterRequirement } from "../enums/WaterRequirement";

export type Plant = {
    id?: string;
    nameGerman: string;
    nameLatin: string;
    type: PlantType;
    height: string; // z. B. "30–80 cm"
    bloomTime: string;
    leaf: boolean;
    fruit: boolean;
    light: LightRequirement;
    soil: string;
    frostResistant: boolean;
    watering: WaterRequirement;
    fertilization: string;
    dryTolerance: boolean;
    edible: boolean;
    toxic: boolean;
    fragrant: boolean;
    buckets: boolean;
    notice: string;
    distance: string;
    pruning: string;
    imageUrl?: string;
};
