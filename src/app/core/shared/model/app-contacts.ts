import { AppSocialLink } from './app-social-link';



export class AppContacts {
    email: string;
    phone: string;
    socialLinks: AppSocialLink[];

    constructor(data: Partial<AppContacts>) {

        this.socialLinks = [];
        Object.assign(this, data);
    }
}
