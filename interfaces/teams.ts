export interface ITeams {
  _id?: any;
  team_name: string;
  formal_name: string;
  location_city: string;
  year_foundation: string;
  shield_image: string;
  slug: string;
  actually_squad_image: string;
  first_wear_image: string;
  second_wear_image: string;
  league: ILeague;
  stadium: IStadium;
  technical_staff: ITechnicalStaff[];
  players: IPlayers[];
}

export interface IPlayers {
  _id?: string;
  name: string;
  slug: string;
  birthday: string;
  position: string;
  position_abbreviate: string;
  nationality: string;
  dorsal: string;
  club: string;
  image: string;
}

export interface ILeague {
  identify: string;
  name: string;
}

export interface IStadium {
  name: string;
  capacity: string;
  address: string;
  image: string;
}

export interface ITechnicalStaff {
  _id?: string;
  name: string;
  appointment: string;
  image: string;
}
