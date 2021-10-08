// export interface statusList<T extends any[]> {
//   // count?: number
//   // sum?: number
//   // mean?: number
//   // median?: number
//   // max?: number
//   // min?: number5
//   T[number]
// }

export type statusList<T extends string[]> = {
  [k in keyof T]: any
}

const a: string[] = [...'123']
