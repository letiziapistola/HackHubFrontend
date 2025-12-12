export type InviteType = 'TEAM' | 'STAFF';

export interface Invite {
    id: string;
    type: InviteType;
    senderName: string;
    message: string;
    status: 'PENDING' | 'ACCEPTED' | 'REJECTED';
    createdAt: Date;
    
    // Per inviti a team
    teamName?: string;
    
    // Per inviti a staff di hackathon
    hackathonName?: string;
    role?: 'JUDGE' | 'MENTOR';
}