class LRUCache {
    #capacity
    #cache = new Map()
    constructor(capacity) {
        this.#capacity = capacity;
    }
    put (key, value) {
        if (this.#cache.has(key)) {
            this.#cache.delete(key);
        } else if (this.#cache.size >= this.#capacity) {
            const oldestKey = this.#cache.keys().next().value;
            this.#cache.delete(oldestKey);
        }
         this.#cache.set(key, value);
    }
    get (key) {
        if (!this.#cache.has(key)) return undefined;

        const value = this.#cache.get(key);

        this.put(key, value);
        return value;
    }
}

let cache = new LRUCache(3);
cache.put('first', 1);
cache.put('second', 2);
cache.put('third', 3);
