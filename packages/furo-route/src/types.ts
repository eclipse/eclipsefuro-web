export interface QueryParams {
  [key: string]: string | number
}

export interface HashParams {
  [key: string]: string | number
}

/**
 * ### LocationObject
 * ```json
 * {
 *     "host": "localhost:8480",
 *     "query": {"tsk": 999},
 *     "hash": {},
 *     "path": "/detail",
 *     "pathSegments": [
 *         "detail"
 *     ],
 *     "hashstring": "",
 *     "querystring": "tsk=999"
 * }
 * ```
 */
export interface LocationObject{
  host:string,
  query:QueryParams,
  hash:HashParams,
  path:string,
  pathSegments:string[],
  hashString:string,
  queryString:string
}


export interface QueryParamMap {
  from: string,
  to: string,
}

export interface Route {
  current: string,
  flowEvent: string,
  target: "HISTORY-BACK" | "WINDOW-CLOSE"| string,
  queryParamMapping: undefined | null | "*" | QueryParamMap[],
  isExternalTarget?: boolean,
  forceOpenBlank?: boolean,
}

export interface FlowEvent {
  eventName: string,
  queryParams?: QueryParams,
  url?:string,
}
