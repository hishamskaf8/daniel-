
export interface BirthdayMessage {
  arabic: string;
  french: string;
  vibe: string;
}

export enum WeatherState {
  STORMY = 'stormy',
  CALM = 'calm'
}

export type RSVPStatus = 'pending' | 'attending' | 'maybe' | 'declined';
