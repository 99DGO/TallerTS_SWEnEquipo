export class Serie {
    constructor(id, name, channel, seasons, description, link, image) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.image = image;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.name = name;
        this.channel = channel;
        this.image = image;
        this.id = id;
    }
    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    getLink() {
        return this.link;
    }
    getChannel() {
        return this.channel;
    }
    getSeasons() {
        return this.seasons;
    }
    getId() {
        return this.id;
    }
    getImage() {
        return this.image;
    }
}
