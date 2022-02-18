export interface LayoutChildren {
  children: React.ReactNode;
}

export interface ButtonProps {
  onClick: () => void;
}

export interface ModalProps {
  show: boolean;
  onModalClose: () => void;
}

export interface Country {
  index: string | number;
  id: string;
  name: string;
  quantity: string | number;
}

export interface CountryRenderData {
  id: string;
  index: number;
  countryName: string;
  totalConfirmed: number;
}

export interface CountryDetailedData extends CountryRenderData {
  totalDeaths: number;
  totalRecovered: number;
}

export interface DataSlice {
  countries: CountryDetailedData[];
  filteredCoutries: CountryDetailedData[];
  selectedCountry: CountryDetailedData;
}
