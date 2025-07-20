export type RootStackScreens = {
    Home: undefined;
    AddPlants: undefined;
};

export type HeaderProps = {
    title: string;
    showBackButton?: boolean;
    onBack?: () => void;
};

export type DropDownProps = {
    title: string,
    second: boolean,
    isOpen: boolean,
    onToggle: () => void
}