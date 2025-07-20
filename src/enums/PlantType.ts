export enum PlantType {
    HERB = 'HERB',
    SHRUB = 'SHRUB',
    TREE = 'TREE',
    CLIMBER = 'CLIMBER',
}

export const PlantTypeLabel: Record<PlantType, string> = {
    [PlantType.HERB]: 'Kraut',
    [PlantType.SHRUB]: 'Strauch',
    [PlantType.TREE]: 'Baum',
    [PlantType.CLIMBER]: 'Kletterpflanze',
};
