export type Maybe<T> = T extends PromiseLike<infer U> ? Promise<U | null> : T | null;
