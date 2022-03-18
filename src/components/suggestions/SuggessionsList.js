import SuggesstionCard from "./SuggesstionCard"

const SuggessionsList = ({suggestions}) => {

  const displaySuggestions = suggestions.map((suggestion) => (
    <SuggesstionCard key={suggestion.id} suggestion={suggestion} />
  ))

  return (
    <div>
      {/* {displaySuggestions.legnth > 0 ? displaySuggestions : "No Result Found"} */}
      {displaySuggestions}
    </div>
  )
}

export default SuggessionsList