import { SnowMoSignup, TransferFrom, WithdrawFromVia } from './types/SnowMoResolver/SnowMoResolver'
import { SnowMoEntity, SnowMoTransfer, SnowMoWithdrawFromVia } from './types/schema'

export function handleSnowMoSignup(event: SnowMoSignup): void {
  let entity = new SnowMoEntity(event.params.ein.toHex())

  entity.transactionHash = event.transaction.hash
  entity.blockNumber = event.block.number
  entity.timestamp = event.block.timestamp

  entity.ein = event.params.ein

  entity.save()
}

export function handleTransferFrom(event: TransferFrom): void {
  let entity = new SnowMoTransfer(event.transaction.hash.toHex())
 
  entity.transactionHash = event.transaction.hash
  entity.blockNumber = event.block.number
  entity.timestamp = event.block.timestamp

  entity.einFrom = event.params.einFrom
  entity.einTo = event.params.einTo
  entity.amount = event.params.amount
  if (event.params.message !== '') {
    entity.message = event.params.message
  }

  entity.save()
}

export function handleWithdrawFromVia(event: WithdrawFromVia): void {
  let entity = new SnowMoWithdrawFromVia(event.transaction.hash.toHex())

  entity.transactionHash = event.transaction.hash
  entity.blockNumber = event.block.number
  entity.timestamp = event.block.timestamp

  entity.einFrom = event.params.einFrom
  entity.to = event.params.to
  entity.via = event.params.via
  entity.amount = event.params.amount
  if (event.params.message !== '') {
    entity.message = event.params.message
  }

  entity.save()
}
