interface ICharacters {
  characters: Array<{
    id: number;
    name: string;
    images: Array<string>;
    debut: {
      manga: string;
      anime: string;
      novel?: string;
      movie?: string;
      game: string;
      ova?: string;
      appearsIn: string;
    };
    family?: {
      creator?: string;
      "genetic template"?: string;
      son?: string;
      "great-grandfather"?: string;
      grandfather?: string;
      granduncle?: string;
      grandmother?: string;
      brother?: string;
      lover?: string;
      father?: string;
      wife?: string;
      granddaughter?: string;
      grandson?: string;
      mother?: string;
      niece?: string;
      "grandmother "?: string;
      aunt?: string;
      sister?: string;
      "first cousin once removed"?: string;
      "adoptive brother"?: string;
      host?: string;
      "genetic template/parent"?: string;
      "clone/brother"?: string;
      "pet "?: string;
      uncle?: string;
      cousin?: string;
      daughter?: string;
      "adoptive son"?: string;
      godfather?: string;
      "clone/son"?: string;
      nephew?: string;
      "adoptive mother"?: string;
      "adoptive sons"?: string;
      clone?: string;
      godson?: string;
    };
    jutsu: Array<string>;
    natureType?: Array<string>;
    personal: {
      birthdate?: string;
      sex: string;
      age?: {
        "Part I"?: string;
        "Part II"?: string;
        "Academy Graduate"?: string;
        "Chunin Promotion"?: string;
        "Blank Period"?: string;
        "Boruto Movie"?: string;
        "Boruto Manga"?: string;
      };
      height?: {
        "Part I"?: string;
        "Part II"?: string;
        "Blank Period"?: string;
        Gaiden?: string;
        "Boruto Movie"?: string;
        "Boruto Manga"?: string;
      };
      weight?: {
        "Part I"?: string;
        "Part II"?: string;
      };
      bloodType?: string;
      kekkeiGenkai: any;
      classification: any;
      tailedBeast?: string;
      occupation: any;
      affiliation: Array<string>;
      team: any;
      clan: any;
      titles?: Array<string>;
      status?: string;
      kekkeiMōra?: string;
      partner: any;
      species?: string;
    };
    rank?: {
      ninjaRank: {
        "Part I"?: string;
        "Part II"?: string;
        Gaiden?: string;
        "Blank Period"?: string;
      };
      ninjaRegistration?: string;
    };
    tools?: Array<string>;
    voiceActors: {
      japanese: any;
      english: any;
    };
    uniqueTraits?: Array<string>;
  }>;
  currentPage: number;
  pageSize: number;
  total: number;
}

interface IAkatsuki {
  akatsuki: Array<{
    id: number;
    name: string;
    images: Array<string>;
    debut?: {
      manga?: string;
      anime?: string;
      game?: string;
      appearsIn: string;
      novel?: string;
      movie?: string;
      ova?: string;
    };
    family?: {
      "mother "?: string;
      "adoptive mother"?: string;
      "adoptive sons"?: string;
      "adoptive brother"?: string;
      father?: string;
      mother?: string;
      brother?: string;
      niece?: string;
      granddaughter?: string;
      "original form"?: string;
      creator?: string;
    };
    jutsu?: Array<string>;
    natureType?: Array<string>;
    personal: {
      species?: string;
      status?: string;
      kekkeiGenkai: any;
      classification: any;
      tailedBeast?: string;
      occupation: any;
      affiliation: any;
      partner: any;
      sex?: string;
      age?: {
        "Part II": string;
        "Part I"?: string;
        "Academy Graduate"?: string;
        "Chunin Promotion"?: string;
      };
      height?: {
        "Part II"?: string;
        "Part I"?: string;
        Gaiden?: string;
      };
      birthdate?: string;
      weight?: {
        "Part II"?: string;
        "Part I"?: string;
      };
      bloodType?: string;
      team: any;
      clan?: string;
      titles?: Array<string>;
    };
    uniqueTraits?: Array<string>;
    voiceActors?: {
      japanese: any;
      english: any;
    };
    tools?: Array<string>;
    rank?: {
      ninjaRank?: {
        "Part II"?: string;
        "Part I"?: string;
      };
      ninjaRegistration?: string;
    };
    香燐Karin?: {};
  }>;
  currentPage: number;
  pageSize: number;
  total: number;
}

interface ITailedBeasts {
  "tailed-beasts": Array<{
    id: number;
    name: string;
    images: Array<string>;
    debut: {
      manga: string;
      anime: string;
      novel: string;
      movie: string;
      game: string;
      ova?: string;
      appearsIn: string;
    };
    family: {
      "incarnation with the god tree"?: string;
      "depowered form"?: string;
      creator?: string;
      sibling?: string;
    };
    jutsu: Array<string>;
    natureType?: Array<string>;
    personal: {
      status?: string;
      kekkeiGenkai?: string;
      classification: any;
      jinchūriki: Array<string>;
      titles?: Array<string>;
      species?: string;
      affiliation: any;
    };
    uniqueTraits?: Array<string>;
    voiceActors?: {
      japanese: string;
      english: any;
    };
    tools?: Array<string>;
  }>;
  currentPage: number;
  pageSize: number;
  total: number;
}
