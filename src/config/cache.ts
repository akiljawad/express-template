// src/common/cache/memory.cache.ts
import NodeCache from 'node-cache';
import {CacheStore} from "@common/interfaces";
import {env} from "@config/index";

export class MemoryCache implements CacheStore {
    private cache: NodeCache;
    private readonly prefix: string;

    constructor(ttl = 60) {
        this.cache = new NodeCache({stdTTL: ttl});
        this.prefix = env.CACHE_PREFIX
    }

    async get<T>(key: string): Promise<T | null> {
        const value = this.cache.get<T>(`${this.prefix}:${key}`);
        return value ?? null;
    }

    async set<T>(key: string, value: T, ttl: number): Promise<void> {
        this.cache.set(`${this.prefix}:${key}`, value, ttl);
    }

    async del(key: string): Promise<void> {
        this.cache.del(`${this.prefix}:${key}`);
    }

    async flush(): Promise<void> {
        this.cache.flushAll();
    }
}
