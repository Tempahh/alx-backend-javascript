export default function getNeighborhoodList() {
    this.sanfraciscoNeighborhoods = ['SOMA', 'Union Square'];
    
    const self = this;
    this.addNeighborhood = (newNeighborhood) => {
        self.sanfraciscoNeighborhoods.push(newNeighborhood);
        return self.sanfraciscoNeighborhoods;
    };
}