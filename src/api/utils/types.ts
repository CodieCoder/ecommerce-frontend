export interface IApiError {
  error?: string | null;
  message?: string | string[] | null;
  statusCode?: number | null;
}
