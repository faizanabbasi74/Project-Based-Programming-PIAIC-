abstract class Country {
    public name: string;
    public language: string;
    public population: number;
    public populationGrowthRate: number;
    private _statePrivacy: string;
    private _leader: string;

    constructor (name:string, language:string, population:number, populationGrowthRate:number, _statePrivacy: string, _leader:string){
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrowthRate = populationGrowthRate;
        this._statePrivacy = _statePrivacy;
        this._leader = _leader;
    }

    public abstract populationGrowth():number;
    public get privateData (): string {
        return this._statePrivacy
    }
    public set leader (leader:string) {
        this._leader = this._leader
    }
}


class OICCountry extends Country {
    
    constructor (name:string, language:string, population:number, populationGrowthRate:number, _statePrivacy:string, _leader:string){
        super(name, language, population, populationGrowthRate, _statePrivacy, _leader)
    }

    public populationGrowth(): number {
        this.population = this.population * this.populationGrowthRate
        return this.population
    }
}

let Pakistan = new OICCountry ("Pakistan", "Urdu", 3000000, 2.5, "High Alert", "Imran Khan")

console.info(Pakistan)

Pakistan.leader = "Bajwa"

console.info(Pakistan);
