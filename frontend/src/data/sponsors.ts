// Import sponsor logos
import sarcLogo from '../assets/sarc-logo.png';
import vaxholmLogo from '../assets/vaxholm-logo.png';
import fmvLogo from '../assets/fmv-logo.png';

export interface Sponsor {
    id: string;
    name: string;
    description: string;
    logoUrl: string;
    websiteUrl: string;
}

export const sponsors: Sponsor[] = [
    {
        id: 'sarc',
        name: 'SARC — Swedish Aerospace Research Center',
        description: 'SARC is a strategic collaboration of Swedish universities and research organisations conducting research and education within the aerospace sector.',
        logoUrl: sarcLogo,
        websiteUrl: 'https://www.sarc.center/'
    },
    {
        id: 'vaxholm-komposit',
        name: 'Vaxholm Komposit',
        description: 'One of the foremost companies in composite manufacturing in Sweden. They supply the team with a composite workshop as well as crucial know-how.',
        logoUrl: vaxholmLogo,
        websiteUrl: 'https://www.vaxholmkomposit.se/'
    },
    {
        id: 'fmv',
        name: 'Försvarets Materielverk (FMV)',
        description: 'FMV procures, develops, and delivers equipment and services to the Swedish Armed Forces.',
        logoUrl: fmvLogo,
        websiteUrl: 'https://www.fmv.se/'
    }
];