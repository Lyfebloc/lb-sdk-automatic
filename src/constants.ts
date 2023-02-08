export const FACTORY_ADDRESS = '0xF38265a24C7BAD831e1410d511270dA6DF9141c1'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const POOL_INIT_CODE_HASH = '0x49ecf333e5b8c95c40fdafc95c1ad136e8914a8fb55e9dc8bb01eaa83a2df9ad'

/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export enum FeeAmount {
  STABLE = 8,
  LOWEST = 10,
  LOW = 40,
  MEDIUM = 300,
  HIGH = 1000
}

/**
 * The default factory tick spacings by fee amount.
 */
export const TICK_SPACINGS: { [amount in FeeAmount]: number } & Record<string, number> = {
  [FeeAmount.STABLE]: 1,
  [FeeAmount.LOWEST]: 1,
  [FeeAmount.LOW]: 8,
  [FeeAmount.MEDIUM]: 60,
  [FeeAmount.HIGH]: 200,
  '50': 10 //for legacy unittest
} as const

export const MIN_LIQUIDITY = 100000
