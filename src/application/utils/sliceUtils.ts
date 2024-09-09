export interface CollectionEntityState<T> {
  loading: boolean;
  data: ReadonlyArray<T> | undefined;
}
