export interface CollectionEntityState<T> {
  loading: boolean;
  data: ReadonlyArray<T> | undefined;
}

export interface EntityState<T> {
  loading: boolean;
  data: T | undefined;
}
