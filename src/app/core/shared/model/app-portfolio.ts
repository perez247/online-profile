import { AppBase } from './app-base';


export class AppPortfolio extends AppBase {
    key: string;
    projectName: string;
    description: string;
    url: string;
    tools: any;

    constructor(data: Partial<AppPortfolio>) {
        super();
        Object.assign(this, data);
        this.unserializeTools();
    }

    unserializeTools() {
        const tools: string = this.tools;
        if (tools) {
            this.tools = tools.split('%&%');
        } else {
            this.tools = [];
        }
    }

    serializeTools() {
        const tools: string[] = this.tools;
        if (tools.length > 0) {
            this.tools = tools.join('%&%');
        } else {
            this.tools = '';
        }
    }
}

