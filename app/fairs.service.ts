export class Fair {
    constructor(public id: number, public name: string, public location: string) {}
}

var FAIRS = [
    new Fair(101, 'Porcijunkulovo', 'Čakovec'),
    new Fair(102, 'Anđeoska strijela', 'Varaždin'),
    new Fair(103, 'Renesansni festival', 'Koprivnica'),
];

var fairsPromise = Promise.resolve(FAIRS);

export class FairService {
    getFairs() {
        return fairsPromise;
    }
    
    getFair(id: number | string) {
        return fairsPromise.then(fairs => fairs.filter(f => f.id === +id)[0]);
    }
}