export interface Invite {
    id: string
    senderName: string;
    teamName: string;
    message: string;
    status: 'PENDING' | 'ACCEPTED' | 'REJECTED';
    createdAt: Date;
}