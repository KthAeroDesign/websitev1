export interface Boardmember {
    id: string;
    title: string;
    name: string;
    email?: string;
}

export const boardmembers: Boardmember[] = [
    {
        id: 'chairman',
        title: 'Chairman',
        name: 'Niklas Westberg',
        //email: 'kthaerodesign@gmail.com'
    },
    {
        id: 'secretary',
        title: 'Secretary',
        name: 'Hicham Benkhalfa'
    },
    {
        id: 'boardmember',
        title: 'Board member',
        name: 'Maruo Osazee Penna'
    }
];