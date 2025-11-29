abstract class VoteSystem {
    protected votes: Record<string, number> = {};

    abstract voteFor(candidate: string): void;
    abstract getResults(): object;
}

class Election extends VoteSystem {
    voteFor(candidate: string): void {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }

    getResults(): object {
        return this.votes;
    }
}

class Poll extends VoteSystem {
    voteFor(candidate: string): void {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }

    getResults(): string[] {
        const entries = Object.entries(this.votes);

        entries.sort((a, b) => b[1] - a[1]);

        return entries.map(entry => `${entry[0]} (${entry[1]} votos)`);
    }
}

const enquete = new Poll();
enquete.voteFor("Opção A");
enquete.voteFor("Opção B");
enquete.voteFor("Opção B"); 
console.log(enquete.getResults()); 
