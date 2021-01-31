export interface IRead<T> {
    find(query?: unknown): Promise<T | Array<T>>;
}