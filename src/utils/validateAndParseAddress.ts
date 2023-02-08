import { ChainId, validateAndParseAddress as validateAndParseAddressCore } from '@lyfebloc/lb-sdk-core'

export const validateAndParseAddress = (address: string) => validateAndParseAddressCore(address, ChainId.MAINNET)
