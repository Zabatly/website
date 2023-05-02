export interface Storage {
  getToken(key: string): Promise<string | null>;
  saveToken(key: string, value: string): Promise<void>;
}
