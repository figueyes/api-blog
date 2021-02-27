export interface IUpdate<T> {
    update(query: unknown, body: T): Promise<T>;
}