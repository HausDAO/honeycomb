import { gql } from '@apollo/client'

export const GET_TOKEN_PRICE = gql`
  query tokenPrice($tokenAddress: ID!) {
    token(id: $tokenAddress) {
      derivedETH
    }
  }
`

export const GET_POOLS = gql`
  {
    pools(orderBy: rewards, orderDirection: desc) {
      id
      pair {
        id
        token0 {
          symbol
        }
        token1 {
          symbol
        }
      }
      rewards
      staked
      rewardToken {
        id
        symbol
      }
    }
  }
`

export const GET_LIQUIDITY = gql`
  query liqudityInPair($pair: ID!) {
    pair(id: $pair) {
      reserveETH
    }
  }
`
