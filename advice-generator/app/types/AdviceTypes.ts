import { KeyedMutator } from 'swr'

export interface AdviceProps {
  isLoading: boolean
  data: AdviceData | undefined
  onGenerateAdvice: KeyedMutator<AdviceData>
}

export interface AdviceData {
  slip: {
    id: number
    advice: string
  }
}
