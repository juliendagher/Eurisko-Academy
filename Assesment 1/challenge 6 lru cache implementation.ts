class LRUCache {
    cache: {key: number, value: number}[];
    capacity: number;
    constructor(capacity: number) {
        this.cache = [];
        this.capacity = capacity;
    }
    get(key: number): number | null {
        const objIndex = this.cache.findIndex(obj => obj.key === key);
        if (objIndex >= 0) {
            const obj = this.cache[objIndex]
            this.cache.splice(objIndex, 1);
            this.cache.push(obj);
            return obj.value;
        }
        return null;

    }
    put(key: number, value: number): void {
        if (this.cache.find(obj => obj.key === key)) return;
        if (this.cache.length === this.capacity) this.cache.shift();
        this.cache.push({key, value});

    }

}

const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));
cache.put(3, 3);
console.log(cache.get(2));
