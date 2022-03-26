import SuggestionCard from "./SuggestionCard"

const SuggestionsList = ({suggestions}) => {

  const displaySuggestions = suggestions.map((suggestion) => (
    <SuggestionCard key={suggestion.id} suggestion={suggestion} />
  ))

  return (
    <div>
      {displaySuggestions}
    </div>
  )
}

export default SuggestionsList