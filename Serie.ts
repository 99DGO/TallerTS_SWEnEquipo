export class Serie {
    public constructor(private id: number, private name: string, private channel: string, 
    private seasons: number, private description: string, private link: string,
    private image: string) 
    {
        this.seasons=seasons;
        this.description=description;
        this.link=link;
        this.name=name;
        this.channel=channel;
        this.image=image;
        this.id=id;
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
    
    public getId(): number {
        return this.id;
    }

    public getImage(): string {
        return this.image;
    }
}

