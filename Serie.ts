export class Serie {
    public constructor(public id: number, private name: string, private channel: string, 
    private seasons: number, private description: string, private link: string,
    private image: string) 
    {
        this.seasons=seasons;
        this.description=description;
        this.link=link;
        this.name=name;
        this.channel=channel;
        this.image=image;
    }

    public getName(): string {
        return this.name;
    }

    public getChannel(): string {
        return this.channel;
    }

    public getSeasons(): number {
        return this.seasons;
    }

    public getImage(): string {
        return this.image;
    }
}

