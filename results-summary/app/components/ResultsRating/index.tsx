import ResultsCard from './ResultsCard'
import ResultsSummay from './ResultsSummary'
import { ResultsRatingProps, ResultsSummaryData } from '@/types/ResultSummary'
import Container from '@/components/Container'

const ResultsRating = ({ isLoading, data }: ResultsRatingProps) => (
  <Container>
    <ResultsCard scoreAverage={CalculateAverage(data)} />
    <ResultsSummay isLoading={isLoading} resultsList={data} />
  </Container>
)

const CalculateAverage = (list: ResultsSummaryData[] | undefined) => {
  if (list == null) {
    return 0
  }
  const score = list.map((i) => i.score).reduce((a, b) => a + b) / list.length

  return Math.round(score)
}
export default ResultsRating
